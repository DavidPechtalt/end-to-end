import { Network } from "./network.js";

export class FXMLhttprequest{
    constructor(){
        this.response = null;
        this.status = null;
    };
    open(method, url){
        this.method = method;
        this.url = url
    };
    send(body) {
        const network = new Network();
        network.pass(body, this.method, this.url)
    };

}

const demo = new FXMLhttprequest();
demo.open('GET', 'server.js/dudu/food/monday');
demo.send()