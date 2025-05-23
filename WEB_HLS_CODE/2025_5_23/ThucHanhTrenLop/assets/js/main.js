var main = document.getElementById("main");
console.log(main);

var container = document.getElementById("container");
console.log(container);

var title = document.getElementsByClassName("title");
console.log(title);

var content = document.getElementById("content");
console.log(content);

var contentItems = document.getElementsByClassName("content-items");
console.log(contentItems);
console.log(contentItems[0]);

console.log(contentItems.innerHTML);
console.log(container.innerText);

console.log(contentItems[0].innerHTML);
console.log(contentItems[0].innerText);

contentItems[0].innerHTML = "<h1> Đây là Content </h1>";
contentItems[1].innerText = "Đây không phải là Content";
