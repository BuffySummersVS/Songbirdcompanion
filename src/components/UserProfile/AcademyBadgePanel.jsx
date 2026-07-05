import { useState } from 'react';
import { BADGES } from '../../data/academy/badges.js';
import { getAcademyBadges, getBadgePanelPrefs, setBadgePanelPrefs } from '../../data/storage';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useFocusTrap } from '../../hooks/useFocusTrap';

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const BADGE_COLORS = [
  { label: 'Orange', value: '#ff9c00' },
  { label: 'Blue',   value: '#60a5fa' },
  { label: 'Purple', value: '#a78bfa' },
  { label: 'Green',  value: '#4ade80' },
  { label: 'Pink',   value: '#f472b6' },
  { label: 'Red',    value: '#f87171' },
];

function BadgeCustomizeModal({ prefs, allEarned, onSave, onClose }) {
  useEscapeKey(onClose);
  const panelRef = useFocusTrap();

  const [color, setColor] = useState(prefs.color || '#ff9c00');
  const [selected, setSelected] = useState(() => {
    const ids = prefs.selectedBadgeIds?.length > 0
      ? prefs.selectedBadgeIds
      : allEarned.slice(0, 9).map(b => b.id);
    return new Set(ids);
  });

  function toggleBadge(id) {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else if (next.size < 9) {
        next.add(id);
      } else {
        // At capacity — swap out the oldest selected badge to make room
        const oldest = next.values().next().value;
        next.delete(oldest);
        next.add(id);
      }
      return next;
    });
  }

  function handleSave() {
    onSave({ color, selectedBadgeIds: [...selected] });
    onClose();
  }

  return (
    <div className="bcm-overlay" onClick={onClose}>
      <div ref={panelRef} className="bcm-panel" role="dialog" aria-modal="true" tabIndex={-1} onClick={e => e.stopPropagation()}>
        <div className="bcm-header">
          <h3 className="bcm-title">Customise Badge Panel</h3>
          <button type="button" className="bcm-close" onClick={onClose}>✕</button>
        </div>

        <p className="bcm-section-label">Accent Colour</p>
        <div className="bcm-colors">
          {BADGE_COLORS.map(c => (
            <button
              key={c.value}
              type="button"
              className={`bcm-color-swatch${color === c.value ? ' active' : ''}`}
              style={{ background: c.value, boxShadow: color === c.value ? `0 0 0 3px ${hexToRgba(c.value, 0.5)}` : 'none' }}
              onClick={() => setColor(c.value)}
              title={c.label}
            />
          ))}
        </div>

        <p className="bcm-section-label">
          Select Badges to Display <span className="bcm-count-hint">({selected.size} / 9{selected.size >= 9 ? ' — selecting another will swap out the oldest' : ''})</span>
        </p>
        {allEarned.length === 0 ? (
          <p className="bcm-empty">No badges earned yet.</p>
        ) : (
          <div className="bcm-badge-grid">
            {allEarned.map(b => {
              const isSelected = selected.has(b.id);
              return (
                <button
                  key={b.id}
                  type="button"
                  className={`bcm-badge-item${isSelected ? ' selected' : ''}`}
                  style={isSelected ? { borderColor: color, background: hexToRgba(color, 0.12) } : {}}
                  onClick={() => toggleBadge(b.id)}
                >
                  <span className="bcm-badge-icon">{b.icon}</span>
                  <span className="bcm-badge-name">{b.name}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="bcm-actions">
          <button type="button" className="bcm-cancel" onClick={onClose}>Cancel</button>
          <button type="button" className="bcm-save" style={{ background: color }} onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default function AcademyBadgePanel({ userId, readOnly = false }) {
  const [prefs, setPrefs] = useState(() => getBadgePanelPrefs(userId));
  const [customizeOpen, setCustomizeOpen] = useState(false);

  const earnedBadges = getAcademyBadges(userId) || {};
  const allEarned = BADGES.filter(b => earnedBadges[b.id]);
  const totalCount = allEarned.length;

  const displayIds = prefs.selectedBadgeIds?.length > 0
    ? prefs.selectedBadgeIds
    : allEarned.slice(0, 9).map(b => b.id);
  const displayed = allEarned.filter(b => displayIds.includes(b.id));

  const color = prefs.color || '#ff9c00';

  function savePrefs(newPrefs) {
    setBadgePanelPrefs(userId, newPrefs);
    setPrefs(newPrefs);
  }

  return (
    <>
      <div
        className="up-badge-panel"
        style={{ background: hexToRgba(color, 0.07), borderColor: hexToRgba(color, 0.3) }}
      >
        <div className="up-badge-panel-header">
          <span className="up-badge-panel-title" style={{ color }}>
            Academy Badges{totalCount > 0 && <span className="up-badge-panel-count"> ({totalCount})</span>}
          </span>
          {!readOnly && (
            <button type="button" className="up-badge-panel-edit-btn" onClick={() => setCustomizeOpen(true)} title="Customise">✏️</button>
          )}
        </div>
        {allEarned.length === 0 ? (
          <p className="up-badge-panel-empty">
            {readOnly ? 'No Academy badges earned yet.' : 'Complete Academy lessons and quizzes to earn badges here.'}
          </p>
        ) : (
          <div className="up-badge-panel-list">
            {displayed.map(b => (
              <div key={b.id} className="up-badge-panel-item">
                <span className="up-badge-panel-icon">{b.icon}</span>
                <span className="up-badge-panel-name" style={{ color }}>{b.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {!readOnly && customizeOpen && (
        <BadgeCustomizeModal
          prefs={prefs}
          allEarned={allEarned}
          onSave={savePrefs}
          onClose={() => setCustomizeOpen(false)}
        />
      )}
    </>
  );
}
