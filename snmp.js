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
    },
    axisY:{
        minimum: 0,
    }
});

contador = 0;
    let atualizar = function(){
        let enviar={
            ip: $('#ip').val(),
            comm:$('#comm').val(),
        }
        $.ajax({
            type: "GET",
            url: 'snmp.php',
            data: enviar,
            success: function(response)
            {
                response = JSON.parse(response);

                console.log(response);

                if(download.length>21){
                    chart.options.axisX.minimum++;
                    download.splice(0,1);
                    upload.splice(0,1);
                    chart.render();
                }

                download.push({x:contador, y: parseFloat(response.down)}),
                upload.push({x:contador, y:parseFloat(response.up)})
                contador++;
                chart.render();
           }
       });
   }

   chart.render();

   let iniciar;

   $("#iniciarBtn").click(function () {
    iniciar = setInterval(function () { atualizar() }, 1000);
});

   $("#pararBtn").click(function () {
    clearInterval(iniciar);
});

$("#limparBtn").click(function () {

    chart.options.axisX.minimum = 0;
    contador = 0;
    download.splice(0,download.length);
    upload.splice(0,upload.length);

    chart.render();
});
}
