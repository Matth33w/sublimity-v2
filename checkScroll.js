const mainContent = document.querySelector(".main-content");

window.addEventListener("scroll", ev => {
    checkScreenY(window.scrollY);
});

window.addEventListener("load", ev => {
    checkScreenY(window.scrollY);
});

function checkScreenY(currentY) {
    const screens = ["contact", "services", "home"];
    
    for(var i = 0; i < screens.length; i++) {
        const screen = document.querySelector(`#${screens[i]}-nav`);

        screen.classList.remove("bright");
    }

    for(var i = 0; i < screens.length; i++) {
        const screenY = document.querySelector(`#${screens[i]}`).getBoundingClientRect().y;

        if(mainContent.scrollHeight - window.innerHeight == currentY) {
            document.querySelector(`#${screens[0]}-nav`).classList.add("bright");
            return;
        }

        if(screenY <= 0) {
            document.querySelector(`#${screens[i]}-nav`).classList.add("bright");
            return;
        }
        
    }
}