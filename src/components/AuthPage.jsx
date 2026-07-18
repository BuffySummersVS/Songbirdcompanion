import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { containsProfanity } from '../data/profanity';
import { DEFAULT_AVATAR, getAvatarSrc } from '../data/avatars';
import { heroes } from '../data/heroes.js';
import { RANK_TIERS } from '../data/competitiveRanks.js';
import AvatarPicker from './AvatarPicker.jsx';
import { useEscapeKey } from '../hooks/useEscapeKey';
import Modal, { ModalHeader } from './Modal';

function avatarLabel(avatar) {
  if (avatar.type === 'upload') return 'Custom upload';
  if (avatar.type === 'hero') return heroes.find(h => h.id === avatar.value)?.name ?? 'Hero portrait';
  if (avatar.type === 'rank') return RANK_TIERS.find(r => r.id === avatar.value)?.label ?? 'Rank badge';
  return 'Avatar';
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
      <path d="M14.12 14.12a3 3 0 0 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  );
}

export function PasswordInput({ value, onChange, placeholder, autoComplete }) {
  const [show, setShow] = useState(false);
  return (
    <div className="auth-input-wrap">
      <input
        className="auth-input"
        type={show ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <button
        type="button"
        className="auth-eye-btn"
        onClick={() => setShow(s => !s)}
        aria-label={show ? 'Hide password' : 'Show password'}
        title={show ? 'Hide password' : 'Show password'}
      >
        {show ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    </div>
  );
}

export default function AuthModal({ open, onClose, onSuccess }) {
  const { login, register } = useAuth();
  const [tab, setTab] = useState('login');

  useEscapeKey(onClose, open);

  if (!open) return null;

  return (
    <Modal onClose={onClose} panelClassName="auth-modal-panel">
      <ModalHeader title={tab === 'login' ? 'Welcome Back' : 'Create Account'} onClose={onClose} />

      <div className="auth-tabs">
        <button
          type="button"
          className={`auth-tab${tab === 'login' ? ' active' : ''}`}
          onClick={() => setTab('login')}
        >
          Log In
        </button>
        <button
          type="button"
          className={`auth-tab${tab === 'register' ? ' active' : ''}`}
          onClick={() => setTab('register')}
        >
          Create Account
        </button>
      </div>

      {tab === 'login'
        ? <LoginForm login={login} onSuccess={onSuccess} />
        : <RegisterForm register={register} onSuccess={onSuccess} />
      }
    </Modal>
  );
}

function LoginForm({ login, onSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [busy, setBusy]         = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!username.trim() || !password) { setError('Please fill in all fields.'); return; }
    setBusy(true);
    try {
      await login(username.trim(), password);
      onSuccess?.();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <div className="auth-field">
        <label className="auth-label">Username</label>
        <input
          className="auth-input"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          autoComplete="username"
          placeholder="Your username"
        />
      </div>
      <div className="auth-field">
        <label className="auth-label">Password</label>
        <PasswordInput
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
          placeholder="Your password"
        />
      </div>
      {error && <p className="auth-error">{error}</p>}
      <button type="submit" className="auth-submit-btn" disabled={busy}>
        {busy ? 'Logging in…' : 'Log In'}
      </button>
    </form>
  );
}

function RegisterForm({ register, onSuccess }) {
  const [username, setUsername]       = useState('');
  const [password, setPassword]       = useState('');
  const [confirm, setConfirm]         = useState('');
  const [avatar, setAvatar]           = useState(DEFAULT_AVATAR);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError]             = useState('');
  const [busy, setBusy]               = useState(false);

  useEscapeKey(() => setShowConfirm(false), showConfirm);

  function validateFields() {
    if (!username.trim()) return 'Please enter a username.';
    if (username.trim().length < 3) return 'Username must be at least 3 characters.';
    if (username.trim().length > 20) return 'Username must be 20 characters or fewer.';
    if (!/^[a-zA-Z0-9_\-. ]+$/.test(username.trim())) return 'Username may only contain letters, numbers, spaces, dashes, underscores and dots.';
    if (containsProfanity(username.trim())) return 'That username contains inappropriate language. Please choose another.';
    if (!password) return 'Please enter a password.';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    if (password !== confirm) return 'Passwords do not match.';
    return null;
  }

  function handleReview(e) {
    e.preventDefault();
    const err = validateFields();
    if (err) { setError(err); return; }
    setError('');
    setShowConfirm(true);
  }

  async function handleConfirm() {
    setBusy(true);
    try {
      await register({ username: username.trim(), password, avatar });
      onSuccess?.();
    } catch (err) {
      setShowConfirm(false);
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <form className="auth-form" onSubmit={handleReview} noValidate>
        <div className="auth-field">
          <label className="auth-label">Username</label>
          <input
            className="auth-input"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            maxLength={20}
            autoComplete="username"
            placeholder="Choose a username"
          />
          <span className="auth-hint">{username.trim().length}/20 characters</span>
          <span className="auth-hint">No email required — this is the name others will see on your account.</span>
        </div>

        <div className="auth-field">
          <label className="auth-label">Password</label>
          <PasswordInput
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="new-password"
            placeholder="Minimum 6 characters"
          />
        </div>

        <div className="auth-field">
          <label className="auth-label">Confirm Password</label>
          <PasswordInput
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            autoComplete="new-password"
            placeholder="Repeat your password"
          />
        </div>

        <div className="auth-avatar-section">
          <span className="auth-label">Profile Picture</span>
          <AvatarPicker value={avatar} onChange={setAvatar} onError={setError} />
        </div>

        {error && <p className="auth-error">{error}</p>}

        <button type="submit" className="auth-submit-btn">
          Review Details
        </button>
        <p className="auth-hint auth-privacy-hint">
          By creating an account you agree to our{' '}
          <a href="/privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a>.
        </p>
      </form>

      {showConfirm && (
        <div className="confirm-overlay" onClick={() => setShowConfirm(false)}>
          <div className="confirm-panel" onClick={e => e.stopPropagation()}>
            <h3 className="confirm-title">Confirm Your Account</h3>
            <p className="confirm-sub">Please check your details before creating your account.</p>

            <div className="confirm-avatar-wrap">
              <img
                src={getAvatarSrc(avatar)}
                alt="Your avatar"
                className="confirm-avatar"
              />
            </div>

            <div className="confirm-rows">
              <div className="confirm-row">
                <span className="confirm-row-label">Username</span>
                <span className="confirm-row-value">{username.trim()}</span>
              </div>
              <div className="confirm-row">
                <span className="confirm-row-label">Password</span>
                <span className="confirm-row-value">{'•'.repeat(Math.min(password.length, 12))}</span>
              </div>
              <div className="confirm-row">
                <span className="confirm-row-label">Avatar</span>
                <span className="confirm-row-value">{avatarLabel(avatar)}</span>
              </div>
            </div>

            <div className="confirm-actions">
              <button type="button" className="confirm-back-btn" onClick={() => setShowConfirm(false)}>
                Go Back &amp; Edit
              </button>
              <button type="button" className="confirm-ok-btn" onClick={handleConfirm} disabled={busy}>
                {busy ? 'Creating…' : 'Create Account'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
