let login = (login_user) => {
    
    
    let passwd = prompt("enter password:")

    if (passwd == "" || passwd == null){
        alert("no password entered")
    }
    else {
    
        // fetch 
        
        if (login_user == "M")
            location.href = "./M/timetable.html"
    }
    
    //fetch(`./{login_user}`)
    
    //window.location('https://www.google.com');
    //location.href = 'https://www.google.com';
    
}