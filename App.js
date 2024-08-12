// writing hello using raw javacript 
    
const heading = document.createElement("h2");
heading.innerHTML = "Hello World! (written with the help of javascript)";

const x = document.getElementById("main");
x.appendChild(heading);
   

// writing hii using react
const title = React.createElement("h1", {className:"title"}, "hii (text written with the help of react)");

const main2 = ReactDOM.createRoot(document.getElementById("main2"));

main2.render(title);


// creating a nested structure in react wit multiple divs and their childs

const parent = React.createElement("div", {id:"parent"}, "parent-div",
  React.createElement("div", {id:"child"},
    [
      React.createElement("h2", {}, "I am the first child h2"),
      React.createElement("h3", {}, "I am the second child h3"),
      React.createElement("h4", {}, "I am the third child h4")
    ])
  );

console.log(parent);
const main3 = ReactDOM.createRoot(document.getElementById("main3"));
main3.render(parent);

