class UI {
	constructor() {
		this.uiContainer = document.getElementById('content');
		this.city;
	
	}

	populateUI(data) {


		//add them to inner HTML

		this.uiContainer.innerHTML = `
          
          <section class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h5 class="card-title">${data.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}°C🌡. Lows of ${data.main
			.temp_min}°C🌡</h6>
                  <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                  
              </div>
          </section>
          
          
          `;
	}

}
