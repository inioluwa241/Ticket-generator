# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

This a project to generate a conference ticket for users after putting in the neccessary and required details

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/Screenshot%202025-01-10%20at%2016-36-23%20Frontend%20Mentor%20Conference%20ticket%20generator.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/ticket-generator-built-with-html5-css-and-vanilla-javascript-H3EWnYXwP-)
- Live Site URL: [Add live site URL here](https://ticket-generator-beta.vercel.app/)

## My process

Started with the html part of it for the small screen and did the styling, and then proceeded to doing all other screen conditioned design trying my best to ensure that ive covered for every scenerio, after ensuring i dont have adesign loop, i went ahead withe the implentation of the functionalities and here is the final project.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex
- CSS Grid

### What I learned

So doing this project, i was able to have a neccessary reminder of some core javascript features which i'm sure impleneting them just made me a better developer.

```js
const uploadedImgFunc = function () {
  const file = fileInput.files[0];
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      document.querySelector(".upload_avatar img").src = e.target.result;

      ticketimage.src = e.target.result;

      document.querySelector(".upload_avatar div").classList.add("alternate");

      document.querySelector(".upload_avatar div").classList.remove("img_cont");

      document
        .querySelector(".upload_avatar img")
        .classList.add("alternate_img");

      document
        .querySelector(".upload_avatar img")
        .classList.remove("img_stuff");
    };
    reader.readAsDataURL(file);
    console.log(reader);
  }
};
```

### Continued development

After working on this project, i discovered that i'd lke/need to work on more projets that deal with sending javascript requests to the server.

## Author

- Website - [EBI_FREDRICK Inioluwa](https://portoflio-rho.vercel.app/)
- Frontend Mentor - [@inioluwa241](https://www.frontendmentor.io/profile/inioluwa241)
- Twitter - [@InioluwaFr64114](https://x.com/devdynamic95?s=09)
