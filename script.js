    let currentPassword = "0987";
    window.addEventListener("load",function(){
        setTimeout(function(){
            document.getElementById("BuzzBox").style.display = "none";
                    }, 1900)
            document.getElementById("loginForm").addEventListener("submit", function(e){
              e.preventDefault();

              const user = document.getElementById("mail").value;
              const pass = document.getElementById("password").value;
              const message = document.getElementById("loginMessage");

              const storedEmail = localStorage.getItem("signupEmail");
              const storedPassword = localStorage.getItem("signupPassword");

              if (user !== storedEmail) {
    message.style.color = "red";
    message.textContent = "You entered an invalid email!";
    document.getElementById("forgot").style.display = "none";
  } else if (pass !== storedPassword) {
    message.style.color = "red";
    message.textContent = "Incorrect password!";
    document.getElementById("forgot").style.display = "block";
  } else {
    message.style.color = "green";
    message.textContent = "Logged in successfully!";
    document.getElementById("loginPopup").style.display = "none";
    window.location.href = "sample.html";
    document.getElementById("maincontent").classList.remove("hidden");

    
  }
            });
             });
function closePopup() {
  document.getElementById("detailPopup").style.display = "none";
}
          
//             function showReset() {
//   document.getElementById("resetForm").style.display = "flex";
// }
function showReset() {
  document.getElementById("resetForm").style.display = "flex";
  document.getElementById("step1").style.display = "block";
  document.getElementById("step2").style.display = "none";
  document.getElementById("resetMsg").textContent = "";
}

function verifyEmail() {
  const enteredEmail = document.getElementById("resetEmail").value;
  const storedEmail = localStorage.getItem("signupEmail");

  if (enteredEmail === storedEmail) {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
    document.getElementById("resetMsg").textContent = "";
  } else {
    document.getElementById("resetMsg").textContent = "Email not found!";
    document.getElementById("resetMsg").style.color = "red";
  }
}

function closeReset() {
  document.getElementById("resetForm").style.display = "none";
  document.getElementById("loginPopup").style.display = "flex";
}

function resetPassword() {
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (newPassword === "" || confirmPassword === "") {
    // alert("Please fill all fields");
    return;
  }

  if (newPassword !== confirmPassword) {
    document.getElementById("resetMsg").textContent = "Passwords do not match!";
    document.getElementById("resetMsg").style.color = "red";
    return;
  }
  localStorage.setItem("signupPassword", newPassword);
  document.getElementById("resetMsg").textContent = "Password reset successfully!";
  document.getElementById("resetMsg").style.color = "green";

  setTimeout(() => {
    closeReset();
  }, 2000);
}

// function resetPassword() {
//   const newPassword = document.getElementById("newPassword").value;
//   if (newPassword.trim() !== ""){
//   currentPassword = newPassword;
//   alert("Your password has been reset to: " + newPassword);
//   document.getElementById("resetForm").style.display = "none";
//   document.getElementById("forgot").style.display = "none";
//   document.getElementById("loginMessage").textContent = "";
//   }
//   else{
//     alert("please enter a new password");
//   }
// }

// function saveAndRedirect(e) {
//   e.preventDefault();
  
//   const student ={
//     fullName:document.getElementById("fullName").value,
//     dob:document.getElementById("dob").value,
//     gender:document.getElementById("gender").value,
//     email:document.getElementById("email").value,
//     phone:document.getElementById("phone").value,
//     address:document.getElementById("address").value,
//     course: document.getElementById("course").value,
//     year: document.getElementById("year").value,
//     studentId: document.getElementById("studentId").value
//   };

//    let students = JSON.parse(localStorage.getItem("student")) || [];
   
//    students.push(student);

  // localStorage.setItem("studentData", JSON.stringify(students));

//   localStorage.setItem("student", JSON.stringify(students));

//   window.location.href = "details.html";
// }

function showLogin() {
  document.getElementById("signupHub").style.display = "none";
  document.getElementById("loginPopup").style.display = "flex";
}

function showSignup() {
  document.getElementById("loginPopup").style.display = "none";
  document.getElementById("signupHub").style.display = "flex";
}

function handleSignup(e) {
  e.preventDefault();

  const email = document.getElementById("usermail").value;
  const name = document.getElementById("username2").value;
  const password = document.getElementById("pass").value;
  localStorage.setItem("signupEmail", email);
  localStorage.setItem("signupPassword", password);
  // alert("Signup successful! Now login using the same credentials.");
  showLogin();
}
