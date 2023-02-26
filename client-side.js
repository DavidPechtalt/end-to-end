import { Network } from "./network.js";

export class FXMLhttprequest {
  constructor() {
    this.response = null;
    this.status = null;
  }
  open(method, url) {
    this.method = method;
    this.url = url;
  }
  send(body) {
    let result = Network.pass(body, this.method, this.url);
    this.status = result.status;
    this.response = result.response;
  }
}

const demo = new FXMLhttprequest();

demo.open("POST", "server.js/data");
demo.send({
  id: 315288019,
  details: {
    name: 'David Pechtalt',
    password: 2389,
    CreditCard: 66666,
    address: "bnei brak",
    phoneNumber: 54 - 4958021,

    meals: {
      sunday: { food: ["potatos", "soop"], drink: ["coca cola"] },
      monday: ["food", "coca"],
    },
  },
});
const delete1 = new FXMLhttprequest();
delete1.open("DELETE", "server.js/data/david");
