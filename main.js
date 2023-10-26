let latitude = 22.7868542, longitude = 88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoicG9vamEtMTEiLCJhIjoiY2xrc3BwcmptMDFyNzNubnBxbGxqcjAzMyJ9.hXgOsamHpjJJVXAFAw_fsQ'
var map = new mapboxgl.Map({
    container: 'map', style: 'mapbox://styles/mapbox/streets-v11', center: [longitude, latitude], zoom: 16

})


//Add Mapbox Geocoder
map.addControl(

    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
       
    })
    );




var img1 = document.querySelector("#amber")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1 = new mapboxgl.Marker({
    element:img1
})
.se
// Create a  Gateway of India, Mumbai Marker and add it to the map.

// Create a India Gate Marker and add it to the map.


// Create a Lotus Temple, Delhi Marker and add it to the map.


//Create a Victoria Memorial, Kolkata Marker and add it to the map.
