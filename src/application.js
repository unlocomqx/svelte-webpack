const TestComponent = require('./Card.svelte');

const Test = new TestComponent.default({
  target: document.querySelector('#mainContent'),
});
