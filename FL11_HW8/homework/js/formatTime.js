function formatTime(time) {
    let minutes = time % 60;
    let hours = ((time - minutes) / 60) % 24;
    let days = ((time - minutes) / 60 - hours) / 24;   
    return (days + " day(s) " + hours + " hour(s) " + minutes + " minute(s)")
}

formatTime(120);
formatTime(59);
formatTime(1441);