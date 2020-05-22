async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function load(page) {
    const contentDiv = document.getElementById("main");
    contentDiv.innerHTML = await fetchHtmlAsText(page);
}

function loadCV() {
    load("pages/cv.html");
}

function loadHome() {
    load("pages/home.html");
}