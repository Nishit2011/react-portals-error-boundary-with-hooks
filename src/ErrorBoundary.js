import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      // No need to call children as a function here
      // Just render the children directly
    } catch (error) {
      setHasError(true);
      console.error(error);
    }
  }, [children]);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return children;
};

export default ErrorBoundary;
