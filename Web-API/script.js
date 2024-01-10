//Now lets learn about Web API's specified in HTML5 specification. These web APIs allows you to use the modern functions
//provided by the modern browsers in your modern web application
//Section1 => Client Storage, Section2 =>Form Data API, Section3=>Drag and Drop API, Section4=>Geolocation API, Section5=>Notification API, Section6=>Canvas API, Section7=> History API, Section8=>Network Requests

//Section1=> Cookies, LocalStorage, sessionStorage, IndexedDB
//cookie=> cookie is a piece of data that a server sends to a web browser. the web browser then stores it in users computer and sends the cookie back to
//the same server in the subsequent requests. the server uses cookies for identifying if two successive request
//came from the same browser. to manage cookies we use document.cookie object to make it more efficient, you can use the cookie utility class
//use the encodeURIComponent() and decodeURIComponent() function to encode and decode the cookie values
document.cookie = "Name: John";
document.cookie = "class: B.tech";
// document.cookie = "Name: Rohan"; //update cookie
// document.cookie = "Name = Rohan; expires= thur,02 nov 2023 12:00:00 UTC"; //set expiry date
// const cooki = document.cookie;
// console.log(cooki); //read cookie
document.cookie = `${decodeURIComponent("username")} = ${encodeURIComponent(
  "password"
)}`; //it is good practice to use decodeURIComponent and encodeURIComponent function while setting cookies

//local storage=>local storage is an instance of storage type that allows you to store persistent data in the web browser
//local storage can store only strings to store objects you convert them to strings using the JSON.stringyfy() and you converts the string into objects when you retrive them from the local storage using the json.parse() method
localStorage.setItem("Name", "Gunjan");
localStorage.setItem("Branch", "IT");
// console.log(localStorage);
console.log(localStorage.getItem("Name"));
localStorage.removeItem("Branch");
localStorage.clear();

//session Storage=>

//IndexedDB=>