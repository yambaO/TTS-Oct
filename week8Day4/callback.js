
    
function download(){
    console.log("Download is activated");
}

function sayHi(){
    alert("Hi There!function executed successfully!");
}
setTimeout (function download() {
    console.log("Downloading.:)");
},3000);

setTimeout (function download() {
    console.log("Downloading...:)");
},6000);

setTimeout (function download() {
    console.log("Downloading...:)");
},9000);
setTimeout (function download() {
    alert("File downloaded:)");
},9000);
// Selecting button element
var btn = document.getElementById("myButton");
 
// Assigning event listeners to the button
btn.addEventListener("click",download );
btn.addEventListener("click", sayHi);
