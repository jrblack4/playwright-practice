import { test, expect } from '../lib/fixtures';

test.describe('Interacting with a database', () => {
  test('Using our select.one function', async({ select }) => {
    const user = await select.one('users', { username: 'alice' });

    expect(user.email).toBe('alice@example.com')
  });

  test('Using products by category_id', async({ select }) => {
    const products = await select.all('products', { category_id: 3 });

    expect(products.length).toBe(2);
    console.table(products);
  });
});
