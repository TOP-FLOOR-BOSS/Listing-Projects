/* When the user clicks on the button,
toggle between hiding and showing the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
*/

function theFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

  //======================== Nav bar ============================================

  // window.onscroll = function() {myFunction()};

  // var navbar = document.getElementById("navbar");
  // var sticky = navbar.offsetTop;
  
  // function myFunction() {
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }

  // //======================== Filter btns ============================================
  // filterObjexts("all");

  // function filterObjexts(c) {
  //   var x, w;
  //   x = document.getElementsByClassName("project-container");
  //   if (c == 'all') c = "";
  //   for ( w=0 ; w < x.length; w++) {
  //     removeClass(x[w], "show");
  //     if(x[w].className.indexOf(c) > -1) addClass(x[w], "show")
  //   }

  // }

  // function addClass(element, name){
  //   var w, arr1, arr2;
  //   arr1 = element.className.split(" ");
  //   arr2 = name.split(" ");
  //   for ( w = 0 ; w < arr2.length; w++){
  //     if(arr1.indexOf(arr2[w]) == -1) {
  //       element.className += " " + arr2[i];
  //     }
  //   }
  // }

  // function removeClass(element, name) {
  //   var w, arr1, arr2;
  //   arr1 = element.className.split(" ");
  //   arr2 = name.split(" ");
  //   for ( w= 0; w < arr2.length; w++){
  //     while ( arr1.indexOf(arr2[w] > -1)){
  //       arr1.splice(arr1.indexOf(arr2[w]), 1);
  //     }
  //   }
  //   element.className = arr1.join(" ");
  // }


  localStorage.setItem( 'property' , JSON.stringify(properties = [{
    id: 1,
    Suite: 'House',
    location: 'Italy',
    URL1: "/imgs/Italy Aprtment.jpg",
    bedrooms: 5, 
    price: 900000
  },
{
  id: 2,
  Suite: 'House',
  location: 'Spain',
  URL2: "/imgs/Spain House.webp",
  bedrooms: 6, 
  price: 1000000

},
{
  id: 3,
  Suite: 'House',
  location: 'Brazil',
  URL3: "/imgs/Brazil House.webp",
  bedrooms: 8, 
  price: 1000000

},
{
  id: 4,
  Suite: 'Apartment',
  location: 'Strandfontein',
  URL4: "/imgs/Superior-apartments-Waterfront.webp",
  bedrooms: 7, 
  price: 1000000

},
{
  id: 5,
  Suite: 'Apartment',
  location: 'Portugal',
  URL5: "/imgs/Apartm`ent in Portugal.jpeg",
  bedrooms: 4, 
  price: 1000000
},
{
  id: 6,
  Suite: 'House',
  location: 'Greece',
  URL6: "/imgs/Greece house.webp",
  bedrooms: 5, 
  price: 1000000
},
{
  id: 7,
  Suite: 'Apartment',
  location: 'Dubai',
  URL7: "/imgs/Dubai Apartment.jpg",
  bedrooms: 3, 
  price: 1000000
},
{
  id: 8,
  Suite: 'House',
  location: 'Australia',
  URL8: "/imgs/Australia House.webp",
  bedrooms: 4, 
  price: 1000000
},
{
  id: 9,
  Suite: 'House',
  location: 'Germany',
  URL9: "/imgs/Germany House.jpg",
  bedrooms: 7, 
  price: 1000000
},
{
  id: 10,
  Suite: 'House',
  location: 'Paris',
  URL10: "/imgs/France2 House.jpg",
  bedrooms: 7, 
  price: 1000000
}
]))


// function theProps(property){
//   document.getElementById('Houseimgsss').innerHTML= ' ';
//   property.forEach((property,index) => {
//     document.getElementById('Houseimgsss').innerHTML +=
//     ` <img class="HouseIMG apartment" id="Italy" data-bs-toggle="modal" data-bs-target="#exampleModal"   src="${property.URL1}">`
//   })
// }
// theProps(property);