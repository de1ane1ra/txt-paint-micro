const char_cont = document.querySelectorAll("[data-char-cont]");
const palette_char_cont = document.querySelectorAll("[data-palette-char-cont]");

const export_txt = document.querySelector("[data-export-txt]");

let palette_char = "x";

const download_txt = function(data) {
    let link = document.createElement('a');
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(data);
    link.download = `txt-paint-micro${Date.now()}.txt`;
    link.click();

    URL.revokeObjectURL(link.href);
};

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

export_txt.addEventListener("click", function(event) {
    const char_arr = [];

    char_cont.forEach(function(cont, i) {
        if (i !== 0 && i % 8 === 0) {
            char_arr.push("\n");
        }

        char_arr.push(cont.innerText);
    });

    download_txt(char_arr.join(""));
});
