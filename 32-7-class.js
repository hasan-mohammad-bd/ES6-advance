//32-7 (advanced) Class, constructor, method, create object from class

//class: with a class lot of different object can be create.
class Support {
    name;
    designation = "support Web Developer";
    address = "BD";
    //here constructor(parameter = user will put the actual value for the parameter. this.name= is calling the object property name which will be equal to the parameter.
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    stateSession(){ //dont need to write full function, only use the name and others.
        console.log(this.name, "start a support session");
    }
}


const amir = new Support("amir Khan", "India");
console.log(amir);
amir.stateSession();



