fetch("../components/nav.html")
.then(res => res.text())
.then(text => {
    let element = document.querySelector("script#navbar");
    let newelem = document.createElement("div");
    newelem.setAttribute("id", "header-content");
    newelem.innerHTML = text;
    element.parentNode.replaceChild(newelem, element);
})