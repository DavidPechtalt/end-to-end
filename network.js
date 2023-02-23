import { Server } from "./server.js";

export class Network {

  pass(body, method, url) {


    const regex = /server\.js/;


    if (regex.test(url)) {
       console.log(body, method, url);

       const server = new Server()
       
       switch(method){
        case 'GET':
            server.GET(url);
            break
        case "POST":
            server.POST(url,body);
            break;
        case "DELETE":
            server.DELETE(url);
        case "PUT":
            server.PUT(url,body)
       }
    } else {
     console.log("404")
    }
   
  }
}
