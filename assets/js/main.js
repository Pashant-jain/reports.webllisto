$(".sidebar_toggler").click(function () {
  $(".sidebar").toggleClass("expand_sidebar");
  $(".sidebar_toggler").toggleClass("rotate-180");
  $(".contant").toggleClass("expand_contant");
});
$(document).ready(function () {
  var report_list_table = $("#list_table").hasClass("report_list_table");
  $("#list_table").DataTable({
    lengthMenu: [
      [10, 25, 50, -1],
      [10, 25, 50, "All"],
    ],
    pagingType: "simple",
    responsive: true,
    searching: report_list_table ? false : true,
  });
  $("#leave_details").DataTable({
    lengthMenu: [
      [10, 25, 50, -1],
      [10, 25, 50, "All"],
    ],
    pagingType: "simple",
    responsive: true,
    searching: false,
    paging: false,
    info: false,
  });
});