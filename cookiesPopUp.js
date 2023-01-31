const popup = document.querySelector("#pop-up");
const popupButton = document.querySelector("#button");

window.addEventListener("load", ev => {
    if(sessionStorage.getItem("popup") == null) {
        sessionStorage.setItem("popup", "true");
        popup.classList.remove("invisible");
    }
});

popupButton.addEventListener("click", ev => {
    popup.classList.add("invisible");
});