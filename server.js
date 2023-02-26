export class Server {
  static GET(url) {}
  static POST(url, body) {
    const parts = url.split("/");
    if (parts[1] !== "data") {
      return this.failed();
    }

    let data = [];
    if (localStorage.data) {
      data = JSON.parse(localStorage.data);
    }
    data.push(body);
    console.log(data);
    localStorage.data = JSON.stringify(data);

    return this.success();
  }
  static PUT(url) {}
  static DELETE(url) {
    const parts = url.split("/");
    if (parts[1] !== "all") {
      return this.failed();
    }
    if(parts[1] == 'all'){
        localStorage.removeItem(data)
        return this.success()
    }
    const id = parts[3];
    const data = JSON.parse(localStorage.data);
    let thisPerson;
    let index
    for(let obj of data){
        if(obj.id === id){
            thisPerson = obj;
            index = data.indexOf(obj)
        }
        if(!thisPerson){
            return this.failed
        }
    if(parts.length === 3){
      data.splice(index, 1)
      localStorage.setItem(JSON.stringify(data))
      return this.success()
      
    }

    if(parts.length === 4){

    }
    }

  }

  static success() {
    return {
      status: 200,
      response: "success",
    };
  }
  static failed() {
    return {
      status: 404,
      response: "failed",
    };
  }
}
