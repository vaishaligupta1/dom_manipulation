function addexpense(event){
    event.preventDefault()
    let price= document.getElementById('price').value 
    let description= document.getElementById('description').value
    let category= document.getElementById("category").value
    let obj= {
        price, description,category
    }
    addToStorage(obj)
}

    function addToStorage(obj)
    {
          localStorage.setItem("expenseDeatils",JSON.stringify(obj))
          let data= JSON.parse(localStorage.getItem("expenseDeatils"))
          addExpenseToScreen(data)
    }
    
    function addExpenseToScreen(data){
       let li = document.createElement('li')
       li.textContent= data.price+data.description+data.category
       let details= document.getElementById('details')
       details.appendChild(li)
       let editbtn = document.createElement('button')
       editbtn.appendChild(document.createTextNode("Edit"))
       let deletebtn = document.createElement('button')
       deletebtn.appendChild(document.createTextNode("Delete"))
       li.appendChild(editbtn)
       li.appendChild(deletebtn)
       editbtn.onclick= ()=>{
        localStorage.removeItem("expenseDetails")
        details.removeChild(li)
         document.getElementById('price').value = data.price
         document.getElementById('description').value = data.description
         document.getElementById("category").value = data.category
         
       }
       deletebtn.onclick=()=>{
        localStorage.removeItem("expenseDetails")
        details.removeChild(li)
       }
       
    }
