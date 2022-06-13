const values = document.querySelectorAll("option");
const selectElement = document.querySelector(".select-opt");

values.forEach(function (item) {
  let a = item.value;
  console.log(a);
  selectElement.addEventListener("change", function () {
    if (a == "5") {
      document.querySelector(
        ".result"
      ).innerHTML = `<div><label>Specify: <input type="text"/><label></div>`;
    } else {
      document.querySelector(".result").innerHTML = "";
    }
  });
});
