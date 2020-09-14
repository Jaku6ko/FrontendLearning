var getUrlParameter = function getUrlParameter(sParam) {
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
    var searchTerm = getUrlParameter("search");
    fillList(searchTerm);
});

var id = GetRowId();

function fillList(searchTerm){
    var registries = getMovies(searchTerm);
    for(i = 0; i < registries.length; i++)
    {
        addRow(registries[i]);
    }
}

function getMovies(searchTerm){
    var apiKey = "34f6db6f";
    var response = null;
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + searchTerm,
        method: "GET",
        async: false,
        success: function(data) {
            response = data.Search;
        },
        error: function() {
            alert("error lol u dumb")
        }
    });
    return response;
}

function addRow(registry){
    var id = GetRowId();
    
    $('#list-content').append(
        $('<div class="row main-row" id="row-'+id+'">').append(
            $('<div class="col-2">').append(
                $('<div class="row margin-bottom">').append(
                    $('<input class="form-control col-10" id="row-title-'+id+'" value="'+registry.Title+'" disabled />')
                )
            )
        ).append (
            $('<div class="col-2">').append(
                $('<div class="row margin-bottom">').append(
                    $('<input class="form-control col-10" id="row-year-'+id+'" value="'+registry.Year+'" disabled />')
                )
            )
        ).append(
            $('<div class="col-2">').append(
                $('<div class="row margin-bottom">').append(
                    $('<input class="form-control col-10" id="row-type-'+id+'" value="'+registry.Type+'" disabled />')
                )
            )
        ).append(
            $('<div class="col-2">').append(
                $('<div class="row margin-bottom">').append(
                    $('<input class="form-control col-10" id="row-imdb-id-'+id+'" value="'+registry.imdbID+'" disabled />')
                )
            )
        ).append(
            $('<div class="col-2">').append(
                $('<div class="row margin-bottom">').append(
                    $('<button id="row-details-'+registry.imdbID+'" class="btn btn-primary" onclick="Open(\''+registry.imdbID+'\')">Details</button>')
                )
            )
         )
    )
}

function Open(id){
    var url ="details.html?id="+id;
    window.location = url;
}

function GetRowId(){
    var Table = $('#List');
    var count = Table.children().length;
    var id = count + 1;

    while(GetRow(id)[0] != null)
    {
        id++;
    } return id;
}
function GetRow(id){
    return $('#row-'+id);
}