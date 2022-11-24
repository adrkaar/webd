fetch("../components/home.component.html")
.then(res => res.text())
.then(text => {
    let element = document.querySelector("script#home");
    let newelem = document.createElement("div");
    newelem.setAttribute("id", "home-container");
    newelem.innerHTML = text;
    element.parentNode.replaceChild(newelem, element);
})