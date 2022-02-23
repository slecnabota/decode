ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [43.238365, 76.913952],
        zoom: 17
    });
    var myPlacemark = new ymaps.Placemark(
        [43.238365, 76.913952]       
        );
    myMap.geoObjects.add(myPlacemark);
}

function openModal(){
  document.getElementById("modal").classList.toggle("active");
}
function closeModal(){
  document.getElementById("modal").classList.toggle("active");
}

function openFeedBack(){
  document.getElementById("modal-feedback").classList.toggle("active");
  document.getElementById("modal").classList.toggle("active");
}
function closeFeedback(){
  document.getElementById("modal-feedback").classList.toggle("active");
}
function openFeedBackSign(){
  document.getElementById("modal-feedback").classList.toggle("active");
}

function openMenu(){
  document.getElementById("aside").classList.toggle("active");
}
function closeMenu(){
  document.getElementById("aside").classList.toggle("active");
}