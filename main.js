const summaryListBGColors = [
    "hsla(0, 100%, 67%, 0.08)", "hsla(39, 100%, 56%, 0.08)",
    "hsla(166, 100%, 37%, 0.08)", "hsla(234, 85%, 45%, 0.08)"
];

const listContainer = document.querySelector("ul");

for (let i = 0; i < listContainer.children.length; i++) {
    listContainer.children[i].style.backgroundColor = summaryListBGColors[i];
}