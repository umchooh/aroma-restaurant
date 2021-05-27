$(document).ready(function () {

	//initMap;
	const mapBtn = document.querySelector('#map-btn');
	const mapContainer = document.querySelector('#map-container');

	mapBtn.onclick = () => {
		if (mapBtn.textContent === "Enlarge Map") {
			mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.874437577842!2d-79.3806447851196!3d43.65078066060625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb32e5503ab9%3A0xd922bf0aef4a5b59!2s111%20Yonge%20St%2C%20Toronto%2C%20ON%20M5C%201W4!5e0!3m2!1sen!2sca!4v1621633906854!5m2!1sen!2sca" width="550" height="420" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
			mapBtn.textContent = "Minimize Map";
		} else {
			mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.874437577842!2d-79.3806447851196!3d43.65078066060625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb32e5503ab9%3A0xd922bf0aef4a5b59!2s111%20Yonge%20St%2C%20Toronto%2C%20ON%20M5C%201W4!5e0!3m2!1sen!2sca!4v1621633906854!5m2!1sen!2sca" width="430" height="325" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
			mapBtn.textContent = "Enlarge Map";
		}
	}

});

function initMap() {
	var location = { lat: 43.650610, lng: -79.378270 };
	var map = new google.maps.Map(document.getElementById("map"),
		{
			zoom: 16,
			center: location
		});
	var marker = new google.maps.Marker(
		{
			position: location,
			map: map
		});
}




