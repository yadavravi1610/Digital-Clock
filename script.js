setInterval(showTime,1000);

function showTime()
{
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    session = "AM";

    if(hours >12)
    {
        hours -= 12;
        session = "PM";
    }
    // if(hours == 0)
    // {
    //     session = "AM";
    // }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let currentTime = `${hours}:${minutes}:${seconds} ${session}` ;

    document.getElementById('clock').innerHTML = currentTime;
}