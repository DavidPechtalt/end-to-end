export class Server {
  // GET
  static GET(url, body) {
    const parts = url.split('/')
  }

  // POST
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

  // PUT
  static PUT(url) {}
  // DELETE
  static DELETE(url, body) {
    if (!localStorage.data) return this.failed();
    const data = JSON.parse(localStorage.data);
    const parts = url.split("/");
    if (parts.length == 2) {
      // remove all
      if (parts[1] === "all") {
        localStorage.removeItem("data");
        return this.success();
      }
      
      // remove a bit:
      const id = parts[1];
      console.log(id)
      let thisPerson;
      let index;
      for (let person of data) {
        if (person.id === id) {
          thisPerson = person;
          index = data.indexOf(person);
        }
      }
      console.log(thisPerson)
      if (!thisPerson) return this.failed();
      data.splice(index, 1);
      const day = body['day'];
      const delete1 = body.delete;
      if (day === "all" && delete1 === "all") {
        localStorage.setItem("data", JSON.stringify(data));
        return this.success();
      }
      if (delete1 === "all" && day !== "all") {
        delete thisPerson.details.meals[day];
        console.log(thisPerson)
        data.push(thisPerson);
        localStorage.setItem("data", JSON.stringify(data));
        return this.success();
      }
      if (delete1 !== "all" && day === "all") {
        for (let key in thisPerson.details.meals) {
          delete key[delete1];
          data.push(thisPerson);
          localStorage.setItem("data", JSON.stringify(data));
          return this.success();
        }
        
        }
        if(delete1 !== 'all' && day !== 'all'){
          delete thisPerson.details.meals[day][delete1]
          data.push(thisPerson);
          localStorage.setItem("data", JSON.stringify(data));
          return this.success();
      }
    }
  }

  // =============================================================
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
// ===========================================================================;
