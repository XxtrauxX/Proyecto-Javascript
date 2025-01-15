function iniciarMap(){
    var coord = {lat:-44.5956145 ,lng: -78.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}


// Api para Google Maps de la página principal del proyecto