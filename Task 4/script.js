/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

function showData() {
  fetch(ENDPOINT)
    .then((data) => data.json())
    .then((cars) => {
      let result = "";
      for (let i = 0; i < cars.length; i++) {
        result +=
          "<div class='output-cars-container'><b>Brand:</b> " +
          cars[i].brand +
          "</br><b>Models:</b>" +
          cars[i].models.toString() +
          "</br></br></div>";
      }
      document.getElementById("output").innerHTML = result;
    });
}
showData();
