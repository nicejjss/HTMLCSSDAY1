
console.log(1);

setTimeout(time,2000,"Hello",123,321);

console.log(3);


function time(x,y){
  console.log("This is call back: "+x+" and "+y);
}

const request= new XMLHttpRequest();

request.open("GET","https://jsonplaceholder.typicode.com/todos");

request.send()