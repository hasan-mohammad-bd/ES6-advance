//32-8 (advanced) Inheritance, extends class, super, class method

class TeamMember{
    name;
    address = "BD";
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    buildRoutine(){
        console.log(this.name,"Build a routine for", student);
    }
}

//this class borrow some property and the value from the upper Class
//it is used for shortcut writing, where other property dont need to write.
class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time){ 
        super(name, address)
        this.groupSupportTime = time;
    }
}

const amir = new Support("Amir Khan", "BD", 4)
console.log(amir);

//prototypical inherent 
//how the class link to another class 

const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38};
console.log(player.firstName);