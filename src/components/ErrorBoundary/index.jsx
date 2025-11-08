import { Component } from "react";
import Button from "../Button";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "2rem",
            textAlign: "center",
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: "0.5rem",
            margin: "2rem 0",
          }}
        >
          <h2 style={{ color: "#dc2626", marginBottom: "1rem" }}>
            Something went wrong
          </h2>
          <p style={{ marginBottom: "1rem", color: "#7f1d1d" }}>
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <Button onClick={this.handleReset}>Try Again</Button>
          {process.env.NODE_ENV === "development" && (
            <details style={{ marginTop: "1rem", textAlign: "left" }}>
              <summary style={{ cursor: "pointer", color: "#dc2626" }}>
                Error Details (Development Only)
              </summary>
              <pre
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "1rem",
                  borderRadius: "0.25rem",
                  marginTop: "0.5rem",
                  fontSize: "0.875rem",
                  overflow: "auto",
                }}
              >
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
