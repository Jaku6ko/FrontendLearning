$("#searchButton").bind("click", Search)
function Search(){
    var searchTerm = $("#searchTerm").val();
    var url ="list.html?";
    url += "search="+ searchTerm;
    window.location = url;
}