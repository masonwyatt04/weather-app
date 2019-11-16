

$("#searchbutton").on("click", function() {
    
    $("#search").append(`
    <div class=row>
        <div class=col style="background-color:white;">
            <p>${$("#cityinput").val()}</p>
        </div>
    </div>
    `)

    var city = $("#cityinput").val();
    var apicityurl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=5ee812f36ab709a95afd0d464bdb5a4c"

    $.ajax({
        url: apicityurl,
        method: "GET"
    }).then( function(response) {
        console.log(response);

        var Ftemp = (response.main.temp - 273.15) * 1.8 + 32;

        var Fhigh = (response.main.temp_max - 273.15) * 1.8 + 32;

        var Flow = (response.main.temp_min - 273.15) * 1.8 + 32;        

        $("#todaysforecast").html(`
        <h1>${response.name} (${moment().format('LLL')})</h1>
        <p>Temperature: ${Ftemp} Degrees</p>
        <p>Humidity: ${response.main.humidity} %</p>
        <p>Wind Speed: ${response.wind.speed} mph</p>
        <p>
        High:
        <span class="badge badge-danger">${Fhigh}</span>
        </p>
        <p>
        Low:
        <span class="badge badge-info">${Flow}</span>
        </p>
        `)
    })

    var apiforecasturl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=5ee812f36ab709a95afd0d464bdb5a4c"

    $.ajax({
        url: apiforecasturl,
        method: "GET"
    }).then( function(response) {
        console.log(response);

        var forecasthighdayone = (response.list[0].main.temp_max - 273.15) * 1.8 + 32;
        var forecastlowdayone = (response.list[0].main.temp_min - 273.15) * 1.8 + 32;
        var forecasthighdaytwo = (response.list[1].main.temp_max - 273.15) * 1.8 + 32;
        var forecastlowdaytwo = (response.list[1].main.temp_min - 273.15) * 1.8 + 32;
        var forecasthighdaythree = (response.list[2].main.temp_max - 273.15) * 1.8 + 32;
        var forecastlowdaythree = (response.list[2].main.temp_min - 273.15) * 1.8 + 32;
        var forecasthighdayfour = (response.list[3].main.temp_max - 273.15) * 1.8 + 32;
        var forecastlowdayfour = (response.list[3].main.temp_min - 273.15) * 1.8 + 32;
        var forecasthighdayfive = (response.list[4].main.temp_max - 273.15) * 1.8 + 32;
        var forecastlowdayfive = (response.list[4].main.temp_min - 273.15) * 1.8 + 32;

        $("#dayone").html(`
            <h9>${moment().add(1,'days').format('LL')}</h9>
            <p>High: ${forecasthighdayone}</p>
            <p>Low: ${forecastlowdayone}</p>
            <p>Humidity: ${response.list[0].main.humidity}%</p>
        `)

        $("#daytwo").html(`
        <h9>${moment().add(2,'days').format('LL')}</h9>
        <p>High: ${forecasthighdaytwo}</p>
        <p>Low: ${forecastlowdaytwo}</p>
        <p>Humidity: ${response.list[1].main.humidity}%</p>
        `)

        $("#daythree").html(`
        <h9>${moment().add(3,'days').format('LL')}</h9>
        <p>High: ${forecasthighdaythree}</p>
        <p>Low: ${forecastlowdaythree}</p>
        <p>Humidity: ${response.list[2].main.humidity}%</p>
        `)

        $("#dayfour").html(`
        <h9>${moment().add(4,'days').format('LL')}</h9>
        <p>High: ${forecasthighdayfour}</p>
        <p>Low: ${forecastlowdayfour}</p>
        <p>Humidity: ${response.list[3].main.humidity}%</p>
        `)

        $("#dayfive").html(`
        <h9>${moment().add(5,'days').format('LL')}</h9>
        <p>High: ${forecasthighdayfive}</p>
        <p>Low: ${forecastlowdayfive}</p>
        <p>Humidity: ${response.list[4].main.humidity}%</p>
        `)
    })

})

