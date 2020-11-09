// Mohd Azlan Ab Aziz
/*

20DDT16F30002

*/

function myAlert() {
  alert("Page is loaded");
}

function semakMesej() {
  var mesej = document.getElementById("inputZip").value;
  if (mesej.length < 10) {
    alert("Cannot be less than 10 characters");
  }
}

function semakAlamat() {
  var alamat = document.getElementById("inputAddress").value;
  if (alamat.length < 1) {
    document.getElementById("demo").innerHTML = "No text inserted";
  }
}
