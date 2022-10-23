function openInfo() {
    document.getElementById("info").style.transition = "all 1s";
    document.getElementById("info").style.top = "16vh";
    document.getElementById("tag-marker").style.transform = "scale(0, 0)";
}

function closeInfo() {
    document.getElementById("info").style.transition = "all 1s";
    document.getElementById("info").style.top = "100vh";
    document.getElementById("tag-marker").style.transform = "scale(1, 1)";
}

function cancelInfo() {
    setDraggable(true);
    document.getElementById("tag-marker").style.transform = "scale(0, 0)";
    document.getElementById("tag-back").style.display = "none";
}