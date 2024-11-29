import React, { Component } from 'react';

class ErrorBoundary extends Component {
	  constructor(props) {
		      super(props);
		      this.state = { hasError: false, error: null, info: null };
		    }

	  static getDerivedStateFromError(error) {
		  return { hasError: true };
		    }

	  componentDidCatch(error, info) {
		  console.error("Error occurred:", error, info);
		      this.setState({ error, info });
		    }

	  render() {
		      if (this.state.hasError) {
			      return (
				              <div>
				                <h1>Something went wrong!</h1>
				                {/* Optionally, you can show more detailed error information */}
				                <details>
				                  <summary>Click for details</summary>
				                  <pre>{this.state.error.toString()}</pre>
				                  <pre>{this.state.info.componentStack}</pre>
				                </details>
				              </div>
				            );
			          }

		      return this.props.children;
		    }
}

export default ErrorBoundary;
