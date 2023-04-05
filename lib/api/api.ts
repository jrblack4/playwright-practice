import { APIResponse, request } from "@playwright/test";

interface Params {
  [key: string]: string;
}

interface Data {
  [key: string]: string;
}

export interface Headers {
  [key: string]: string;
}

export abstract class Api {
  private readonly baseURL: string;
  protected defaultHeaders: Headers;

  constructor(baseURL: string, defaultHeaders: Headers = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      ...defaultHeaders,
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": `pw ${process.env.PRODUCT} api-request`,
    };
  }

  protected updateDefaultHeaders(headers: Headers): void {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      ...headers,
    };
  }

  async get(
    path: string,
    options: {
      params?: Params;
      headers?: Headers;
    } = {}
  ): Promise<APIResponse> {
    const params = options && options.params ? options.params : {};
    const headers = options && options.headers
      ? { ...this.defaultHeaders, ...options.headers }
      : { ...this.defaultHeaders };
    const reqContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await reqContext.get(this.baseURL + path, {
      params: params,
      headers: headers,
    });

    return response;
  }

  async post(
    path: string,
    options: {
      params?: Params;
      data?: Data;
      headers?: Headers;
    } = {}
  ): Promise<APIResponse> {
    const params = options && options.params ? options.params : {};
    const data = options && options.data ? options.data : {};
    const headers =
      options && options.headers
        ? { ...this.defaultHeaders, ...options.headers }
        : { ...this.defaultHeaders };
    const reqContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await reqContext.post(this.baseURL + path, {
      params: params,
      data: data,
      headers: headers,
    });

    return response;
  }

  async put(
    path: string,
    options: {
      params?: Params;
      data?: Data;
      headers?: Headers;
    } = {}
  ): Promise<APIResponse> {
    const params = options && options.params ? options.params : {};
    const data = options && options.data ? options.data : {};
    const headers =
      options && options.headers
        ? { ...this.defaultHeaders, ...options.headers }
        : { ...this.defaultHeaders };
    const reqContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await reqContext.put(this.baseURL + path, {
      params: params,
      data: data,
      headers: headers,
    });

    return response;
  }

  async delete(
    path: string,
    options: {
      params?: Params;
      data?: Data;
      headers?: Headers;
    } = {}
  ): Promise<APIResponse> {
    const params = options && options.params ? options.params : {};
    const data = options && options.data ? options.data : {};
    const headers =
      options && options.headers
        ? { ...this.defaultHeaders, ...options.headers }
        : { ...this.defaultHeaders };
    const reqContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await reqContext.delete(this.baseURL + path, {
      params: params,
      data: data,
      headers: headers,
    });

    return response;
  }
}
