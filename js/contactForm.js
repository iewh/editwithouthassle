var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission! We'll get back to you.";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! server error, Please Try again later.";
    });
}
form.addEventListener("submit", handleSubmit);
