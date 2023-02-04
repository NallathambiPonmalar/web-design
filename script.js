function displaytime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let sessions = "AM";
    if (hours > 12) {
        hours -= 12;
        sessions = "PM";  
    }

    hours = hours >= 10 ? hours : "0"+ hours;
    minutes = minutes >= 10 ? minutes : "0"+ minutes;
    seconds = seconds >= 10 ? seconds : "0"+ seconds;
    const time = `${hours}:${minutes}:${seconds} ${sessions}`;
    document.getElementById("time").innerText = time;
    setTimeout(displaytime,1000)
}

    displaytime();