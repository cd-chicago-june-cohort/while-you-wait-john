function countdown(days) {
    
    for(var i = days; i > 0; i--) {
        var msg1 = "days until my birthday.";
        var msg2 = "";
        if (days > 30) {
            msg2 = "Such a long time... :(";
        } else if (days > 5) {
            msg2 = "Getting closer!";
        } else {
            msg1 = msg1.toUpperCase();
        };
        console.log(i, msg1, msg2)
    }
    console.log("HAPPY BIRTHDAY!!!!!!");
}

countdown(60);