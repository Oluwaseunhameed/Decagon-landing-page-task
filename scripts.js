// Get the modal
const modal = document.getElementById('id01');

const signup = document.getElementById("signupbtn")

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

signup.addEventListener("click", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  
  console.log({
    firstName,
    email,
    phone
  })

  const values = {
    firstName,
    email,
    phone
  }

  const stringifyData = JSON.stringify(values)

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("POST", "process.php", true);
  xmlhttp.send(stringifyData);
})