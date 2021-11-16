var xhr = new XMLHttpRequest();

var search = $("#search").text()

xhr.open("GET",`api.coincap.io/v2/assets/${search}`);

xhr.onload(function(){
    console.log(xhr.responseText);
})
xhr.send();