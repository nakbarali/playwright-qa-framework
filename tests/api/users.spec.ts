import { test, expect } from '@playwright/test';

test.describe('Users API', () => {
  test('GET /users/2 returns correct user data @smoke', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/2');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(2);
  });

  test('GET /users/999 returns 404 for non-existing user @negative', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/999');
    expect(response.status()).toBe(404);
  });

  test('POST /users creates a new user @smoke', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
      data: { name: 'morpheus', job: 'leader' },
    });
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe('morpheus');
  });

  test('PUT /users/2 updates an existing user @regression', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/users/2', {
      data: { name: 'morpheus', job: 'zion resident' },
    });
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.name).toBe('morpheus');
  });

  test('DELETE /users/2 removes a user @regression', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/users/2');
    expect(response.status()).toBe(200);
  });

  test('GET /users returns a list of all users @regression', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
  });
});