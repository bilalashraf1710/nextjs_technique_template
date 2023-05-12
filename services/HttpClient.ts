const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

class HttpClient {
  static async get(resourcePath: string) {
    const request = await fetch(`${API_ENDPOINT}${resourcePath}`);
    const responseObject = await request.json();
    return responseObject;
  }

  static async post(resourcePath: string, body: any) {
    const request = await fetch(`${API_ENDPOINT}${resourcePath}`, {
      method: "POST",
      body,
    });
    const responseObject = await request.json();
    return responseObject;
  }
}

export default HttpClient;
