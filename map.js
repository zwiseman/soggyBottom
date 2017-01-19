
function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
	var myLatLng = {lat: 35.901184, lng: -82.035019};
	var mapProp = {
		center: new google.maps.LatLng(myLatLng),
		zoom:10,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var label = "s";
	var map = new google.maps.Map(mapCanvas,mapProp)
	var marker = new google.maps.Marker({
		position: myLatLng,
        map: map,
        label: label
	})
}
google.maps.event.addDomListener(window,'load',initialize);