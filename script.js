async function loadUsers(url){
    const response = await fetch(url); //github api
    const users = await response.json(); //change it to json
    return users; //return the whole users
}

async function getData(users){
    //console.log(users);
    var div = document.getElementById("cardDiv");
      for(i=1;i<=20;i++){
          console.log(users[i]);
          div.innerHTML += `
          <tr>
            <th scope="row">${i}</th>
            <td>${users[i]["quote"]}</td>
            <td>${users[i]["author"]}</td>
        </tr>`;
      }
  
  }
//to get the users data
document.addEventListener("DOMContentLoaded",async() => {
    try{
        users = await loadUsers("https://breaking-bad-quotes.herokuapp.com/v1/quotes/50");
        getData(users);
        
    }catch(e){
        console.log(e);
    }

});





