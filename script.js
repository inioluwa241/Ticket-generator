const bodyMinor = document.querySelector(".body_minor");

const secondElementH2 = document.querySelector(".second_element h2");
const secondElementH4 = document.querySelector(".second_element h4");

const form = document.querySelector("form");

const uploadAvatar = document.querySelector(".upload_avatar");
const fileInput = document.querySelector("#fileinput");
const dragAndDrop = document.querySelector("#draganddrop");
const uploadedTextDiv = document.querySelector(".uploaded_text_div");
const filePara = document.querySelector("#file_para");
const fileError = document.querySelector("#fileError");
const justIgnore = document.querySelector(".firsticon");

const nameInput = document.querySelector(".name_input");
const emailInput = document.querySelector("#email_input");
const emailError = document.querySelector("#emailError");
const githubInput = document.querySelector(".github_input");
const button = document.querySelector("button");

const ticket = document.querySelector(".ticket");
const ticketDate = document.querySelector(".company p");
const ticketName = document.querySelector(".user h2");
const ticketGitLink = document.querySelector(".user p");
const ticketimage = document.querySelector(".user img");

ticket.classList.add("hidden");

let validName = true;
let validEmail = true;
let validGithub = true;
const usersObj = {};

console.log(getComputedStyle(document.querySelector(".pattern-ticket")).width);
const logobj = function () {
  secondElementH2.innerHTML = `Congrats, <span class="gradient">${usersObj.name}</span>! Your ticket is ready.`;

  secondElementH4.innerHTML = `We've emailed your ticket to <span style='color:hsl(7, 71%, 60%)'>${usersObj.email}
  </span> and will send updates in the run up to the event.`;

  const currentDate = new Date();

  ticketDate.innerHTML = `${currentDate.toLocaleString("default", {
    month: "short",
  })} ${currentDate.getDate()}, ${currentDate.getFullYear()} / Austin, TX`;
  ticketName.innerHTML = usersObj.name;
  ticketGitLink.innerHTML = usersObj.githubInputLink;
  ticketimage.src;
};

// Handle input field errors
const handleErrorFunc = function () {
  if (nameInput.value.trim() === "") {
    nameInput.classList.add("error");
    validName = false;
  } else {
    nameInput.classList.remove("error");
  }
  if (emailInput.value.trim() === "") {
    emailInput.classList.add("error");
    validEmail = false;
  } else {
    emailInput.classList.remove("error");
  }
  if (githubInput.value.trim() === "") {
    githubInput.classList.add("error");
    validGithub = false;
  } else {
    githubInput.classList.remove("error");
  }

  if (
    [
      nameInput.value.trim() !== "",
      emailInput.value.trim() !== "",
      githubInput.value.trim() !== "",
    ].every((each) => each === true)
  ) {
    validName = validEmail = validGithub = true;
  }
  if (validName && validEmail && validGithub) {
    [nameInput, emailInput, githubInput].forEach((each) => {
      each.classList.remove("error");
      console.log(each);
    });
    logobj();
    ticket.classList.remove("hidden");
    form.classList.add("hidden");
    setEqualHeight();
  }
};

// Check if image is above 500kb
const checkFileSize = function () {
  if (fileinput.files.length > 0) {
    const file = fileinput.files[0];
    if (file.size > 500 * 1024) {
      filePara.style.display = "none";
      justIgnore.style.display = "none";
      fileError.style.display = "block";
      return false;
    } else {
      justIgnore.style.display = "block";
      filePara.style.display = "block";
      fileError.style.display = "none";
    }
  }
};

// Checking if email is valid
const validateEmail = function (emailInput) {
  const isEmailValid = ["@", ".", "c", "o", "m"].every((each) =>
    [...emailInput].includes(each)
  );
  if (!isEmailValid) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
};

uploadAvatar.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove_image")) {
    return;
  } else if (
    document
      .querySelector(".upload_avatar img")
      .classList.contains("alternate_img")
  ) {
    return;
  } else {
    fileInput.click();
  }
});

fileInput.addEventListener("change", (e) => {
  usersObj.image = fileInput.files[0];
  checkFileSize();
  uploadedImgFunc();
});

uploadAvatar.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadAvatar.style.borderColor = "#a29bfe";
});

uploadAvatar.addEventListener("dragleave", (e) => {
  e.preventDefault();
  uploadAvatar.style.borderColor = "#6c63ff";
});

uploadAvatar.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadAvatar.style.borderColor = "#6c63ff";
  fileInput.files = e.dataTransfer.files;
});

document.querySelector(".remove_image").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".upload_avatar img").src =
    "./assets/images/icon-upload.svg";

  document.querySelector(".upload_avatar div").classList.remove("alternate");

  document.querySelector(".upload_avatar div").classList.add("img_cont");

  document
    .querySelector(".upload_avatar img")
    .classList.remove("alternate_img");

  document.querySelector(".upload_avatar img").classList.add("img_stuff");
  dragAndDrop.style.display = "block";
  uploadedTextDiv.classList.add("hidden");

  fileinput.value = "";
});

document.querySelector(".change_image").addEventListener("click", function (e) {
  e.preventDefault();

  fileInput.value = "";
  fileInput.click();
});

[nameInput, emailInput, githubInput].forEach((each) =>
  each.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();

      uploadedImgFunc();

      handleErrorFunc();

      usersObj.name = nameInput.value;
      usersObj.email = emailInput.value;
      usersObj.githubInputLink = githubInput.value;

      validateEmail(emailInput.value);

      // logobj();
    }
  })
);

// Submitting the form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  handleErrorFunc();
  validateEmail(emailInput.value);
  uploadedImgFunc();

  usersObj.name = nameInput.value;
  usersObj.email = emailInput.value;
  usersObj.githubInputLink = githubInput.value;
  logobj();
});

// Function to upload the image
const uploadedImgFunc = function () {
  if (checkFileSize() == false) return;

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

    dragAndDrop.style.display = "none";
    uploadedTextDiv.classList.remove("hidden");
  }
};

// if(){}
const setEqualHeight = function () {
  document.querySelector(".ticket_in").style.width = getComputedStyle(
    document.querySelector(".pattern-ticket")
  ).width;
};
setEqualHeight();

window.addEventListener("resize", setEqualHeight);
