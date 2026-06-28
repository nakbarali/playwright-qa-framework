import { test, expect } from '@playwright/test';

test.describe('Users API', () => {
  test('GET /users/2 returns correct user data', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/2');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(2);
  });

  test('GET /users/999 returns 404 for non-existing user', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/999');
    expect(response.status()).toBe(404);
  });

  test('POST /users creates a new user', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
      data: { name: 'morpheus', job: 'leader' },
    });
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe('morpheus');
  });
});