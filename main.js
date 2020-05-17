function handleSidebarActiveClass() {
    $("#sidebar").removeClass("active");
  }
  handleSidebarActiveClass();
  // resize eventlistener
  $(window).resize(() => {
    handleSidebarActiveClass();
  });
  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    });
  });


//Smooth scrolling
$("#main-content a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          window.location.hash = hash;
        });
    }
});


function updateData() {
    // fetch global data
    fetch(" https://covid19.mathdro.id/api/")
        .then(final => {
            return final.json();
        })
       .then(updated => {
        document.getElementById("globalCases").innerHTML = updated.confirmed.value;
        document.getElementById("globalRecovered").innerHTML = updated.recovered.value;
        document.getElementById("globalDeaths").innerHTML = updated.deaths.value;
        })
        .catch(err => {
         console.error("Error fetching data from API.\n", err);
    });
    // fetch india data
    /*fetch("https://covid19.mathdro.id/api/countries/India")
        .then(india => {
            return india.json();
        })
        .then(data => {
            document.getElementById("confirmedCases").innerHTML = data.confirmed.value;
            document.getElementById("recoveredCases").innerHTML = data.recovered.value;
            document.getElementById("deathCases").innerHTML = data.deaths.value;
        })
        .catch(err => {
            console.error("Error fetching india data from API.\n", err);
        });*/

        fetch("https://api.covid19india.org/data.json")
        .then(first => {
            return first.json();
        })
        .then(data => {
            document.getElementById("conf1").innerHTML = data.statewise[0].deltaconfirmed;
            document.getElementById("conf2").innerHTML = data.statewise[0].deltarecovered;
            document.getElementById("conf3").innerHTML = data.statewise[0].deltadeaths;
            document.getElementById("confirmedCases").innerHTML = data.statewise[0].confirmed;
            document.getElementById("activeCases").innerHTML = data.statewise[0].active;
            document.getElementById("recoveredCases").innerHTML = data.statewise[0].recovered;
            document.getElementById("deathCases").innerHTML = data.statewise[0].deaths;
            document.getElementById("dailyCases").innerHTML = data.statewise[0].deltaconfirmed;
            document.getElementById("dailyDeaths").innerHTML = data.statewise[0].deltadeaths;                       
        });

    
         fetch("https://api.rootnet.in/covid19-in/stats/testing/latest")
            .then(res => {
                return res.json();
            })
            .then(testing => {
                document.getElementById("date").innerHTML = testing.data.day;
                document.getElementById("test").innerHTML = testing.data.totalSamplesTested;
            })
            console.log("Successful.\n");

            fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s1_1").innerHTML = data1.statewise[1].state;
                    document.getElementById("s1_2").innerHTML = data1.statewise[1].confirmed;
                    document.getElementById("s1_3").innerHTML = data1.statewise[1].active;
                    document.getElementById("s1_4").innerHTML = data1.statewise[1].recovered;
                    document.getElementById("s1_5").innerHTML = data1.statewise[1].deaths; 
                })

            fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s2_1").innerHTML = data1.statewise[2].state;
                    document.getElementById("s2_2").innerHTML = data1.statewise[2].confirmed;
                    document.getElementById("s2_3").innerHTML = data1.statewise[2].active;
                    document.getElementById("s2_4").innerHTML = data1.statewise[2].recovered;
                    document.getElementById("s2_5").innerHTML = data1.statewise[2].deaths; 
                }) 

            fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s3_1").innerHTML = data1.statewise[3].state;
                    document.getElementById("s3_2").innerHTML = data1.statewise[3].confirmed;
                    document.getElementById("s3_3").innerHTML = data1.statewise[3].active;
                    document.getElementById("s3_4").innerHTML = data1.statewise[3].recovered;
                    document.getElementById("s3_5").innerHTML = data1.statewise[3].deaths; 
                })
                
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s4_1").innerHTML = data1.statewise[4].state;
                    document.getElementById("s4_2").innerHTML = data1.statewise[4].confirmed;
                    document.getElementById("s4_3").innerHTML = data1.statewise[4].active;
                    document.getElementById("s4_4").innerHTML = data1.statewise[4].recovered;
                    document.getElementById("s4_5").innerHTML = data1.statewise[4].deaths; 
                })
                
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s5_1").innerHTML = data1.statewise[5].state;
                    document.getElementById("s5_2").innerHTML = data1.statewise[5].confirmed;
                    document.getElementById("s5_3").innerHTML = data1.statewise[5].active;
                    document.getElementById("s5_4").innerHTML = data1.statewise[5].recovered;
                    document.getElementById("s5_5").innerHTML = data1.statewise[5].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s6_1").innerHTML = data1.statewise[6].state;
                    document.getElementById("s6_2").innerHTML = data1.statewise[6].confirmed;
                    document.getElementById("s6_3").innerHTML = data1.statewise[6].active;
                    document.getElementById("s6_4").innerHTML = data1.statewise[6].recovered;
                    document.getElementById("s6_5").innerHTML = data1.statewise[6].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s7_1").innerHTML = data1.statewise[7].state;
                    document.getElementById("s7_2").innerHTML = data1.statewise[7].confirmed;
                    document.getElementById("s7_3").innerHTML = data1.statewise[7].active;
                    document.getElementById("s7_4").innerHTML = data1.statewise[7].recovered;
                    document.getElementById("s7_5").innerHTML = data1.statewise[7].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s8_1").innerHTML = data1.statewise[8].state;
                    document.getElementById("s8_2").innerHTML = data1.statewise[8].confirmed;
                    document.getElementById("s8_3").innerHTML = data1.statewise[8].active;
                    document.getElementById("s8_4").innerHTML = data1.statewise[8].recovered;
                    document.getElementById("s8_5").innerHTML = data1.statewise[8].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s9_1").innerHTML = data1.statewise[9].state;
                    document.getElementById("s9_2").innerHTML = data1.statewise[9].confirmed;
                    document.getElementById("s9_3").innerHTML = data1.statewise[9].active;
                    document.getElementById("s9_4").innerHTML = data1.statewise[9].recovered;
                    document.getElementById("s9_5").innerHTML = data1.statewise[9].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s10_1").innerHTML = data1.statewise[10].state;
                    document.getElementById("s10_2").innerHTML = data1.statewise[10].confirmed;
                    document.getElementById("s10_3").innerHTML = data1.statewise[10].active;
                    document.getElementById("s10_4").innerHTML = data1.statewise[10].recovered;
                    document.getElementById("s10_5").innerHTML = data1.statewise[10].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s11_1").innerHTML = data1.statewise[11].state;
                    document.getElementById("s11_2").innerHTML = data1.statewise[11].confirmed;
                    document.getElementById("s11_3").innerHTML = data1.statewise[11].active;
                    document.getElementById("s11_4").innerHTML = data1.statewise[11].recovered;
                    document.getElementById("s11_5").innerHTML = data1.statewise[11].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s12_1").innerHTML = data1.statewise[12].state;
                    document.getElementById("s12_2").innerHTML = data1.statewise[12].confirmed;
                    document.getElementById("s12_3").innerHTML = data1.statewise[12].active;
                    document.getElementById("s12_4").innerHTML = data1.statewise[12].recovered;
                    document.getElementById("s12_5").innerHTML = data1.statewise[12].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s13_1").innerHTML = data1.statewise[13].state;
                    document.getElementById("s13_2").innerHTML = data1.statewise[13].confirmed;
                    document.getElementById("s13_3").innerHTML = data1.statewise[13].active;
                    document.getElementById("s13_4").innerHTML = data1.statewise[13].recovered;
                    document.getElementById("s13_5").innerHTML = data1.statewise[13].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s14_1").innerHTML = data1.statewise[14].state;
                    document.getElementById("s14_2").innerHTML = data1.statewise[14].confirmed;
                    document.getElementById("s14_3").innerHTML = data1.statewise[14].active;
                    document.getElementById("s14_4").innerHTML = data1.statewise[14].recovered;
                    document.getElementById("s14_5").innerHTML = data1.statewise[14].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s15_1").innerHTML = data1.statewise[15].state;
                    document.getElementById("s15_2").innerHTML = data1.statewise[15].confirmed;
                    document.getElementById("s15_3").innerHTML = data1.statewise[15].active;
                    document.getElementById("s15_4").innerHTML = data1.statewise[15].recovered;
                    document.getElementById("s15_5").innerHTML = data1.statewise[15].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s16_1").innerHTML = data1.statewise[16].state;
                    document.getElementById("s16_2").innerHTML = data1.statewise[16].confirmed;
                    document.getElementById("s16_3").innerHTML = data1.statewise[16].active;
                    document.getElementById("s16_4").innerHTML = data1.statewise[16].recovered;
                    document.getElementById("s16_5").innerHTML = data1.statewise[16].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s17_1").innerHTML = data1.statewise[17].state;
                    document.getElementById("s17_2").innerHTML = data1.statewise[17].confirmed;
                    document.getElementById("s17_3").innerHTML = data1.statewise[17].active;
                    document.getElementById("s17_4").innerHTML = data1.statewise[17].recovered;
                    document.getElementById("s17_5").innerHTML = data1.statewise[17].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s18_1").innerHTML = data1.statewise[18].state;
                    document.getElementById("s18_2").innerHTML = data1.statewise[18].confirmed;
                    document.getElementById("s18_3").innerHTML = data1.statewise[18].active;
                    document.getElementById("s18_4").innerHTML = data1.statewise[18].recovered;
                    document.getElementById("s18_5").innerHTML = data1.statewise[18].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s19_1").innerHTML = data1.statewise[19].state;
                    document.getElementById("s19_2").innerHTML = data1.statewise[19].confirmed;
                    document.getElementById("s19_3").innerHTML = data1.statewise[19].active;
                    document.getElementById("s19_4").innerHTML = data1.statewise[19].recovered;
                    document.getElementById("s19_5").innerHTML = data1.statewise[19].deaths; 
                })

                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s20_1").innerHTML = data1.statewise[20].state;
                    document.getElementById("s20_2").innerHTML = data1.statewise[20].confirmed;
                    document.getElementById("s20_3").innerHTML = data1.statewise[20].active;
                    document.getElementById("s20_4").innerHTML = data1.statewise[20].recovered;
                    document.getElementById("s20_5").innerHTML = data1.statewise[20].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s21_1").innerHTML = data1.statewise[21].state;
                    document.getElementById("s21_2").innerHTML = data1.statewise[21].confirmed;
                    document.getElementById("s21_3").innerHTML = data1.statewise[21].active;
                    document.getElementById("s21_4").innerHTML = data1.statewise[21].recovered;
                    document.getElementById("s21_5").innerHTML = data1.statewise[21].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s22_1").innerHTML = data1.statewise[22].state;
                    document.getElementById("s22_2").innerHTML = data1.statewise[22].confirmed;
                    document.getElementById("s22_3").innerHTML = data1.statewise[22].active;
                    document.getElementById("s22_4").innerHTML = data1.statewise[22].recovered;
                    document.getElementById("s22_5").innerHTML = data1.statewise[22].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s23_1").innerHTML = data1.statewise[23].state;
                    document.getElementById("s23_2").innerHTML = data1.statewise[23].confirmed;
                    document.getElementById("s23_3").innerHTML = data1.statewise[23].active;
                    document.getElementById("s23_4").innerHTML = data1.statewise[23].recovered;
                    document.getElementById("s23_5").innerHTML = data1.statewise[23].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s24_1").innerHTML = data1.statewise[24].state;
                    document.getElementById("s24_2").innerHTML = data1.statewise[24].confirmed;
                    document.getElementById("s24_3").innerHTML = data1.statewise[24].active;
                    document.getElementById("s24_4").innerHTML = data1.statewise[24].recovered;
                    document.getElementById("s24_5").innerHTML = data1.statewise[24].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s25_1").innerHTML = data1.statewise[25].state;
                    document.getElementById("s25_2").innerHTML = data1.statewise[25].confirmed;
                    document.getElementById("s25_3").innerHTML = data1.statewise[25].active;
                    document.getElementById("s25_4").innerHTML = data1.statewise[25].recovered;
                    document.getElementById("s25_5").innerHTML = data1.statewise[25].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s26_1").innerHTML = data1.statewise[26].state;
                    document.getElementById("s26_2").innerHTML = data1.statewise[26].confirmed;
                    document.getElementById("s26_3").innerHTML = data1.statewise[26].active;
                    document.getElementById("s26_4").innerHTML = data1.statewise[26].recovered;
                    document.getElementById("s26_5").innerHTML = data1.statewise[26].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s27_1").innerHTML = data1.statewise[27].state;
                    document.getElementById("s27_2").innerHTML = data1.statewise[27].confirmed;
                    document.getElementById("s27_3").innerHTML = data1.statewise[27].active;
                    document.getElementById("s27_4").innerHTML = data1.statewise[27].recovered;
                    document.getElementById("s27_5").innerHTML = data1.statewise[27].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s28_1").innerHTML = data1.statewise[28].state;
                    document.getElementById("s28_2").innerHTML = data1.statewise[28].confirmed;
                    document.getElementById("s28_3").innerHTML = data1.statewise[28].active;
                    document.getElementById("s28_4").innerHTML = data1.statewise[28].recovered;
                    document.getElementById("s28_5").innerHTML = data1.statewise[28].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s29_1").innerHTML = data1.statewise[29].state;
                    document.getElementById("s29_2").innerHTML = data1.statewise[29].confirmed;
                    document.getElementById("s29_3").innerHTML = data1.statewise[29].active;
                    document.getElementById("s29_4").innerHTML = data1.statewise[29].recovered;
                    document.getElementById("s29_5").innerHTML = data1.statewise[29].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s30_1").innerHTML = data1.statewise[30].state;
                    document.getElementById("s30_2").innerHTML = data1.statewise[30].confirmed;
                    document.getElementById("s30_3").innerHTML = data1.statewise[30].active;
                    document.getElementById("s30_4").innerHTML = data1.statewise[30].recovered;
                    document.getElementById("s30_5").innerHTML = data1.statewise[30].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s31_1").innerHTML = data1.statewise[31].state;
                    document.getElementById("s31_2").innerHTML = data1.statewise[31].confirmed;
                    document.getElementById("s31_3").innerHTML = data1.statewise[31].active;
                    document.getElementById("s31_4").innerHTML = data1.statewise[31].recovered;
                    document.getElementById("s31_5").innerHTML = data1.statewise[31].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s32_1").innerHTML = data1.statewise[32].state;
                    document.getElementById("s32_2").innerHTML = data1.statewise[32].confirmed;
                    document.getElementById("s32_3").innerHTML = data1.statewise[32].active;
                    document.getElementById("s32_4").innerHTML = data1.statewise[32].recovered;
                    document.getElementById("s32_5").innerHTML = data1.statewise[32].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s33_1").innerHTML = data1.statewise[33].state;
                    document.getElementById("s33_2").innerHTML = data1.statewise[33].confirmed;
                    document.getElementById("s33_3").innerHTML = data1.statewise[33].active;
                    document.getElementById("s33_4").innerHTML = data1.statewise[33].recovered;
                    document.getElementById("s33_5").innerHTML = data1.statewise[33].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s34_1").innerHTML = data1.statewise[34].state;
                    document.getElementById("s34_2").innerHTML = data1.statewise[34].confirmed;
                    document.getElementById("s34_3").innerHTML = data1.statewise[34].active;
                    document.getElementById("s34_4").innerHTML = data1.statewise[34].recovered;
                    document.getElementById("s34_5").innerHTML = data1.statewise[34].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s35_1").innerHTML = data1.statewise[35].state;
                    document.getElementById("s35_2").innerHTML = data1.statewise[35].confirmed;
                    document.getElementById("s35_3").innerHTML = data1.statewise[35].active;
                    document.getElementById("s35_4").innerHTML = data1.statewise[35].recovered;
                    document.getElementById("s35_5").innerHTML = data1.statewise[35].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s36_1").innerHTML = data1.statewise[36].state;
                    document.getElementById("s36_2").innerHTML = data1.statewise[36].confirmed;
                    document.getElementById("s36_3").innerHTML = data1.statewise[36].active;
                    document.getElementById("s36_4").innerHTML = data1.statewise[36].recovered;
                    document.getElementById("s36_5").innerHTML = data1.statewise[36].deaths; 
                })
                fetch("https://api.covid19india.org/data.json")
                .then(one => {
                    return one.json();
                })
                .then(data1 => {
                    document.getElementById("s37_1").innerHTML = data1.statewise[37].state;
                    document.getElementById("s37_2").innerHTML = data1.statewise[37].confirmed;
                    document.getElementById("s37_3").innerHTML = data1.statewise[37].active;
                    document.getElementById("s37_4").innerHTML = data1.statewise[37].recovered;
                    document.getElementById("s37_5").innerHTML = data1.statewise[37].deaths; 
                })
                

    
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
          datasets: [{
              label: "Total Cases",
              data: processedData,
              fill: true,
              backgroundColor: gradientFill,
              borderColor: "blue",
              pointBorderColor: "blue",
              pointBackgroundColor: "lightblue",
              pointHoverBackgroundColor: "lightblue",
              pointHoverBorderColor: "royalblue",
              pointHoverRadius: 5,
              pointHoverBorderWidth: 3
          }]
      },
      options: {
          legend: {
              display: true
          },
          elements: {
              line: {
                  tension: 0
              }
          },
          responsive: true,
          maintainAspectRatio: true,
          title: {
              display: false
          },
          scales: {
              xAxes: [{
                  type: "time",
                  time: {
                      displayFormats: {
                          day: 'MMM D'
                      },
                      tooltipFormat: 'll'
                  },
                  scaleLabel: {
                      display: true,
                      labelString: "Date"
                  }
              }],
              yAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: "Cases"
                  }
              }]
          }
      }
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
          datasets: [{
              label: "Recovered Cases",
              data: processedData,
              fill: true,
              backgroundColor: gradientFill,
              borderColor: "green",
              pointBorderColor: "green",
              pointBackgroundColor: "greenyellow",
              pointHoverBackgroundColor: "greenyellow",
              pointHoverBorderColor: "green",
              pointHoverRadius: 5,
              pointHoverBorderWidth: 3
          }]
      },
      options: {
          legend: {
              display: true
          },
          elements: {
              line: {
                  tension: 0
              }
          },
          responsive: true,
          maintainAspectRatio: true,
          title: {
              display: false
          },
          scales: {
              xAxes: [{
                  type: "time",
                  time: {
                      displayFormats: {
                          day: 'MMM D'
                      },                        
                      tooltipFormat: "ll"
                  },
                  scaleLabel: {
                      display: true,
                      labelString: "Date"
                  }
              }],
              yAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: "Cases"
                  }
              }]
          }
      }
  };

  window.myLine = new Chart(ctx, config);
} //end function


