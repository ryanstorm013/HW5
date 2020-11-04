$(document).ready(function () {

    console.log(parseInt(moment().format('H')))
    
    const itsTime = moment().format('dddd, MMMM Do');
    $("#currentDay").text(itsTime);
    $("span").attr("style", "width: 80px");
    $("button").text("Submit");

    const times = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    
    times.forEach(time => {
        const check = window.localStorage.getItem(time);
        const hourGiven = moment().hour();
        const timeId = "#" + time;

        if (hourGiven > time) {
            $(timeId).addClass("bg-secondary text-light");
            $(timeId).attr("disabled", true);
        }
        else if (hourGiven === time) {
            $(timeId).addClass("bg-danger text-light");
        }
        else {
            $(timeId).addClass("bg-success text-light");
        }

        if (check === null) 
            window.localStorage.setItem(time, "");
        
        if (check.length > 0)
            $(timeId).attr("value", window.localStorage.getItem(time));
        
    });

    $("form").on("submit", function (e) {
        e.preventDefault();

        const time = e.target.querySelector("input").getAttribute("id");
        const text = e.target.querySelector("input").value;

        window.localStorage.setItem(time, text);
    });
});