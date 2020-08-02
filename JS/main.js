// Smooth Scrolling
$("#main-nav a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});

function updateData() {
  // fetch global data
  fetch(" https://covid19.mathdro.id/api/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("globalCases").innerHTML = data.confirmed.value;
      document.getElementById("globalRecovered").innerHTML =
        data.recovered.value;
      document.getElementById("globalDeaths").innerHTML = data.deaths.value;
    })
    .catch((err) => {
      console.error("Error fetching data from API.\n", err);
    });

  // fetch india data
  fetch("https://api.covid19india.org/data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("confirmedCases").innerHTML =
        data.statewise[0].confirmed;
      document.getElementById("activeCases").innerHTML =
        data.statewise[0].active;
      document.getElementById("recoveredCases").innerHTML =
        data.statewise[0].recovered;
      document.getElementById("deathCases").innerHTML =
        data.statewise[0].deaths;
      document.getElementById("dailyCases").innerHTML =
        data.statewise[0].deltaconfirmed;
      document.getElementById("dailyRecovered").innerHTML =
        data.statewise[0].deltarecovered;
      document.getElementById("dailyDeaths").innerHTML =
        data.statewise[0].deltadeaths;
      document.getElementById("dailyActive").innerHTML =
        data.statewise[0].deltaconfirmed -
        data.statewise[0].deltarecovered -
        data.statewise[0].deltadeaths;
      document.getElementById("updated").innerHTML =
        data.statewise[0].lastupdatedtime;
    });

  fetch("https://api.covid19india.org/data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let tested_cases = data.tested.length;
      document.getElementById("date").innerHTML =
        data.tested[tested_cases - 1].updatetimestamp;
      document.getElementById("test").innerHTML =
        data.tested[tested_cases - 1].totalsamplestested;
      document.getElementById("today").innerHTML =
        data.tested[tested_cases - 1].samplereportedtoday;
    });
  console.log("Successful Sample tested.\n");
}

updateData();

function drawBlueChart(processedData, ctxID) {
  var timeFormat = "YYYY-MM-DD";
  //canvas
  var ctx = document.getElementById(ctxID).getContext("2d");
  //gradient
  var gradientFill = ctx.createLinearGradient(0, 0, 0, 350);

  var config = {
    type: "line",
    data: {
      datasets: [
        {
          label: "Confirmed Cases",
          data: processedData,
          fill: true,
          backgroundColor: gradientFill,
          borderColor: "#007bff",
          pointBorderColor: "blue",
          pointBackgroundColor: "lightblue",
          pointHoverBackgroundColor: "lightblue",
          pointHoverBorderColor: "royalblue",
          pointRadius: 3,
          pointHoverRadius: 5,
        },
      ],
    },
    options: {
      legend: {
        display: true,
        labels: {
          fontColor: "black",
          fontSize: 20,
        },
      },
      elements: {
        line: {
          tension: 0,
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              displayFormats: {
                day: "MMM D",
              },
              tooltipFormat: "ll",
            },
            scaleLabel: {
              display: true,
              labelString: "Date",
              fontColor: "#000",
              fontSize: 15,
            },
            ticks: {
              fontColor: "#000",
              fontSize: 10,
            },
            gridLines: {
              color: "rgba(0,0,0,0.2)",
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Cases",
              fontColor: "#000",
              fontSize: 15,
            },
            ticks: {
              fontColor: "#000",
              fontSize: 10,
            },
            gridLines: {
              color: "rgba(0,0,0,0.2)",
            },
          },
        ],
      },
    },
  };

  window.myLine = new Chart(ctx, config);
} //end funcntion

