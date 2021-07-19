function Person(){
    this.age = 0;
  
    setInterval(() => {
      this.age++; // |this|는 person 객체를 참조
      console.log(this.age);
    }, 1000);
  }
  
  var p = new Person();