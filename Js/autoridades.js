function toggleContent(title) {
    var content = title.nextElementSibling;
    content.classList.toggle("hidden");
    title.querySelector("i").classList.toggle("rotate");
}
function toggleTrackContent(tdElement) {
    var table = tdElement.querySelector("table");
    table.classList.toggle("hiddenn");
    tdElement.querySelector("i").classList.toggle("rotatee");
}

