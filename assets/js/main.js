$(".sidebar_toggler").click(function () {
    $(".sidebar").toggleClass("expand_sidebar");
    $(".sidebar_toggler").toggleClass("rotate-180");
    $(".contant").toggleClass("expand_contant");
  });
  $(".notification_btn").click(function () {
    $(".notification_wrp").toggleClass("d-none");
  });
  $('#editor').wysiwyg({
    highlight: true,
    debug: true,
});
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600,
    adaptiveHeight:true
  });


 
  
  document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
};
  
