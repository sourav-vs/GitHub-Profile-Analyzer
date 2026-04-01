const Search=async()=>{
    let username=document.getElementById('inputCity').value
    
    try{
        const response=await fetch(`https://api.github.com/users/${username}`)
        const response2=await fetch(`https://api.github.com/users/${username}/repos`)
        if(response.status==404){
            alert('invalid username')
        }
        console.log(response);
        const res=await response.json()
        const res2=await response2.json()
        console.log(res2)
        const repoDetails=res2
        console.log(res);
        const userDetails=res
        console.log(userDetails);
        const displayData=document.getElementById('output')
        displayData.innerHTML=` <div class="col-md-4 text-center" style="background-color: black;border-radius: 20px;padding: 20px;">
               <img src="${userDetails.avatar_url}" alt="" width="100px" height="100px" style="border-radius: 50%;">
                <h3 style="color: white;">UserName : ${userDetails.name}</h3>
                <h3 style="color: white;">Bio:${userDetails.bio}</h3>
            </div>
            <div class="col-md-4 text-center" style="background-color: black;border-radius: 20px;padding: 20px;">
                <h3 style="color: white;">Followers:${userDetails.followers}</h3>
                <h3 style="color: white;">Following:${userDetails.following}</h3>
                <h3 style="color: white;">Repositories:${userDetails.public_repos}</h3>
            </div>
            <div class="col-md-4 text-center" style="background-color: black;border-radius: 20px;padding: 20px;">
                <h3 style="color: white;">Repo Name:${repoDetails[0].name}</h3>
                <h3 style="color: white;">Stars:${repoDetails[0].stargazers_count}</h3>
                <h3 style="color: white;">Language:${repoDetails[0].language}</h3>
            </div>`
    }
    catch(err){
        console.log(err);
        
    }
}