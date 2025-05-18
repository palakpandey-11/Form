    window.addEventListener("load",function(){
        setTimeout(function(){
            document.getElementById("BuzzBox").style.display = "none";
                    }, 1900)
            document.getElementById("loginForm").addEventListener("submit", function(e){
              e.preventDefault();
              const user = document.getElementById("username").value;
              const pass = document.getElementById("password").value;
              const message = document.getElementById("loginMessage");
              if (user === "random" && pass === "0987"){
                message.style.color ="green";
                message.textContent ="LoggedIn";
                document.getElementById("loginPopup").style.display="none";
                document.getElementById("mainContent").classList.remove("hidden");
            }
              else {
                message.textContent ="invalid";
              }
            });
    });