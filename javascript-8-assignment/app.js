// OOPS IN JAVA SCRIPT


class Car{
    constructor(m,k,y){

         this.make = m;
        this.model = k;
        this.year = y;

         
    }

    displayInfo(){
       console.log(` make:${this.make}/ modal:${ this.model}/ year:${ this.year}`);
          
    }
}

let obj1 = new Car("Toyota","camre",2020);
let obj2 = new Car("honda","Accord",2019);
obj1.displayInfo();
obj2.displayInfo();