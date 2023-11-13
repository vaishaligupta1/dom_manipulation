function vaishali(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    console.log(name, email, phone)
    // localStorage.setItem("name", name)
    // localStorage.setItem("email", email)
    // localStorage.setItem("phone", phone)
    // console.log(localStorage.getItem('name'))
    // console.log(localStorage.getItem('email'));
    let obj= {
        name,
        email,
        phone
    }
    localStorage.setItem("name", JSON.stringify(obj))
    let a= JSON.parse(localStorage.getItem("name"));
    console.log(a)
    let li=document.createElement("li")
    li.textContent=obj.name+ obj.email+ obj.phone
    let parent= document.getElementById('item')
    parent.appendChild(li)

    let deletebutton = document.createElement('button')
    deletebutton.appendChild(document.createTextNode("Delete"))
    li.appendChild(deletebutton);
    li.style.backgroundColor= 'red'
    deletebutton.onclick=()=>{
        parent.removeChild(li)
        localStorage.removeItem("name")
    }

  }