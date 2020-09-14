function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}
$(document).ready(function() {
   var id = getUrlParameter("id");
   fill(id);
});
function getMovies(id){
   var apiKey = "34f6db6f";
   var response = null;
   $.ajax({
       url: "http://www.omdbapi.com/?apikey=" + apiKey + "&i=" + id,
       method: "GET",
       async: false,
       success: function(data) {
         console.log(data)
         response = data;
       },
       error: function() {
         alert("error lol u dumb")
       }
   });
   return response;
}
function fill(id){
   var registries = getMovies(id);
   addDetails(registries);
}
function addDetails(registry) {


    $('#Title').append(
        registry.Title
     )
     $('#Year').append(
      registry.Year
     )
     $('#Rated').append(
      registry.Rated
     )
     $('#Released').append(
      registry.Released
     )
     $('#Runtime').append(
      registry.Runtime
     )
     $('#Genre').append(
      registry.Genre
     )
     $('#Director').append(
      registry.Director
     )
     $('#Writer').append(
      registry.Writer
     )
     $('#Actors').append(
      registry.Actors
     )
     $('#Plot').append(
        registry.Plot
     )
     $('#Language').append(
        registry.Language
     )
     $('#Country').append(
        registry.Country
     )
     $('#Awards').append(
        registry.Awards
     )
     $('#Poster').append(
      "<img src='"+registry.Poster+"'/>"
     )
     $('#Metascore').append(
        registry.Metascore
     )
     $('#imdbRating').append(
        registry.imdbRating
     )
     $('#imdbVotes').append(
        registry.imdbVotes
     )
     $('#imdbID').append(
        registry.imdbID
     )
     $('#Type').append(
        registry.Type
     )
     $('#BoxOffice').append(
        registry.BoxOffice
     )
     $('#Website').append(
        registry.Website
     )
     $('#Response').append(
        registry.Response
     )
     $('#DVD').append(
        registry.DVD
     )
}