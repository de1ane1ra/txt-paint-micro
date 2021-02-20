const char_cont = document.querySelectorAll("[data-char-cont]");
const palette_char_cont = document.querySelectorAll("[data-palette-char-cont]");

let palette_char = "x";

char_cont.forEach(function(cont) {
    cont.innerText = "\xa0";

    cont.addEventListener("click", function(event) {
        cont.innerText = palette_char;
    });
});

palette_char_cont.forEach(function(cont) {
    cont.addEventListener("click", function(event) {
        palette_char = event.target.innerText;
    });
});
