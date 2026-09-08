// Day 2 : Typescript
export interface Model {
    id: number;
    name: string;
    email: string;
}

// Order interfaces
export interface Order {
    orderId: number;
    orderItem: string;
}

// optional fields
export interface User {
    id: number;
    email: string;
    name?: string,
    age?: number
}

// classes
class Products {
    id: number;
    productName: string;
    price: number;
    quantity: number

    constructor(id: number, productName: string, price: number, quantity: number) {
        this.id = 1,
            this.productName = "Mobile",
            this.price = 12000,
            this.quantity = 1
    }

    getTotalPrice(): number {
        return this.price * this.quantity;
    }
}

// class
class People {
    name!: string;
}
const person = new People;
person.name = "Harsh";

// Types
let isAvailable : boolean = false;
let name :string = "Harsh";
let age : number = 10;
const fullName = "Harsh Madankar"
let sentence : string = `Hello ${fullName} and your age is ${age}`;


// Functions
function getTime() : number{
    return new Date().getTime();
}


// Write typed functions with optional params :
function getTotalOptional(a:number,b?:number) : number{
    if(!b) return a;
    return a + b;
}

// function getTotalOptional(a: number, b?: number): number {
//   return a + (b ?? 0);
// }


// Functions
function getTotal(a:number,b:number) : number{
    return a + b;
}

// Arrow Function

// basic syntax for arrow function
const functionName = (a:number,b:number) =>{
    //code
}

// example
const add = (a: number, b: number): number => {
    return a + b;
}

// Access Modifier's
// 1) public 
// 2) private
// 3) protected

// example :: public
class Users{
    id!:number;
    name:string;

    constructor(name:string){
        this.name = name;
    }

    greet():void {
        console.log(`Hello ${name}`);
    }
} 
const user = new Users("harsh");
user.greet();


// example :: private
class BankBalance{
    private balance : number = 0;

    addMoney(amount:number){
        this.balance += amount
    }

    getBalance(){
        return this.balance;
    }
}
const account = new BankBalance();
account.addMoney(500);
account.getBalance();

// example :: protected
class Person {
    protected user: string;

    constructor(user: string) {
        this.user = user;
    }
}

class Emp extends Person{
    showName():void{
        console.log(this.user);
    }
}

// Generics