function drawRedChart(processedData, ctxID) {
    var timeFormat = "YYYY-MM-DD";
    //canvas
    var ctx = document.getElementById(ctxID).getContext("2d");
    //gradient
    var gradientFill = ctx.createLinearGradient(0, 0, 0, 350);
  
    var config = {
        type: "line",
        data: {
            datasets: [{
                label: "Daily Cases",
                data: processedData,
                fill: true,
                backgroundColor: gradientFill,
                borderColor: "red",
                pointBorderColor: "darkred",
                pointBackgroundColor: "lightpink",
                pointHoverBackgroundColor: "lightpink",
                pointHoverBorderColor: "darkred",
                pointRadius: 4,               
                pointHoverRadius: 7,
                pointHoverBorderWidth: 3
            }]
        },
        options: {
            legend: {
                display: true
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            responsive: true,
            maintainAspectRatio: true,
            title: {
                display: false
            },
            scales: {
                xAxes: [{
                    type: "time",
                    time: {
                        displayFormats: {
                            day: 'MMM D'
                        },
                        tooltipFormat: 'll'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Date"
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Cases"
                    }
                }]
            }
        }
    };
  
    window.myLine = new Chart(ctx, config);
  } //end funcntion

window.onload = function() {
  var proCasesData = [];
  var proRecoveredData = [];
  var previousDay = {};
  var newcases = []
  fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => {
          data["India"].forEach(day => {
                  if (previousDay["recovered"] >= day["recovered"]) {
                      recovered = previousDay["recovered"];
                  } else {
                      recovered = day["recovered"];
                  }
                  //temporary variable
                  d2 = moment(day["date"], 'YYYY-MM-DD');
                  if (d2.isAfter("2020-1-29")) {
                      //total cases
                      proCasesData.push({
                          x: moment(day["date"], 'YYYY-MM-DD'),
                          y: day["confirmed"]
                      });
                     //recovered
                      proRecoveredData.push({
                          x: moment(day["date"], 'YYYY-MM-DD'),
                          y: recovered,
                      });
                      //new cases
                      newcases.push({
                          x: moment(day["date"], 'YYYY-MM-DD'),
                          y: day["confirmed"] - previousDay["confirmed"],                        
                      });                      
                  }
                  previousDay = day;
              }

          ); //end foreach
         

          drawBlueChart(proCasesData, "total-cases-graph");
          drawGreenChart(proRecoveredData, "recovered-graph");
          drawRedChart(newcases, "new-cases-chart");
        
      }).catch(e => {
          console.log(e)
      });

};

//For Zone Table Search
$(document).ready(function(){
    $("#myZone").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#zoneTab tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

// For Country Search
$(document).ready(function(){
    $("#myCountry").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#countryTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

// For State Search
$(document).ready(function(){
    $("#myState").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#stateTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

$.ajax({
    url: 'https://coronavirus-19-api.herokuapp.com/countries/',
    type: "get",
    dataType: "json",
   
    success: function(data) {
        drawTable(data);
    }
});

function drawTable(data) {
    for (var i = 1; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#myCountry1").append(row); 
    row.append($("<td>" + rowData.country + "</td>"));
    row.append($("<td>" + rowData.cases + "</td>"));
    row.append($("<td>" + rowData.active + "</td>"));
    row.append($("<td>" + rowData.recovered + "</td>"));
    row.append($("<td>" + rowData.deaths + "</td>"));
}





