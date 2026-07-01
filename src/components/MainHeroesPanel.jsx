import { useState } from 'react';
import { heroes } from '../data/heroes.js';
import { getMainHeroes, saveMainHeroes, getMainHeroesPrefs, setMainHeroesPrefs } from '../data/storage.js';

const MAIN_HERO_ROLES = ['Tank', 'Damage', 'Support'];
const MAX_SLOTS = 3;

// Same swatch set as the Academy Badges panel, for a consistent customisation UX.
const MAIN_HERO_COLORS = [
  { label: 'Orange', value: '#ff9c00' },
  { label: 'Blue',   value: '#60a5fa' },
  { label: 'Purple', value: '#a78bfa' },
  { label: 'Green',  value: '#4ade80' },
  { label: 'Pink',   value: '#f472b6' },
  { label: 'Red',    value: '#f87171' },
];

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function heroesForRole(role) {
  return heroes.filter(h => h.role === role);
}

function findHero(heroId) {
  return heroes.find(h => h.id === heroId) || null;
}

function MainHeroRow({ entry, color }) {
  const hero = findHero(entry.heroId);
  return (
    <div className="mh-row">
      {hero ? (
        <img src={hero.image} alt={hero.name} className="mh-row-portrait" />
      ) : (
        <div className="mh-row-portrait mh-row-portrait-empty" aria-hidden="true" />
      )}
      <div className="mh-row-info">
        <span className="mh-row-role">{entry.role}</span>
        <span className="mh-row-hero" style={hero ? { color } : undefined}>{hero ? hero.name : 'Not set'}</span>
      </div>
    </div>
  );
}

function MainHeroesEditModal({ mainHeroes, prefs, onSave, onClose }) {
  const initialSlots = Array.from({ length: MAX_SLOTS }, (_, i) => ({
    role: mainHeroes[i]?.role || '',
    heroId: mainHeroes[i]?.heroId || '',
  }));
  const [slots, setSlots] = useState(initialSlots);
  const [color, setColor] = useState(prefs.color || '#ff9c00');

  function updateSlot(index, field, value) {
    setSlots(prev => prev.map((slot, i) => {
      if (i !== index) return slot;
      if (field === 'role') return { role: value, heroId: '' };
      return { ...slot, [field]: value };
    }));
  }

  function handleSave() {
    const cleaned = slots.filter(s => s.role && s.heroId);
    onSave(cleaned, { color });
    onClose();
  }

  return (
    <div className="bcm-overlay" onClick={onClose}>
      <div className="bcm-panel mh-edit-panel" onClick={e => e.stopPropagation()}>
        <div className="bcm-header">
          <h3 className="bcm-title">Edit Main Heroes</h3>
          <button type="button" className="bcm-close" onClick={onClose}>✕</button>
        </div>

        <p className="bcm-section-label">Accent Colour</p>
        <div className="bcm-colors">
          {MAIN_HERO_COLORS.map(c => (
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

        <div className="mh-edit-list">
          {slots.map((slot, index) => {
            const hero = findHero(slot.heroId);
            return (
              <div key={index} className="mh-edit-row">
                <span className="mh-edit-slot-label">Role {index + 1}</span>
                <div className="mh-edit-selects">
                  <select
                    className="cr-select"
                    value={slot.role}
                    onChange={e => updateSlot(index, 'role', e.target.value)}
                  >
                    <option value="">No role</option>
                    {MAIN_HERO_ROLES.map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  <select
                    className="cr-select"
                    value={slot.heroId}
                    onChange={e => updateSlot(index, 'heroId', e.target.value)}
                    disabled={!slot.role}
                  >
                    <option value="">{slot.role ? 'Choose hero' : '—'}</option>
                    {heroesForRole(slot.role).map(h => (
                      <option key={h.id} value={h.id}>{h.name}</option>
                    ))}
                  </select>
                  {hero && (
                    <img src={hero.image} alt="" className="mh-edit-portrait-preview" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bcm-actions">
          <button type="button" className="bcm-cancel" onClick={onClose}>Cancel</button>
          <button type="button" className="bcm-save" style={{ background: color }} onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default function MainHeroesPanel({ userId, readOnly = false }) {
  const [mainHeroes, setMainHeroes] = useState(() => getMainHeroes(userId));
  const [prefs, setPrefs] = useState(() => getMainHeroesPrefs(userId));
  const [editOpen, setEditOpen] = useState(false);

  const color = prefs.color || '#ff9c00';

  function handleSave(newMainHeroes, newPrefs) {
    saveMainHeroes(userId, newMainHeroes);
    setMainHeroesPrefs(userId, newPrefs);
    setMainHeroes(newMainHeroes);
    setPrefs(newPrefs);
  }

  return (
    <>
      <div
        className="mh-panel"
        style={{ background: hexToRgba(color, 0.07), borderColor: hexToRgba(color, 0.3) }}
      >
        <div className="mh-panel-header">
          <span className="mh-panel-title" style={{ color }}>My Mains</span>
          {!readOnly && (
            <button type="button" className="up-badge-panel-edit-btn" onClick={() => setEditOpen(true)} title="Edit Main Heroes">✏️</button>
          )}
        </div>

        {mainHeroes.length > 0 ? (
          <div className="mh-row-list">
            {mainHeroes.map((entry, i) => (
              <MainHeroRow key={i} entry={entry} color={color} />
            ))}
          </div>
        ) : (
          <p className="mh-empty">
            {readOnly ? 'No main heroes displayed yet.' : 'Choose your main heroes to display them here.'}
          </p>
        )}

        {!readOnly && (
          <button
            type="button"
            className="mh-edit-btn"
            style={{ borderColor: hexToRgba(color, 0.35), color }}
            onClick={() => setEditOpen(true)}
          >
            Edit Main Heroes
          </button>
        )}
      </div>

      {!readOnly && editOpen && (
        <MainHeroesEditModal
          mainHeroes={mainHeroes}
          prefs={prefs}
          onSave={handleSave}
          onClose={() => setEditOpen(false)}
        />
      )}
    </>
  );
}
