import { RestfulBookerApi } from '../lib/api/restful-booker-api';
import { RestfulBooker } from '../lib/helpers/restful-booker';
import { test, expect } from '../lib/fixtures';

test.describe('RestfulBookerApi.authenticate', () => {
  test('with no additional params', async () => {
    const auth = await RestfulBookerApi.authenticate();
    expect(auth).toBeDefined(); //Ex:  1b118144e7520fd
  })

  test('with invalid user and pass', async () => {
    const auth = await RestfulBookerApi.authenticate('baduser', 'badpass');
    expect(auth).toBeUndefined();
  });

  test('using a helper', async () => {
    await RestfulBooker.authToken('bad', 'bad');
    expect(RestfulBooker.token).toBeUndefined();
    console.log(RestfulBooker.token);
  });

  test('using valid creds', async () => {
    await RestfulBooker.authToken('admin', 'password123');
    expect(RestfulBooker.token).toBeDefined();
    console.log(RestfulBooker.token);
  });
});