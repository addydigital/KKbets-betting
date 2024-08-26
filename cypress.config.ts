import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      on('before:run', () => {
        console.log('Before running the tests');
      });
      // Other event listeners
    },
    video: false,
    screenshotOnRunFailure: true,
  },
});
