
function myFunction() {
    var search = document.getElementById('myInput');
    var filter = search.value.toLowerCase();
    var ul = document.getElementById('filter-list');
    var li = ul.getElementsByTagName('li');

    for(var i = 0,size = li.length; i < size ; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.indexOf(filter) !== -1){
            li[i].style.display = "";
        }else {
            li[i].style.display= "none";
        }

    }
}


function countries() {
  var country = document.getElementById('country');
  var city = document.getElementById('city');
    city.value = country.value;
  // for(var i = 0,size= country.length;i<size;i++) {
  //     city[i].value = country[i].value;
  // }
};