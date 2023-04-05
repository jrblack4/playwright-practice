import { RestfulBookerApi } from '../tests/api-restful-booker/lib/api/restful-booker-api'

async function globalSetup() {
  if (process.env.PRODUCT == 'restful-booker') {
    await RestfulBookerApi.authenticate();
  }
}

export default globalSetup;
