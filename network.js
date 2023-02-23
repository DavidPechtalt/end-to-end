import { Server } from "./server.js";

export class Network {

  pass(body, method, url) {


    const regex = /server\.js/;


    if (regex.test(url)) {
       console.log(body, method, url);
       
       const server = new Server()
       
       switch(method){
        case 'GET':
            server.GET();
            break
        case "POST":
            server.POST(body);
            break;
        case "DELETE":
            server.DELETE();
        case "PUT":
            server.PUT(body)
       }
    } else {
     console.log("404")
    }
   
  }
}
