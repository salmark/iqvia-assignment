$(document).ready(function () {

    var ctx = $("#line-chartcanvas");
  
    var data = {
      labels : ["January", "February", "March", "April", "May","June","July"],
      datasets : [
        {
          label : "Group A",
          data : [-70, -10, -60, 30, 60, 50, 70],
          backgroundColor : [
            "rgba(225,0,0,0)"
          ],
          borderColor : [
            "#ff99af"
          ],
          borderWidth : 1
        },
        {
          label : "Group B",
          data : [-90, 70, -90, -20, 90, 50, -30],
          backgroundColor : [
            "rgba(225,0,0,0)"
          ],
          borderColor : [
            "#84c7f4"
          ],
          borderWidth : 1
        }
      ]
    };
  
    var options = {
      title : {
        display : false,
      },
      legend : {
        display : true
      },
      scales : {
        yAxes : [{
          ticks : {
            max : 100,
            min : -100
          }
        }]
      }
    };
  
    var chart = new Chart( ctx, {
      type : "line",
      data : data,
      options : options
    });
  
  });

