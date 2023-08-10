const summaryListBGColors = [
    "hsl(0, 100%, 67%)", "hsl(39, 100%, 56%)",
    "hsl(166, 100%, 37%)", "hsl(234, 85%, 45%)"
];

const listContainer = document.querySelector("ul");

for (let i = 0; i < listContainer.children.length; i++) {
    listContainer.children[i].style.backgroundColor = summaryListBGColors[i];
}