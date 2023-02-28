import { FXMLhttprequest } from "../client-side.js";

// creating account aka registeration:
const register = document.querySelector(".register");
const registerBtn = document.getElementById("createAccount");
const toLogin = document.getElementById("moveToLogin");
let thisUser;
registerBtn.addEventListener("click", createAccount);
function createAccount(event) {
  event.preventDefault();

  // checks if one of the fileds is empty;
  const inputs = register.getElementsByTagName("input");
  let empty = false;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      inputs[i].placeholder += " requierd";
      empty = true;
    }
  }
  if (empty) return;
  const name = document.getElementById("rname");
  const email = document.getElementById("remail");
  console.log(email);
  const password = document.getElementById("rpassword");

  const obj = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  const sendTo = new FXMLhttprequest();
  sendTo.open("POST", "server.js/data");
  sendTo.send(obj);

  sendTo.onload = alet();
  function alet() {
    alert('fjfjjf')
    const main = document.querySelector('.main');
    register.style.display = 'none'
    main.style.display = 'inline-block'
  };
  
}
// demo ={
//     name:'David Pechtalt',
//     email: 'davidPechtalt@gmail.com',
//     password: '1234567',
//     contacts:[
//         {
//             name: 'Meir Pechtalt',
//             phone: '054-4958021',
//             emailAddress: 'meirpechthalt@gmail.com'
//         }
//     ]
