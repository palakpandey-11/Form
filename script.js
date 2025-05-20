    let currentPassword = "0987";
    window.addEventListener("load",function(){
        setTimeout(function(){
            document.getElementById("BuzzBox").style.display = "none";
                    }, 1900)
            document.getElementById("loginForm").addEventListener("submit", function(e){
              e.preventDefault();

              const user = document.getElementById("username").value;
              const pass = document.getElementById("password").value;
              const message = document.getElementById("loginMessage");
              if (user !== "random") {
    message.style.color = "red";
    message.textContent = "You entered an invalid username!";
    document.getElementById("forgot").style.display = "none";
  } else if (pass !== currentPassword) {
    message.style.color = "red";
    message.textContent = "Incorrect password!";
    document.getElementById("forgot").style.display = "block";
  } else {
    message.style.color = "green";
    message.textContent = "Logged in successfully!";
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
  }
            });
             });
function closePopup() {
  document.getElementById("detailPopup").style.display = "none";
}
          
            function showReset() {
  document.getElementById("resetForm").style.display = "flex";
}
function closeReset() {
  document.getElementById("resetForm").style.display = "none";
  document.getElementById("loginPopup").style.display = "none";
}

function resetPassword() {
  const newPassword = document.getElementById("newPassword").value;
  if (newPassword.trim() !== ""){
  currentPassword = newPassword;
  alert("Your password has been reset to: " + newPassword);
  document.getElementById("resetForm").style.display = "none";
  document.getElementById("forgot").style.display = "none";
  document.getElementById("loginMessage").textContent = "";
  }
  else{
    alert("please enter a new password");
  }
}
