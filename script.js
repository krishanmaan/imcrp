
function photub() {
    var div1 = document.getElementById("main");
    var div2 = document.getElementById("photu");


    if (div1.style.display === "none") {
        div1.style.display = "block";
        div2.style.display = "none";
    } else {
        div1.style.display = "none";
        div2.style.display = "block";
    }
}

function comesoon2() {
    var div3 = document.getElementById("main");
    var div4 = document.getElementById("comesoon");


    if (div3.style.display === "none") {
        div3.style.display = "block";
        div4.style.display = "none";
    } else {
        div3.style.display = "none";
        div4.style.display = "block";
    }
}


function openLink() {
    var viewPhotu = document.getElementById('linkInput').value;
    var searchPhotu = 'https://www.iemcrp.com/iemEn/photo/204/'+viewPhotu+'.jpg';
    window.open(searchPhotu);
}



// Get the button and div elements
const printButton = document.getElementById('upgradeButton');
const myDiv = document.getElementById('marksheet');
// Add a click event listener to the button
printButton.addEventListener('click', () => {
    // Print the div content
    const printContent = document.body.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = myDiv.outerHTML;
    window.print();
    document.body.innerHTML = originalContent;
}
);

function showText() {
    var inputText = document.getElementById("nameIP").value;
    document.getElementById("nameVS").innerHTML = inputText;
    var inputText = document.getElementById("rollIP").value;
    document.getElementById("rollVS").innerHTML = inputText;
    // var inputText = document.getElementById("textBox").value;
    // document.getElementById("subVS").innerHTML = inputText;
    // var inputText = document.getElementById("textBox").value;
    // document.getElementById("subVS").innerHTML = inputText;
    // var inputText = document.getElementById("textBox").value;
    // document.getElementById("subVS").innerHTML = inputText;
    // var inputText = document.getElementById("textBox").value;
    // document.getElementById("subVS").innerHTML = inputText;
}



var originalContent = document.getElementById('originalDiv').innerHTML;
var copyCount = 0;

function copyDivContent() {
  // Increment copy count
  copyCount++;

  // Get the original div content
  var content = originalContent;

  // Create a new div element
  var newDiv = document.createElement('div');

  // Set the content of the new div
  newDiv.innerHTML = content;

  // Add class and id to the copied div
  newDiv.classList.add("copiedDiv");
  newDiv.id =  copyCount;

  // Change ids of elements inside the copied div
  var inputs = newDiv.querySelectorAll('input, select');
  inputs.forEach(function(input) {
    input.id = input.id +  copyCount;
    input.name = input.name +  copyCount;
  });

  // Append the new div after the original div
  document.body.appendChild(newDiv);
}