 let post=[]

 function createpost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            post.push({title:'postcreated',createdat:new Date().toLocaleTimeString()})
            resolve("post created")
        }, 2000);
    })
 }


function lastuseractivitytime(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(new Date().toLocaleTimeString())
        }, 0);
    })
}

async function main (){
    let [a,b]= await Promise.all([
        createpost(),
        lastuseractivitytime()
    ])

    console.log(a,b)
}

main();