//recovered graph
function drawGreenChart(processedData, ctxID) {
  var timeFormat = "YYYY-MM-DD";
  //canvas
  var ctx = document.getElementById(ctxID).getContext("2d");

  //gradient
  var gradientFill = ctx.createLinearGradient(0, 0, 220, 0);

  var config = {
    type: "line",
    data: {
      datasets: [
        {
          label: "Recovered Cases",
          data: processedData,
          fill: true,
          backgroundColor: gradientFill,
          borderColor: "#28a745",
          pointBorderColor: "green",
          pointBackgroundColor: "lightgreen",
          pointHoverBackgroundColor: "lightgreen",
          pointHoverBorderColor: "green",
          pointRadius: 3,
          pointHoverRadius: 5,
        },
      ],
    },
    options: {
      legend: {
        display: true,
        labels: {
          fontColor: "black",
          fontSize: 20,
        },
      },
      elements: {
        line: {
          tension: 0,
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              displayFormats: {
                day: "MMM D",
              },
              tooltipFormat: "ll",
            },
            scaleLabel: {
              display: true,
              labelString: "Date",
              fontColor: "#000",
              fontSize: 15,
            },
            ticks: {
              fontColor: "#000",
              fontSize: 10,
            },
            gridLines: {
              color: "rgba(0,0,0,0.2)",
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Cases",
              fontColor: "#000",
              fontSize: 15,
            },
            ticks: {
              fontColor: "#000",
              fontSize: 10,
            },
            gridLines: {
              color: "rgba(0,0,0,0.2)",
            },
          },
        ],
      },
    },
  };

  window.myLine = new Chart(ctx, config);
} //end function
//death graph
function drawRedChart(processedData, ctxID) {
  var timeFormat = "YYYY-MM-DD";
  //canvas
  var ctx = document.getElementById(ctxID).getContext("2d");

  //gradient
  var gradientFill = ctx.createLinearGradient(0, 0, 220, 0);

  var config = {
    type: "line",
    data: {
      datasets: [
        {
          label: "Death Cases",
          data: processedData,
          fill: true,
          backgroundColor: gradientFill,
          borderColor: "#ff073a",
          pointBorderColor: "red",
          pointBackgroundColor: "lightpink",
          pointHoverBackgroundColor: "lightpink",
          pointHoverBorderColor: "red",
          pointRadius: 3,
          pointHoverRadius: 5,
        },
      ],
    },
    options: {
      legend: {
        display: true,
        labels: {
          fontColor: "black",
          fontSize: 20,
        },
      },
      elements: {
        line: {
          tension: 0,
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              displayFormats: {
                day: "MMM D",
              },
              tooltipFormat: "ll",
            },
            scaleLabel: {
              display: true,
              labelString: "Date",
              fontColor: "#000",
              fontSize: 15,
            },
            ticks: {
              fontColor: "#000",
              fontSize: 10,
            },
            gridLines: {
              color: "rgba(0,0,0,0.2)",
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Cases",
              fontColor: "#000",
              fontSize: 15,
            },
            ticks: {
              fontColor: "#000",
              fontSize: 10,
            },
            gridLines: {
              color: "rgba(0,0,0,0.2)",
            },
          },
        ],
      },
    },
  };

  window.myLine = new Chart(ctx, config);
}

window.onload = function () {
  var proCasesData = [];
  var proRecoveredData = [];
  var previousDay = {};
  var newcases = [];
  fetch("https://pomber.github.io/covid19/timeseries.json")
    .then((response) => response.json())
    .then((data) => {
      data["India"].forEach((day) => {
        if (previousDay["recovered"] >= day["recovered"]) {
          recovered = previousDay["recovered"];
        } else {
          recovered = day["recovered"];
        }
        //temporary variable
        d2 = moment(day["date"], "YYYY-MM-DD");
        if (d2.isAfter("2020-1-29")) {
          //total cases
          proCasesData.push({
            x: moment(day["date"], "YYYY-MM-DD"),
            y: day["confirmed"],
          });
          //recovered
          proRecoveredData.push({
            x: moment(day["date"], "YYYY-MM-DD"),
            y: recovered,
          });
          newcases.push({
            x: moment(day["date"], "YYYY-MM-DD"),
            y: day["deaths"],
          });
        }
        previousDay = day;
      }); //end foreach
      drawBlueChart(proCasesData, "confirm-graph");
      drawGreenChart(proRecoveredData, "recovered-graph");
      drawRedChart(newcases, "death-graph");
    })
    .catch((e) => {
      console.log(e);
    });
};

// //For Zone Table Search
// $(document).ready(function () {
//   $("#myZone").on("keyup", function () {
//     var value = $(this).val().toLowerCase();
//     $("#zoneTab tr").filter(function () {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
//     });
//   });
// });

