class Fetch {
	async getCurrent(input) {
		const myKey = 'e04e0f290d371898f699a80757dd5726';

		//make request to the url

		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
		);

		const data = await response.json();
		console.log(data);
		return data;
	}
}

