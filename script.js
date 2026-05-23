function searchPlace() {

  let input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  let result = document.getElementById("result");



  if (input === "beach") {

    result.innerHTML = `

      <h2 class="section-title">
        Beach Recommendations
      </h2>

      <div class="cards">

        <div class="card">

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          >

          <h3>Red Sea Beach</h3>

          <p>
            Crystal clear water and relaxing atmosphere.
          </p>

        </div>


        <div class="card">

          <img
            src="https://images.unsplash.com/photo-1493558103817-58b2924bce98"
          >

          <h3>Sharm El Sheikh</h3>

          <p>
            Perfect destination for diving and vacations.
          </p>

        </div>

      </div>
    `;
  }



  else if (input === "temple") {

    result.innerHTML = `

      <h2 class="section-title">
        Temple Recommendations
      </h2>

      <div class="cards">

        <div class="card">

          <img
            src="https://images.unsplash.com/photo-1572252009286-268acec5ca0a"
          >

          <h3>Karnak Temple</h3>

          <p>
            One of the oldest and greatest temples in Egypt.
          </p>

        </div>


        <div class="card">

          <img
            src="https://images.unsplash.com/photo-1568322445389-f64ac2515020"
          >

          <h3>Luxor Temple</h3>

          <p>
            Historic temple with amazing architecture.
          </p>

        </div>

      </div>
    `;
  }



  else if (input === "country") {

    result.innerHTML = `

      <h2 class="section-title">
        Country Recommendations
      </h2>

      <div class="cards">

        <div class="card">

          <img
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf"
          >

          <h3>Japan</h3>

          <p>
            Explore modern cities and rich culture.
          </p>

        </div>


        <div class="card">

          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
          >

          <h3>France</h3>

          <p>
            Discover Paris and the Eiffel Tower.
          </p>

        </div>

      </div>
    `;
  }



  else {

    result.innerHTML = `
      <h2 class="section-title">
        No Results Found
      </h2>
    `;
  }
}



function clearSearch() {

  document.getElementById("searchInput").value = "";

  document.getElementById("result").innerHTML = "";
}
