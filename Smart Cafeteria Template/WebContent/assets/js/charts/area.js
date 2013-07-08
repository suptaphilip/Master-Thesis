$(function () {
  // we use an inline data source in the example, usually data would
  // be fetched from a server
  var data_month = [ ["January", 10000], ["February", 8000], ["March", 12000], ["April", 24000], ["May", 17000], ["June", 19000] ];
  var data_date = [ ["01/02/2013", 1400], ["02/02/2013", 1800], ["03/02/2013", 1500], ["04/02/2013", 1200], ["05/02/2013", 1100], ["06/02/2013", 1300] ];
  $.plot("#calorie-chart-by-month", [ data_month ], {
    series: {
      bars: {
        show: true,
        barWidth: 0.6,
        align: "center"
      }
    },
    xaxis: {
      mode: "categories",
      tickLength: 0
    }
  });

  $.plot("#calorie-chart-by-date", [ data_date ], {
    series: {
      bars: {
        show: true,
        barWidth: 0.6,
        align: "center"
      }
    },
    xaxis: {
      mode: "categories",
      tickLength: 0
    }
  });
});