fetch("../components/dishes.html")
.then(res => res.text())
.then(text => {
    let element = document.querySelector("script#navbar");
    let newelem = document.createElement("div");
    newelem.setAttribute("id", "menu");
    newelem.innerHTML = text;
    element.parentNode.replaceChild(newelem, element);
})