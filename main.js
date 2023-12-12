function refresh(){
    axios.get('https://crudcrud.com/api/15b0f1d958db4aafae1cfc47fae456d2/vaishali').then((res)=>{
        for(let i=0;i<res.data.length;i++)
        {
            addusertoscreen(res.data[i]);
        }

    }).catch((err)=>{
        console.log('error')
    })

}

refresh()
function vaishali(event){

event.preventDefault()
    let mail = document.getElementById('email').value                                          
    let name= document.getElementById('name').value
    let number= document.getElementById('phone').value

    let obj={mail,name,number}

    addtocrudcrud(obj)
}

async function addtocrudcrud(obj){
    let res=await axios.post('https://crudcrud.com/api/15b0f1d958db4aafae1cfc47fae456d2/vaishali',obj)
    addusertoscreen(res.data)

    
}

function addusertoscreen(obj){
    let listchild = document.createElement("li")
    listchild.textContent= `${obj.mail} ${obj.name} ${obj.phone} ${obj._id}`
    let parent=document.getElementById('item')
    parent.appendChild(listchild)

    let deletebtn= document.createElement('button')
    let editbtn= document.createElement('button')
    deletebtn.appendChild(document.createTextNode('Delete'))

    editbtn.appendChild(document.createTextNode('Edit'))
    listchild.appendChild(deletebtn)
    listchild.appendChild(document.createTextNode('  '))
    listchild.appendChild(editbtn)
    deletebtn.onclick=()=>{
        deleteuser(obj._id)
    }

    editbtn.onclick=()=>{
        editUser(obj)
    }
}
async function deleteuser(id){
       let parent=document.getElementById('item')
       for(let i=0;i<parent.children.length;i++){
            let child=parent.children[i]
            if(child.textContent.includes(id))
            {
                parent.removeChild(child)
            }
       } 
    try {
        let res=await axios.delete(`https://crudcrud.com/api/15b0f1d958db4aafae1cfc47fae456d2/vaishali/${id}`)
        console.log(res,"deleted")
    } catch (error) {
        console.log('error')
    }
}

function editUser(obj){
    document.getElementById("name").value=obj.name
    document.getElementById("email").value=obj.mail
    document.getElementById("phone").value=obj.number 
    deleteuser(obj._id)
}

