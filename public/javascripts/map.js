var mymap = L.map('main_map').setView([-34.601424, -58.3861497], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGllZ29kZWxpYXMiLCJhIjoiY2tqM252NGVrMnF4eDJ5cWo4OHVyYjVnYyJ9.GLrLfh7OP5M-0KXfEnIz2w'
}).addTo(mymap);
L.marker([-34.6012424,-583861497]).addTo(mymap);
L.marker([-34.596932,-58.3883287]).addTo(mymap);
L.marker([-34.599564,-58.3778777]).addTo(mymap);