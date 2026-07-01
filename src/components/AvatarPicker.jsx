import { useRef, useState } from 'react';
import { heroes } from '../data/heroes.js';
import { RANK_TIERS, RANK_BADGES } from '../data/competitiveRanks.js';
import { cropImageToSquare } from '../data/storage.js';

const TABS = [
  { id: 'upload', label: 'Upload Image' },
  { id: 'hero',   label: 'Hero Portraits' },
  { id: 'rank',   label: 'Competitive Ranks' },
];

export default function AvatarPicker({ value, onChange, onError }) {
  const [tab, setTab] = useState(value?.type === 'rank' ? 'rank' : value?.type === 'hero' ? 'hero' : 'upload');
  const fileRef = useRef();

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!['image/png', 'image/jpeg', 'image/jpg', 'image/webp'].includes(file.type)) {
      onError?.('Please upload a PNG, JPG, JPEG or WEBP image.');
      return;
    }
    const reader = new FileReader();
    reader.onload = async ev => {
      const cropped = await cropImageToSquare(ev.target.result);
      onChange({ type: 'upload', value: cropped });
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="ap-picker">
      <div className="auth-avatar-tabs">
        {TABS.map(t => (
          <button
            key={t.id}
            type="button"
            className={`auth-avatar-tab${tab === t.id ? ' active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'upload' && (
        <div className="avatar-upload-zone">
          {value?.type === 'upload' && value.value ? (
            <div className="avatar-upload-preview-wrap">
              <img src={value.value} alt="Preview" className="avatar-upload-preview" />
              <button
                type="button"
                className="avatar-upload-change"
                onClick={() => { onChange({ type: 'upload', value: '' }); if (fileRef.current) fileRef.current.value = ''; }}
              >
                Remove
              </button>
            </div>
          ) : (
            <button type="button" className="avatar-upload-btn" onClick={() => fileRef.current.click()}>
              <span className="avatar-upload-icon">↑</span>
              <span>Choose image</span>
              <span className="avatar-upload-sub">PNG, JPG, JPEG or WEBP · auto-cropped to square</span>
            </button>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg,image/webp"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      )}

      {tab === 'hero' && (
        <div className="avatar-preset-grid ap-scroll-grid">
          {heroes.map(h => (
            <button
              key={h.id}
              type="button"
              className={`avatar-option${value?.type === 'hero' && value.value === h.id ? ' selected' : ''}`}
              onClick={() => onChange({ type: 'hero', value: h.id })}
              title={h.name}
            >
              <img src={h.image} alt={h.name} />
              <span>{h.name}</span>
            </button>
          ))}
        </div>
      )}

      {tab === 'rank' && (
        <div className="avatar-preset-grid ap-scroll-grid">
          {RANK_TIERS.map(r => (
            <button
              key={r.id}
              type="button"
              className={`avatar-option ap-rank-option${value?.type === 'rank' && value.value === r.id ? ' selected' : ''}`}
              onClick={() => onChange({ type: 'rank', value: r.id })}
              title={r.label}
            >
              <img src={RANK_BADGES[r.id]} alt={r.label} />
              <span>{r.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
