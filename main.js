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
    console.log(res)
}