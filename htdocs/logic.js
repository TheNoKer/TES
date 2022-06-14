let _PASSWD = "todo";

let login = (login_user) => {
    
    
    let passwd = prompt("enter password:")

    if (passwd == "" || passwd == null){
        alert("no password entered")
    }
    else if (passwd ==_PASSWD){
    
        // fetch 
        
        if (login_user == "M")
            location.href = "./M/timetable.html"
        else if (login_user == "N")
            location.href = "./N/timetable.html"
    }
    else {
        alert("wrong password entered")

    }
    
    //fetch(`./{login_user}`)
    
    //window.location('https://www.google.com');
    //location.href = 'https://www.google.com';
    
}