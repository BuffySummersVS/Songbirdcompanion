const CALLOUT_META = {
  tip:     { label: 'TIP',     cls: 'tip' },
  warning: { label: 'WARNING', cls: 'warning' },
  info:    { label: 'INFO',    cls: 'info' },
  example: { label: 'EXAMPLE', cls: 'example' },
  lore:    { label: 'LORE',    cls: 'lore' },
};

export default function ContentBlock({ block }) {
  switch (block.type) {
    case 'text':
      return (
        <div className="aca-block-text">
          {block.heading && <h4 className="aca-block-heading">{block.heading}</h4>}
          <p>{block.body}</p>
        </div>
      );

    case 'callout': {
      const meta = CALLOUT_META[block.variant] || CALLOUT_META.info;
      return (
        <div className={`aca-block-callout aca-callout-${meta.cls}`}>
          <span className="aca-callout-label">{block.title || meta.label}</span>
          <p>{block.body}</p>
        </div>
      );
    }

    case 'divider':
      return <hr className="aca-block-divider" />;

    default:
      return null;
  }
}
