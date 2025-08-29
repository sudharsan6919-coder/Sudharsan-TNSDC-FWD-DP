const form = document.getElementById("regForm");

form.addEventListener("submit", (event) => {

  event.preventDefault(); // Prevent page reload

  const fullname = document.getElementById("fullname").value.trim();

  const email = document.getElementById("email").value.trim();

  const password = document.getElementById("password").value.trim();

  const phone = document.getElementById("phone").value.trim();

  const dob = document.getElementById("dob").value;

  const gender = document.getElementById("gender").value;

  if (!fullname || !email || !password || !phone || !dob || !gender) {

    alert("⚠ Please fill in all fields.");

    return;

  }

  if (password.length < 6) {

    alert("⚠ Password must be at least 6 characters.");

    return;

  }

  if (!/^\d{10}$/.test(phone)) {

    alert("⚠ Phone number must be 10 digits.");

    return;

  }

  alert(`✅ Registration Successful!\nWelcome, ${fullname}`);

  form.reset();

});