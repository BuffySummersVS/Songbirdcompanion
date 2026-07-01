import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="aca-error-boundary">
          <span className="aca-error-icon">⚠️</span>
          <h3 className="aca-error-title">Something went wrong</h3>
          <p className="aca-error-body">This content could not be loaded.</p>
          {this.props.onBack && (
            <button type="button" className="aca-btn-secondary" onClick={this.props.onBack}>
              {this.props.actionLabel || "← Back"}
            </button>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}
