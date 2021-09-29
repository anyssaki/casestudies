$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
  });

$('.popup-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    showCloseBtn:true,
    mainClass: 'mfp-fade',
    removalDelay: 300,
});