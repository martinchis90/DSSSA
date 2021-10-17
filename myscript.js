/* Martin Chisholm, 12/09/2021 */
/* Project description, version: */

document.write("Hello World!");
var name = prompt("Enter info here");
var message = "Hello " + name;
// document.write(message)
// document.getElementById("hello").innerHTML = message;
var nameElement = document.getElementById("hello");
nameElement.textContent = message;