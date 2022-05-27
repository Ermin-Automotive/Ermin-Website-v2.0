const contactForm = document.querySelector(".main-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");


function alertSuccess() {
  Swal.fire({
      customClass: {
        title: 'swal2-title',
      },
      position: 'center',
      background: "rgba(14, 15, 17, 1)",
      icon: 'success',
      iconColor: "#49FF00",
      title: 'Sent',
      text: 'Your message has been sent',
      showConfirmButton: false,
      timer: 1500
    });
  }

  function alertFail() {
    Swal.fire({
        customClass: {
          title: 'swal2-title',
          text: 'swal2-text'
        },
        position: 'center',
        background: "rgba(14, 15, 17, 1)",
        icon: 'error',
        iconColor: "#FF0000",
        title: 'Oops!',
        text: 'Something went wrong!',
        showConfirmButton: false,
        timer: 1500
      });
    }


  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/Contact-Us");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function() {
      console.log(xhr.responseText);
      if (xhr.responseText == "success") {
        alertSuccess();
        name.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
      } else {
        alertFail();
      }
    }

    xhr.send(JSON.stringify(formData));

  })
