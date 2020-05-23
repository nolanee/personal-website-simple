async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function load(page) {
    const contentDiv = document.getElementById("main");
    contentDiv.innerHTML = await fetchHtmlAsText(page);
}

function loadCV() {
    load("html/cv.html");
}

function loadHome() {
    load("html/home.html");
}