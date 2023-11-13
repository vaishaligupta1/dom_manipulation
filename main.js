function vaishali(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    console.log(name, email, phone)
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("phone", phone)
    console.log(localStorage.getItem('name'))
    console.log(localStorage.getItem('email'));
  }