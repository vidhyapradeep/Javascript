let name;
//console.log(name);


// Factory Function
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    }
}
const circle = createCircle(1);

// Constructor Function
function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log('Draw - Constructor function');
    }
}
const myCircle = new Circle(1);

//Enumerating properties of an object
const circle1 = {
    radius: 1,
    draw(){
        console.log('DRAW');
    } 
}

const circle2 = {
    radius: 2,
    draw(){
        console.log('DRAW');
    } 
}

for(let key in circle1)
    console.log(key, circle1[key]);

for(let key of Object.keys(circle1))
    console.log(key);    

for(let entry of Object.entries(circle1))
    console.log('entry', entry)    

//Cloning an object
// const another = {};
// for(let key in circle1)
//     another[key] = circle1[key];  

//const another = Object.assign({}, circle1, circle2);

const another = { ...circle2,...circle1 };
    
console.log(another);    