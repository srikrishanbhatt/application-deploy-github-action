import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import app from './app.js';

describe('app', () => {
  it('returns the welcome message', async () => {
    const server = app.listen(0);

    try {
      const { port } = server.address();
      const response = await fetch(`http://127.0.0.1:${port}`);
      const body = await response.json();

      assert.equal(response.status, 200);
      assert.deepEqual(body, {
        msg: 'Hello from the server check CI/CD working...',
      });
    } finally {
      server.close();
    }
  });
});
