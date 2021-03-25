class UI {
	constructor() {
		this.uiContainer = document.getElementById('content');
		this.city;
	
	}

	populateUI(data) {


		//add them to inner HTML

		this.uiContainer.innerHTML = `
          
		<section id="content" class="contentCard">
              <article class="card-body justify-content-center">
                  <h3 class="card-title">${data.name}</h3>
                  <h4 class="card-subtitle">Highs of ${data.main.temp_max}°C🌡. Lows of ${data.main
			.temp_min}°C🌡</h4>
                  <p class="card-text">Weather conditions are described as: ${data.weather[0].description}. </p>
                  <p class="card-text">Wind speed of: ${data.wind.speed} m/s </p>
                
              </article>
          </section>
          
          
          `;
	}

}
