console.log("Hello world")

const firstName= "Sanidhya";

var y=10

console.log(x,y)
{
    console.log(y)
    let x=10;
    console.log(x)
    y=9;
    console.log(this.x) // let and const dont bind to this operator;
    // let x=11    -> not allowed
}

console.log(x,y)
