const parts = url.split("/");
    // delete all
    if (parts[1] == "all") {
      if (parts.length === 2) {
        localStorage.removeItem('data')
        return this.success()
      }
      return this.failed();
    }
    // delete only one person;
    if(!localStorage.data)return this.failed()

    let  data = JSON.parse(localStorage.data);
    let thisPerson;
  //  get the person from the data;
    const id = parts[1];
    for (let obj of data) {
      if (obj.id === id) {
        thisPerson = obj;
        index = data.indexOf(obj);
        console.log(thisPerson)
      }
// if the person dosen't exist;
      if (!thisPerson) {
        return this.failed;
      }
    // checks if we want to delete all the details of this person;
      if (parts.length === 2) {
        // delete
        data.splice(index, 1);
        localStorage.setItem(JSON.stringify(data));
        return this.success();
      }
      // if we want to delete one deltail from this person
    const path = parts.join(".");
      if (parts.length === 3) {
        const detail = parts[2];
        if (thisPerson.details[detail]) {
          delete thisPerson.details[detail];
          return this.success();
        }
        return this.failed();
      }
      // delete one day
      if (parts.length === 4) {
        if (parts[2] === "meals") {
          delete thisPerson.details.meals[parts[3]];
          return this.success()
        }
        return this.failed()
      }
      // delete one serve of one day
      if(parts.length === 5){
       if(thisPerson.details.meals[parts[3]][parts[4]]){
        delete thisPerson.details.meals[parts[3]][parts[4]]
        return this.success()
       }
      }
    }
    return this.failed()
  }
