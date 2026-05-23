function searchPlace() {

  let input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  let result = document.getElementById("result");

  if (input === "beach") {
    result.innerHTML = "Best Result: Red Sea Beach";
  }
  else if (input === "pyramids") {
    result.innerHTML = "Best Result: Giza Pyramids";
  }
  else if (input === "cairo") {
    result.innerHTML = "Best Result: Cairo City";
  }
  else {
    result.innerHTML = "No Results Found";
  }
}