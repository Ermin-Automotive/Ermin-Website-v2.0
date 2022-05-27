$(".popUp").click(()=> {
   popUp();
});

function popUp() {
  Swal.fire({
      position: 'center',
      background: "rgba(14, 15, 17, 1)",
      icon: 'info',
      iconColor: "#4D96FF",
      title: 'Coming Soon!',
      text: `Get ready! Something really cool is coming!`,
      showConfirmButton: false,
      timer: 2500
    });
  }

  function alertSuccess() {
    Swal.fire({
        position: 'center',
        background: "rgba(14, 15, 17, 1)",
        icon: 'success',
        iconColor: "#49FF00",
        title: 'Sent',
        text: 'Successfully Signed Up!',
        showConfirmButton: false,
        timer: 1500
      });
    }

    function alertFail() {
      Swal.fire({
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

  const betaForm = document.querySelector(".beta-form");
  let email = document.getElementById("email");

  betaForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = {
      email: email.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/Ermin-Ripple");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function() {
      console.log(xhr.responseText);
      if (xhr.responseText == "success") {
        alertSuccess();
        email.value = "";;
      } else {
        alertFail();
      }
    }

    xhr.send(JSON.stringify(formData));

  })
