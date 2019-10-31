window.onload = function () {

    var download = [{y: 0}];
    var upload = [{y: 0}];
    var chart = new CanvasJS.Chart("chartContainer",
    {
      data: [
      { 
        type: "line",
        showInLegend: true,
        name: "Download",
        dataPoints: download
    },
    {               
        type: "line",
        showInLegend: true,
        name: "Upload" ,
        dataPoints: upload
    }],
    axisX:{
     minimum: 0,
     interval: 1,
     intervalType: "second"
 }
});

    chart.render();

    $("#iniciarBtn").click(function () {
        download.push({ y: 25 - Math.random() * 10});
        upload.push({ y: 10 - Math.random() * 10});
        chart.render();

    });

    $("#pararBtn").click(function () {
//TODO
    });
}