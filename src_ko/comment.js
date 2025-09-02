var strong = document.querySelectorAll("strong")[0];

function lengthCheck() {
    var value = this.getAttribute("value");
    if (value.length > 3) {
        strong.innerHTML = "Comment too long!";
    }
}

var inputs = document.querySelectorAll("input");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keydown", lengthCheck);
}
