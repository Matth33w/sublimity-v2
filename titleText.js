const noun = "noun - /səˈblɪm.ə.t̬i/";
const meaning = '"the quality of being extremely good, beautiful, or enjoyable"';

const nounElement = document.querySelector("#noun");
const meaningElement = document.querySelector("#meaning");

var nounCurrent = 0;
var meaningCurrent = 0;

var interval;

setTimeout(() => nounRender(), 1000);

function nounRender() {
    interval = setInterval(() => {
        if(nounCurrent < noun.length) {
            nounCurrent++;
            nounElement.innerText = noun.substring(0, nounCurrent);
        } else {
            clearInterval(interval);
            setTimeout(() => meaningRender(), 1000);
        }
    }, 26);
}

function meaningRender() {
    interval = setInterval(() => {
        if(meaningCurrent < meaning.length) {
            meaningCurrent++;
            meaningElement.innerText = meaning.substring(0, meaningCurrent);
        } else {
            clearInterval(interval);
        }
    }, 26);
}