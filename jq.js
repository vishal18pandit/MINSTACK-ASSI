
let callAjaxUsingJquery = () => {
    let cityName = $("#textid").val() || "pune";

    let url =
        "https://api.openweathermap.org/data/2.5/weather?appid=ed04108faf1ff7aca39c8049ae5db9ad&units=metric&q=" +
        cityName;

    $.ajax(url).done((data1) => {
        $("#parent :nth-child(1)")
            .clone(true)
            .html(data1.name + " " + data1.main.temp_max)
            .insertBefore($("#parent :nth-child(1)"));

        // clean the box
        $("#textid").val("");
    });
};