// For Country Search
$(document).ready(function () {
  $("#myCountry").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#countryTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// For State Search
$(document).ready(function () {
  $("#myState").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#stateTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$.ajax({
  url: "https://coronavirus-19-api.herokuapp.com/countries/",
  type: "get",
  dataType: "json",
  success: function (data) {
    drawTable(data);
  },
});

function drawTable(data) {
  for (var i = 1; i < data.length; i++) {
    drawRow(data[i]);
  }
}

function drawRow(rowData) {
  var row = $("<tr />");
  if (rowData.active === null) {
    {
      rowData.active = 0;
    }
  } else {
    {
      rowData.active;
    }
  }
  if (rowData.recovered === null) {
    {
      rowData.recovered = 0;
    }
  } else {
    {
      rowData.recovered;
    }
  }
  $("#myCountry1").append(row);
  row.append($("<td class='pl-2'>" + rowData.country + "</td>"));
  row.append($("<td class='text-primary'>" + rowData.cases + "</td>"));
  row.append($("<td class='text-danger'>" + rowData.active + "</td>"));
  row.append($("<td class='text-success'>" + rowData.recovered + "</td>"));
  row.append($("<td class='text-muted'>" + rowData.deaths + "</td>"));
}

// $(function () {
//   $("#zoneTab td ").each(function () {
//     if ($(this).text() == "Red") {
//       $(this).css("background-color", "red");
//     }
//     if ($(this).text() == "Orange") {
//       $(this).css("background-color", "orange");
//     }
//     if ($(this).text() == "Green") {
//       $(this).css("background-color", "green");
//     }
//   });
// });

$(document).ready(function () {
  $.getJSON("https://api.covid19india.org/data.json", function (data) {
    var stateData = "";
    $.each(data.statewise, function (key, value) {
      if (value.confirmed > 0) {
        stateData += "<tr>";
        if (value.state != "Total") {
          stateData +=
            '<td style="font-weight: 600;background-color: rgba(108,117,125,.3);color: #191919;">' +
            value.state +
            "</td>";
          if (value.deltaconfirmed > 0) {
            stateData +=
              '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div style="font-size:10px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a;">+' +
              value.deltaconfirmed +
              "&nbsp;</div>" +
              value.confirmed +
              "</td>";
          } else {
            stateData +=
              '<td style="background-color: rgba(0,123,255,.1); color: #007bff;">' +
              value.confirmed +
              "</td>";
          }
          stateData +=
            '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;">' +
            value.active +
            "</td>";
          if (value.deltarecovered > 0) {
            stateData +=
              '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div style="font-size:10px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a;">+' +
              value.deltarecovered +
              "&nbsp;</div>" +
              value.recovered +
              "</td>";
          } else {
            stateData +=
              '<td style="background-color: rgba(40,167,69,.1); color: #28a745;">' +
              value.recovered +
              "</td>";
          }
          if (value.deltadeaths > 0) {
            stateData +=
              '<td style="background-color: rgba(108,117,125,.3);color: #6c757d;"><div style="font-size:10px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a;">+' +
              value.deltadeaths +
              "&nbsp;</div>" +
              value.deaths +
              "</td>";
          } else {
            stateData +=
              '<td style="background-color: rgba(108,117,125,.3);color: #6c757d;">' +
              value.deaths +
              "</td>";
          }
          stateData += "</tr>";
        }
      }
    });
    $("#stateTable").append(stateData);
  });
});
//table footer data
$(document).ready(function () {
  $.getJSON("https://api.covid19india.org/data.json", function (data) {
    var stateData = "";
    $.each(data.statewise, function (key, value) {
      stateData += "<tr>";
      if (value.state == "Total") {
        stateData +=
          '<td style="font-weight: 600;background-color: rgba(108,117,125,.3); color: #191919;">' +
          value.state +
          "</td>";
        stateData +=
          '<td style="background-color: rgba(0,123,255,.1); color: #007bff;">' +
          value.confirmed +
          "</td>";
        stateData +=
          '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;">' +
          value.active +
          "</td>";
        stateData +=
          '<td style="background-color: rgba(40,167,69,.1); color: #28a745;">' +
          value.recovered +
          "</td>";
        stateData +=
          '<td style="background-color: rgba(108,117,125,.3);color: #6c757d;">' +
          value.deaths +
          "</td>";
      }
      stateData += "</tr>";
    });
    $("#foot").append(stateData);
  });
});
