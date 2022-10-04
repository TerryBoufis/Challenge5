
$(document).ready(function () {
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    
    var currentHour = new Date().getHours()
    // var currentHour = 12

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

hours.forEach(function (hour) {
    var row = document.createElement('div')
    row.classList.add('row', 'time-block')
    row.innerHTML = `<div class="col-md-1 hour">${getTimeLabel(hour)}</div>
    <textarea class="col-md-10 description ${getClass(hour)}">${localStorage.getItem(hour)|| ''}</textarea>
    <button class="btn saveBtn col-md-1" data-hour=${hour}><i class="fas fa-save"></i></button>`
    document.querySelector('.container').append(row)
});

function getClass(hour) {
    if (currentHour == hour) return 'present';
    else if (currentHour > hour) return 'past';
    else return 'future'
}

var buttonsArray = document.querySelectorAll('.btn')
buttonsArray.forEach(function(button){
    button.addEventListener("click", function(event){
        var hour = event.currentTarget.dataset.hour
        var text = event.currentTarget.previousElementSibling.value
        localStorage.setItem(hour,text)
    })
})



function getTimeLabel(hour) {
    switch (hour) {
        case 9:
            return "9 AM"
        case 10:
            return "10 AM"
        case 11:
            return "11 AM"
        case 12:
            return "12 PM"
        case 13:
            return "1 PM"
        case 14:
            return "2 PM"
        case 15:
            return "3 PM"
        case 16:
            return "4 PM"
        case 17:
            return "5 PM"


    }
}
})