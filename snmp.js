window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        data: [
        {
            type: "spline",
            dataPoints: [
            { y: 0}
            ],
            dataPoints: [
            { y: 0}
            ]
        }
        ],
         axisX:{
   minimum: 0,
   interval: 1,
   intervalType: "second",
 },
    });
    chart.render(); 

    $("#iniciarBtn").click(function () {

    var length = chart.options.data[0].dataPoints.length;
    chart.options.data[0].dataPoints.push({ y: 25 - Math.random() * 10});
    chart.render();

    });

    $("#pararBtn").click(function () {

    var length = chart.options.data[0].dataPoints.length;
    chart.options.data[0].dataPoints[length-1].y = 15 - Math.random() * 10;
    chart.render();

    });
}