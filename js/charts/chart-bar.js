$(document).ready(function () {

  var ctx = $("#bar-chart");

  var data = {
    labels : ["January", "February", "March", "April", "May","June","July"],
    datasets : [
      {
        label : "Group A",
        data : [50, -90, -70, 50, -60, -50, 100],
        backgroundColor : [
          "#ff6283", "#ff9f40", "#ffcc56", "#4ac0c0", "#36a2eb","#9966ff","#fe6383"
        ],
        borderWidth : 1
      },
      {
        label : "Group B",
        data : [-20, 0, 90, 90, 10, 80, -20],
        backgroundColor : [
          "#cacbcf", "#cacbcf", "#cacbcf", "#cacbcf", "#cacbcf","#cacbcf","#cacbcf"
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
    type : "bar",
    data : data,
    options : options
  });

});