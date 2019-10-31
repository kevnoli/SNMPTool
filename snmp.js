window.onload = function () {
    let download = [{y: 0}];
    let upload = [{y: 0}];
    let chart = new CanvasJS.Chart("chartContainer",
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
        intervalType: "second",
    }
});
    let atualizar = function(){
        download.push({ y: 25 - Math.random() * 10});
        upload.push({ y: 10 - Math.random() * 10});
        
       chart.render();
   }

   chart.render();

   let iniciar;

   $("#iniciarBtn").click(function () {
    iniciar = setInterval(function () { atualizar() }, 1000);
});

   $("#pararBtn").click(function () {
    clearInterval(iniciar);
});
}