function initMap() {
  var coords = {lat: 59.936143, lng: 30.321878};

  var mapElem = document.querySelector('.map');
  mapElem.classList.remove('map_no-js');

  var map = new google.maps.Map(mapElem, {
    center: coords,
    zoom: 17,
    disableDefaultUI: true
  });

  var image = {
    url: 'img/icons/icon-map-marker.svg',
    scaledSize: new google.maps.Size(36, 36),
  }

  var marker = new google.maps.Marker({
    position: coords,
    map: map,
    optimized: false,
    icon: image,
    title: 'Pink'
  });

  window.addEventListener('resize', function() {
    map.setCenter(coords);
  });

}
