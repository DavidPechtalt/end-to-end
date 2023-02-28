import { Server } from "./server.js";

export class Network {
  static pass(body, method, url) {
    const regex = /server\.js/;

    if (regex.test(url)) {
      console.log(body, method, url);

      switch (method) {
        case "GET":
          return Server.GET(url, body);
        case "POST":
          return Server.POST(url, body);
        case "DELETE":
          return Server.DELETE(url, body);
        case "PUT":
          return Server.PUT(url, body);
      }
    } else {
     return{
      status: 404,
      response: 'faild'
     }
    }
  }
}
