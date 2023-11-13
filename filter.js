let form= document.getElementById("addForm")
form.addEventListener("submit", add_item)
 function add_item(e)
{
    e.preventDefault()
    let ipt1 = document.getElementById("item").value
    let ipt2 = document.getElementById("description").value
    let li= document.createElement("li")
    li.className="list-group-item"
    let ull=document.getElementById("items")
    ull.append(li)
    li.textContent=`${ipt1}  ${ipt2} `
    let Deletebutton= document.createElement("button")
    Deletebutton.className="btn btn-danger btn-sm float-right delete"
    Deletebutton.appendChild(document.createTextNode("X")) 
    li.appendChild(Deletebutton)
    let EditButton= document.createElement("button")
    EditButton.className="btn btn-info btn-sm float-right"
    EditButton.appendChild(document.createTextNode("Edit"))
    li.append(EditButton)
    Deletebutton.onclick=()=>{
        ull.removeChild(li)
    }
    // function deleteItem(){
    //     ull.removeChild(li)
    // }
    
    EditButton.onclick=()=>{
        document.getElementById("item").value=ipt1
        document.getElementById("description").value=ipt2
        ull.removeChild(li)
        // document.getElementById("item").value=itp1
        // document.getElementById("description").value=itp2
    }
   

}

const filter = document.getElementById('filter');

filter.addEventListener('keyup', filteritem);

function filteritem(e)
{
    var text= document.getElementById('filter').value;
    text.toLowerCase();
    var lilist= document.getElementsByTagName('li');
    let arr= Array.from(lilist);
    for(let i=0;i<arr.length;i++){
         var firstName=arr[i].textContent;
         var lastName= arr[i].children[1].textContent
        console.log(firstName,lastName)

    if(firstName.toLowerCase().indexOf(text)!=-1 || lastName.toLowerCase().indexOf(text)!=-1)
    {
        arr[i].style.display="block";
        console.log("x")
    }
    else{
        arr[i].style.display="none";
    }
}
}

