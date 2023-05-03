$(function(){
    $.ajax({ 
            url: '/request',
            type: 'POST',
            cache: false, 
            data: {}, 
            success: function(data){
                let city = data.city;
                let temperature = data.temperature;
                let divToModify = document.querySelector("#output")
                divToModify.textContent = "";
                let header = document.createElement("h2");
                header.textContent = city;
                let body = document.createElement("p");
                body.textContent = temperature;
                divToModify.appendChild(header);
                divToModify.appendChild(body);
            }
            , error: function(jqXHR, textStatus, err){
                document.querySelector("#output").textContent = "ERROR: See console";
                console.log('ERROR: text status '+textStatus+', err '+err)
            }
        })
    }); 