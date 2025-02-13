function toggleVisibility() {
    const input = document.getElementById("secret");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
  function toggleImage() {
    const image = document.getElementById("secret-image");
    if (image.style.display === "none") {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  }
  