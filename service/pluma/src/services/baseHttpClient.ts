const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

/*
R = ResponseType
D = BodyDataType
*/

export const baseHttpClient = () => {
  async function get<R>(url: string, headers: HeadersInit, params?: Record<string, any>): Promise<R> {
    const urlParams = new URLSearchParams(params).toString();

    try {
      const response = await fetch(`${BASE_URL}/api/${url}?${urlParams}`, {
        method: "GET",
        headers: headers,
        credentials: "include",
        cache: "no-store",
      });

      if (!response.ok) {
        const errorBody = await response.json();
        console.log("Response status:", response.status);
        console.log("Response body:", errorBody);
        throw new Error("Network response was not ok");
      }

      const novelListData = await response.json();
      return novelListData;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }

  async function post<R, D>(url: string, headers: HeadersInit, data: D): Promise<R> {
    try {
      const response = await fetch(`${BASE_URL}/api/${url}`, {
        method: "POST",
        headers: headers,
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorBody = await response.json();
        console.log("Response status:", response.status);
        console.log("Response body:", errorBody);
        throw new Error("Network response was not ok");
      }

      // 성공적인 응답 처리
      const responseBody = await response.json();
      return responseBody;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }

  async function put<R, D>(url: string, headers: HeadersInit, data: D): Promise<R> {
    try {
      const response = await fetch(`${BASE_URL}/api/${url}`, {
        method: "PUT",
        headers: headers,
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorBody = await response.json();
        console.log("Response status:", response.status);
        console.log("Response body:", errorBody);
        throw new Error("Network response was not ok");
      }

      // 성공적인 응답 처리
      const responseBody = await response.json();
      return responseBody;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }

  async function del<R>(url: string, headers: HeadersInit): Promise<R> {
    try {
      const response = await fetch(`${BASE_URL}/api/${url}`, {
        method: "DELETE",
        headers: headers,
        credentials: "include",
      });

      if (!response.ok) {
        const errorBody = await response.json();
        console.log("Response status:", response.status);
        console.log("Response body:", errorBody);
        throw new Error("Network response was not ok");
      }

      const responseBody = await response.json();
      return responseBody;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }

  return {
    get,
    post,
    put,
    delete: del,
  };
};
