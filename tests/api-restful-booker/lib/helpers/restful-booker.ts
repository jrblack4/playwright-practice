import { request, expect } from '@playwright/test';

export class RestfulBooker {
  public static apiURL = 'https://restful-booker.herokuapp.com/';
  public static token: string;

  public static async authToken(
    user: string = `${process.env.USERNAME}`,
    pass: string = `${process.env.PASSWORD}`
  ): Promise<void> {
    const requestContext = await request.newContext();
    const response = await requestContext.post(RestfulBooker.apiURL + "auth", {
      data: {
        username: user,
        password: pass,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(response.status()).toBe(200);

    const json = await response.json();
    const token = json["token"];

    this.token = token;
  }
}