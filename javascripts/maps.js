// Initialize and add the map
function initMap() {
    // The location of Uluru
    var gmarc = {lat: 38.036939, lng: -78.499589};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: gmarc});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: gmarc, map: map});
  }