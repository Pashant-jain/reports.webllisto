$(".sidebar_toggler").click(function () {
  $(".sidebar").toggleClass("expand_sidebar");
  $(".sidebar_toggler").toggleClass("rotate-180");
  $(".contant").toggleClass("expand_contant");
});

$(document).ready(function () {
  $("#list_table").DataTable({
    lengthMenu: [
      [10, 25, 50, -1],
      [10, 25, 50, "All"],
    ],
    pagingType: "simple",
    responsive: true,
  });
  $(".report_list_table").DataTable({
    searching: false,
  });
});
