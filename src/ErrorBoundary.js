// mostly code from react docs

import React, { Component } from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: tru };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>
            There was an error with this listing. <Link to="/">Click here</Link>{" "}
            to go back to home page.
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
