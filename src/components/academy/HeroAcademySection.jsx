import { useState } from 'react';
import { heroes } from '../../data/heroes.js';
import { pathCompletionPercent } from '../../academy/engine.js';

const ROLE_FILTERS = ['All', 'Tank', 'Damage', 'Support'];

function HeroCourseCard({ path, hero, progress, onSelect }) {
  const pct = path.lessons.length > 0 ? pathCompletionPercent(path, progress) : 0;
  const done = progress.pathsCompleted?.includes(path.id);
  const started = path.lessons.some(id => progress.lessonsCompleted?.includes(id));

  if (path.comingSoon || path.lessons.length === 0) {
    return (
      <div className="ha-course-card ha-coming-soon">
        <div className="ha-course-portrait-wrap">
          <img src={hero.image} alt={hero.name} className="ha-course-portrait" />
          <span className="ha-coming-overlay">Soon</span>
        </div>
        <div className="ha-course-info">
          <span className="ha-course-role">{hero.role}</span>
          <p className="ha-course-name">{hero.name}</p>
          <span className="ha-coming-label">Coming Soon</span>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`ha-course-card ha-available ${done ? 'ha-done' : ''}`}
      onClick={() => onSelect(path)}
    >
      <div className="ha-course-portrait-wrap">
        <img src={hero.image} alt={hero.name} className="ha-course-portrait" />
        {done && <span className="ha-done-overlay">✓</span>}
      </div>
      <div className="ha-course-info">
        <span className="ha-course-role">{hero.role}</span>
        <p className="ha-course-name">{hero.name}</p>
        <div className="ha-course-progress-row">
          <div className="ha-course-bar">
            <div className="ha-course-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="ha-course-pct">{pct}%</span>
        </div>
        <span className="ha-course-action">
          {done ? '✓ Complete' : started ? 'Continue →' : 'Start →'}
        </span>
      </div>
    </button>
  );
}

export default function HeroAcademySection({ heroPaths, progress, onSelectPath }) {
  const [roleFilter, setRoleFilter] = useState('All');

  const filtered = heroPaths.filter(path => {
    const hero = heroes.find(h => h.id === path.heroId);
    if (!hero) return false;
    if (roleFilter !== 'All' && hero.role !== roleFilter) return false;
    return true;
  });

  // Sort: available courses first, then coming-soon alphabetically
  const sorted = [...filtered].sort((a, b) => {
    if (!a.comingSoon && b.comingSoon) return -1;
    if (a.comingSoon && !b.comingSoon) return 1;
    return a.label.localeCompare(b.label);
  });

  const available = sorted.filter(p => !p.comingSoon);
  const comingSoon = sorted.filter(p => p.comingSoon);

  return (
    <div className="ha-section">
      <div className="ha-role-filters">
        {ROLE_FILTERS.map(role => (
          <button
            key={role}
            type="button"
            className={`ha-role-filter ${roleFilter === role ? 'active' : ''}`}
            onClick={() => setRoleFilter(role)}
          >
            {role}
          </button>
        ))}
      </div>

      {available.length > 0 && (
        <div className="ha-group">
          <p className="ha-group-label">Available Now</p>
          <div className="ha-course-grid">
            {available.map(path => {
              const hero = heroes.find(h => h.id === path.heroId);
              if (!hero) return null;
              return (
                <HeroCourseCard
                  key={path.id}
                  path={path}
                  hero={hero}
                  progress={progress}
                  onSelect={onSelectPath}
                />
              );
            })}
          </div>
        </div>
      )}

      {comingSoon.length > 0 && (
        <div className="ha-group">
          <p className="ha-group-label">Coming Soon — {comingSoon.length} courses</p>
          <div className="ha-course-grid">
            {comingSoon.map(path => {
              const hero = heroes.find(h => h.id === path.heroId);
              if (!hero) return null;
              return (
                <HeroCourseCard
                  key={path.id}
                  path={path}
                  hero={hero}
                  progress={progress}
                  onSelect={onSelectPath}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
