var form = document.getElementById("contactForm");

async function handleSubmit(event) {
  console.log("event", event);
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);

  fetch("https://api.apispreadsheets.com/data/14316/", {
    method: "POST",
    body: data,
  }).then((res) => {
    if (res.status === 201) {
      // SUCCESS
      status.innerHTML = "Thanks for your submission! We'll get back to you.";
      form.reset();

      setTimeout(() => {
        status.innerHTML = "";
      }, 5000);
    } else {
      // ERROR
      status.innerHTML = "Oops! server error, Please Try again later.";
    }
  });
}
form.addEventListener("submit", handleSubmit);
