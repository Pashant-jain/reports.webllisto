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



// google.charts.load("current", {packages:["corechart"]});
// google.charts.setOnLoadCallback(drawChart);
// function drawChart() {
//   var data = google.visualization.arrayToDataTable
//       ([['month', 'works'],
//         ['Jan', 180],
//         ['feb', 120],
//         ['mar', 100],
//         ['apr', 250],
//         ['Jan', 300],
//         ['Jan', 130],
//         ['Jan', 300],
//         ['Jan', 144],
//         ['Jan', 145],
//         ['Jan', 265],
//         ['Jan', 275],
//         ['Jan', 400],
//   ]);

//   var options = {
//     legend: 'none',
//     // hAxis: { minValue: 0, maxValue: 9 },
//     vAxis: {gridlines: { count: 0}},
// //     vAxis:{
// //    baselineColor: '#000',
// //    gridlineColor: '#000',
// //   //  textPosition: 'none',
// //    gridlines: { count: 0}
// //  },
// //  hAxis:{
// //    baselineColor: '#000',
// //    gridlineColor: '#000',
// //   //  textPosition: 'none',
// //    gridlines: { count: 0}
// //  },
//     colors: ['#F85046'],
//     backgroundColor: { fill:'transparent' },
//     pointSize: 7,
//     pointShape: { type: 'circle', sides: 4, colors:'#000' },
//     responsive: true,
//   };

//   var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
//   chart.draw(data, options);
// }


new FroalaEditor('div#example', {
  toolbarBottom: true
})