"use client";
import React, { Component } from "react";

interface Props {
  children: React.ReactNode;
  shouldCatchError: (error: Error) => boolean;
  renderError: (error: Error, resetError: () => void) => React.ReactNode;
}

interface State {
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  resetError = (): void => {
    this.setState({ error: null });
  };

  render(): React.ReactNode {
    const { error } = this.state;
    const { children, shouldCatchError, renderError } = this.props;

    if (error && shouldCatchError(error)) {
      return renderError(error, this.resetError);
    }

    return children;
  }
}
