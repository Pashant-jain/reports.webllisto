$(".slidebarCheck").click(function(){
    $(".dashboard_wrp").toggleClass("closed_slidebar");
  });



  //new one 

  $(".sidebar_toggler").click(function(){
    $(".sidebar").toggleClass("expand_sidebar");
    $(".sidebar_toggler").toggleClass("rotate-180");
    $(".contant").toggleClass("expand_contant");
  });

