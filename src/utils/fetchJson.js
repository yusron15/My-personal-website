import AsyncStorage from "@react-native-community/async-storage";

type Method = "GET" | "POST" | "PUT" | "PATCH";

export default async function fetchJson(
  method: Method,
  path: string,
  data: any
): any {
  try {
    const token = await AsyncStorage.getItem("@token");
    console.log("token", token);
    if (method === "GET") {
      const response = await fetch(`http://134.209.101.189/api/${path}`, {
        method,
        headers: {
          Accept: "application/json",
          Authorization: token,
          "Content-Type": "application/json"
        }
      });
      const result = await response.json();
      if (result.error != null) {
        throw result.error;
      } else {
        return result;
      }
    } else if (method === "POST") {
      console.log("aaaaaaaa");
      const response = await fetch(`http://134.209.101.189/api/${path}`, {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (result.error != null) {
        throw result.error;
      } else {
        return result;
      }
    } else {
      const response = await fetch(`http://134.209.101.189:3000/api/${path}`, {
        method,
        headers: {
          Accept: "application/json",
          Authorization: token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (result.error != null) {
        throw result.error;
      } else {
        return result;
      }
    }
  } catch (error) {
    throw error;
    // console.log('errror tes ', error);
  }
}

// export default async function fetchNews(

// );
