import '@testing-library/jest-dom/extend-expect'

// setupTests.js
HTMLFormElement.prototype.requestSubmit = function() {
    if (this.submit) {
      this.submit();
    }
  };
  
  