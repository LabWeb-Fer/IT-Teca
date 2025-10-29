
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           
    environment: 'jsdom',    
    coverage: {
      provider: 'c8',       
      reporter: ['text', 'lcov', 'html'], 
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.spec.ts',
        '**/*.test.ts',
        '**/*.d.ts'
      ],
    },
  },
});
