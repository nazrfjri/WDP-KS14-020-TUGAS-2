// Get Element
const editBtn = document.getElementById('editBtn');
const editForm = document.getElementById('userForm');
const submitBtn = document.getElementById('submitBtn');

const nameEdit = document.getElementById('nameEdit');
const roleEdit = document.getElementById('roleEdit');
const statEdit = document.getElementById('statEdit');
const ageEdit = document.getElementById('ageEdit');
const locEdit = document.getElementById('locEdit');
const expEdit = document.getElementById('expEdit');
const emailEdit = document.getElementById('emailEdit');
const picEdit = document.getElementById('picEdit');

const nameUser = document.getElementById('nameUser');
const roleUser = document.getElementById('roleUser');
const statUser = document.getElementById('statUser');
const ageUser = document.getElementById('ageUser');
const locUser = document.getElementById('locUser');
const expUser = document.getElementById('expUser');
const emailUser = document.getElementById('emailUser');
const picUser = document.getElementById('picUser');

// Add event listener for button and data load
editBtn.addEventListener('click', toggleEditForm);
submitBtn.addEventListener('click', mySubmitForm);
window.addEventListener('load', fillForm);

// data fill on load
function fillForm() {
  nameEdit.value = nameUser.innerHTML;
  roleEdit.value = roleUser.innerHTML;
  statEdit.value = statUser.innerHTML;
  ageEdit.value = ageUser.innerHTML;
  locEdit.value = locUser.innerHTML;
  expEdit.value = expUser.innerHTML;
  emailEdit.value = emailUser.innerHTML;
}

// show and toggle form
function toggleEditForm(event) {
  nameEdit.value = nameUser.innerHTML;
  roleEdit.value = roleUser.innerHTML;
  statEdit.value = statUser.innerHTML;
  ageEdit.value = ageUser.innerHTML;
  locEdit.value = locUser.innerHTML;
  expEdit.value = expUser.innerHTML;
  emailEdit.value = emailUser.innerHTML;

  editForm.classList.toggle('hide-content');
}

// Data update
function mySubmitForm(event) {
  event.preventDefault();

  const currentName = nameEdit.value;
  const currentRole = roleEdit.value;
  const currentStatus = statEdit.value;
  const currentAge = ageEdit.value;
  const currentLoc = locEdit.value;
  const currentExp = expEdit.value;
  const currentEmail = emailEdit.value;
  const currentFile = picEdit.files[0];

  nameUser.innerHTML = currentName;
  roleUser.innerHTML = currentRole;
  statUser.innerHTML = currentStatus;
  ageUser.innerHTML = currentAge;
  locUser.innerHTML = currentLoc;
  expUser.innerHTML = currentExp;
  emailUser.innerHTML = currentEmail;

  if (currentFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
      picUser.src = e.target.result;
    };

    reader.readAsDataURL(currentFile);
  }

  toggleEditForm();
}