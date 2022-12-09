// window.onload = function (){
//     document.querySelector("#myButton")
//     .addEventListener("click", function(){
//         console.log("user clicked button!")
//     });
//     }

var handleClick = function task3() {
    console.log("Welcome to my callback test");
}
 setTimeout (function task3(){
            console.log(".");
    },4000);

var button = document.querySelector('#myButton');
button.addEventListener('click', handleClick);

   
  
    setTimeout (function task2() {
        console.log("Hope you enjoyed the delay :)");
    },10000);
    
    
    // function task3(){
    //     console.log(".")
    // }
    
   
    
    function task4(){
        console.log("..")
    }
    
    setTimeout (function task3(){
            console.log("task3 8s");
    },8000);
    
   
    
    setTimeout (function task3(){
            console.log("task3 delays 10s");
    },10000);
    