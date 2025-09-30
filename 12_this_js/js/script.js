Javascript:
console.log("page loaded...");

function liked(element) {
    const span = element.querySelector("span");
    let like = parseInt(span.innerText);
    like++;
    span.innerText=like;
}


function login(element) {
    if(element.innerText =="login"){
        element.innerText ="logout";
    } else {
        element.innerText ="login";
    }
}

function hide(el) {
    el.remove();
}