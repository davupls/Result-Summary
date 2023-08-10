# Frontend Mentor - Results summary component solution


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot
![Screenshot 2023-08-10 at 15-17-35 Frontend Mentor Results summary component](https://github.com/davupls/Result-Summary/assets/47851457/dbede2ab-7837-43a3-aad9-aa755d532b9e)




### Links

- Solution URL: [Github Repo](https://github.com/davupls/Result-Summary)
- Live Site URL: [Website Live](https://result-summary-zeta-nine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow

### What I learned

```css
@font-face {
    font-family: "Hanken Grotesk";
    src:
        local("Hanken Grotesk"),
        url(./assets/fonts/static/HankenGrotesk-Medium.ttf) format("truetype"),
        url(./assets/fonts/static/HankenGrotesk-Bold.ttf) format("truetype"),
        url(./assets/fonts/static/HankenGrotesk-ExtraBold.ttf) format("truetype");
}
/* First time using font-face - learned more about the different font formats */
```
```js
const summaryListBGColors = [
    "hsla(0, 100%, 67%, 0.08)", "hsla(39, 100%, 56%, 0.08)",
    "hsla(166, 100%, 37%, 0.08)", "hsla(234, 85%, 45%, 0.08)"
];

const listContainer = document.querySelector("ul");

for (let i = 0; i < listContainer.children.length; i++) {
    listContainer.children[i].style.backgroundColor = summaryListBGColors[i];
}
/* 
  While I have much more complicated functions in this project 
  I like this solution cause its my first time using colors in a For Loop
*/
```

### Continued development

The Project's challenge is completed, but I would like to come back in the future
and add a slide out panel that users can use to enter in new numbers to change the different summary scores.


### Useful resources

- [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css#loading-a-self-hosted-font-with-font-face) - This explanation of how to use font-face helped me understand not only how, but why.

## Author

- Website - [David McLean](https://www.davidmlean.dev)
- Frontend Mentor - [@davupls](https://www.frontendmentor.io/profile/davupls)
