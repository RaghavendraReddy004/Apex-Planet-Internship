// Form Validation and Submission
document.getElementById("admissionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value.trim();
  const age = document.getElementById("age").value;
  const state = document.getElementById("state").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value.trim();
  const msg = document.getElementById("formMsg");

  if (!name || !gender || !address || !age || !state || !email || !phone || !course) {
    msg.textContent = "All fields are required.";
    msg.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    msg.textContent = "Invalid email format.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = `Thank you, ${name}. Your application has been submitted!`;
  msg.style.color = "green";
});

// To-Do List Logic
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${task} <button onclick="removeTask(this)">Remove</button>`;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
}
