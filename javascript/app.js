const formModal = document.querySelector(".form-modal");
const openFormModal = document.querySelector(".open-form-modal");
const closeFormModal = document.querySelector(".close-form-modal");
const contactInfo = document.querySelector(".contact-info");
const contactForm = document.querySelector(".contact-form");
const notification = document.querySelector(".notification");
const closeNotification = document.querySelector(".close-notification");
const messageContent = document.querySelector(".message-content");

const email = document.getElementById("email");
const names = document.getElementById("name");
const message = document.getElementById("message");
const saveMessageBtn = document.getElementById("save-message");

const copyBtns = document.querySelectorAll(".copy");

// EVENT LISTENERS
openFormModal.addEventListener("click", openFormDiv);
closeFormModal.addEventListener("click", closeFormDiv);
closeNotification.addEventListener("click", closeNotificationDiv);
saveMessageBtn.addEventListener("click", saveMessage);
copyBtns.forEach((copyBtn) => {
  copyBtn.addEventListener("click", () => {
    copyTextContent(copyBtn.attributes.id.value);
  });
});

// SAVE MESSAGE USING AJAX
function saveMessage(e) {
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "./php/savemessage.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    if (this.status == 200) {
      if (this.responseText == "messageSaved") {
        notification.classList.add("notification-open", "success-notification");
        messageContent.innerHTML = "Message Saved. Thank you";
        closeFormDiv();
      }
    }
  };

  xhr.send(
    "saveMessage=&names=" +
      names.value +
      "&email=" +
      email.value +
      "&message=" +
      message.value
  );
}

// COPY LINKS TO CLIPBOARD
function copyTextContent(value) {
  navigator.clipboard.writeText(value);
  notification.classList.add("notification-open", "success-notification");
  messageContent.innerHTML = "Link has been copied";
  closeFormDiv();
}

// CLOSE AND OPEN THE FORM MODAL
function openFormDiv() {
  formModal.classList.add("animate-in");

  formModal.addEventListener("transitionend", () => {
    if (
      !contactForm.classList.contains("animate-in") &&
      formModal.classList.contains("animate-in")
    ) {
      contactForm.classList.add("animate-in");
      contactInfo.classList.add("animate-in");
    }
  });
}

function closeFormDiv() {
  contactForm.classList.remove("animate-in");
  contactInfo.classList.remove("animate-in");
  formModal.classList.remove("animate-in");
}

// CLOSE AND THE FORM MODAL

function closeNotificationDiv() {
  notification.classList.remove("notification-open");
}
