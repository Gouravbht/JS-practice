function a(){console.log("A")}

console.log("B") 
a();
setTimeout(()=>console.log("C"), 5*1000);
console.log("D");
