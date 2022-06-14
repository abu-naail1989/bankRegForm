const values = document.querySelectorAll("option");
const selectElement = document.querySelector(".select-opt");

values.forEach(function (item) {
  let a = item.value;
  console.log(a);
  selectElement.addEventListener("change", function () {
    if (a == "5") {
      document.querySelector(
        ".result"
      ).innerHTML = `<textarea rows="5" cols="10"></textarea>`;
    } else {
      document.querySelector(".result").innerHTML = "";
    }
  });
});
