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