/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", async () => {
  btn.style.display = "none";
  const response = await fetch(ENDPOINT);
  const users = await response.json();
  let results = "";
  for (let i = 0; i < users.length; i++) {
    results +=
      "<div class='output-user-container'><b>User name:</b>" +
      users[i].login +
      "</br><b>Avatar link:</b> <a href=" +
      users[i].avatar_url +
      ">" +
      users[i].avatar_url +
      "</a></br></br></div>";
  }
  document.getElementById("output").innerHTML = results;
});
