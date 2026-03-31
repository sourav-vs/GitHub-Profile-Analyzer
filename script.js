const Search=async()=>{
    let username=document.getElementById('inputCity').value
    
    try{
        const response=await fetch(`https://api.github.com/users/${username}`)
        if(response.status==404){
            alert('invalid username')
        }
        console.log(response);
        const res=await response.json()
        console.log(res);
        const userDetails=res
        console.log(userDetails);
        const displayData=document.getElementById('output')
        displayData.innerHTML=`<h1 style="color:white">${userDetails.name}</h1>`
    }
    catch(err){
        console.log(err);
        
    }
}