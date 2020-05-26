async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function load(page, ID) {
    const contentDiv = document.getElementById(ID);
    contentDiv.innerHTML = await fetchHtmlAsText(page);
}

function loadCV() {
    load("html/cv.html", "content");
}

function loadHome() {
    load("html/home.html", "content");
}

function loadTeaching() {
    load("html/teaching.html", "content");
}

function loadPublications() {
    load("html/publications.html", "content");
}

function loadOtherProjects() {
    load("html/other-projects.html", "content")
}

function loadMenu() {
    const menu = document.getElementById("menu-wrapper");
    const menuButton = document.getElementById("menu-button");
    if (menu.style.display !== "flex") {
        menu.style.display = "flex";
        menuButton.textContent = "▼ Menu"
    } else {
        menu.style.display = "none";
        menuButton.textContent = "► Menu"
    }
}