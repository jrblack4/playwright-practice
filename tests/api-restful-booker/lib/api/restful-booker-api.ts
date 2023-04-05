import { RestfulBooker } from "../helpers/restful-booker";
import { Api } from "../../../../lib/api/api";
import { request } from "@playwright/test";

export class RestfulBookerApi extends Api {
  private static authToken: string | null = null;

  constructor() {
    super(RestfulBooker.apiURL);
    if (RestfulBookerApi.authToken) {
      this.updateDefaultHeaders({
        Cookie: `${RestfulBookerApi.authToken}`,
      });
    }
  }

  public async updateAuth(username: string, password: string): Promise<void> {
    const newAuthToken = await RestfulBookerApi.authenticate(username, password);
    this.updateDefaultHeaders({
      Cookie: `${newAuthToken}`,
    });
  }

  public static async authenticate(
    username: string = `${process.env.USERNAME}`,
    password: string = `${process.env.PASSWORD}`
  ): Promise<string> {
    const reqContext = await request.newContext({
      baseURL: RestfulBooker.apiURL,
    });
    const response = await reqContext.post("/auth", {
      data: {
        username,
        password,
      },
    });

    const authResponse = await response.json();
    RestfulBookerApi.authToken = authResponse["token"];

    console.log("Cookie set!");
    console.log(RestfulBookerApi.authToken);
    return authResponse["token"];
  }
}
