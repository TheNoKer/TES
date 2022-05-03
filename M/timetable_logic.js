var _to_do;
var _previous_item_id = "cheats";
var _point_to_do;
var _previous_point;
var _white = "#FFFFFF";
var _selected = "#123456";

let load = () => {
    _previous_point = document.getElementById("hidden")

}

let selectAction = (to_do_local, item) =>{
    
    let previous_id = _previous_item_id
    
    _to_do = to_do_local;
    console.log(_to_do)
    let item_id = item.id
    document.getElementById(item_id).style.backgroundColor = _selected
    document.getElementById(previous_id).style.backgroundColor = _white;
    _previous_item_id = item_id
    //console.log(_previous_item_id)

    //setAllButtons()
    
    
}

function setAllButtons () {
    let items = document.getElementsByTagName("button").setAttribute("style", "background-color: red;")
    
    for (var item in items) {
        //console.log(item)
        item.style.backgroundColor = "red"
    }
}



let addNewPoint = () => {
    document.getElementById("newItem").style.display = "block";
    document.getElementById("wholeTable").style.display = "none";
    
    _to_do = "+"
}

let addItem = () => {
    //console.log(document.getElementById("new_input_time").value)
    let time = document.getElementById("new_input_time").value
    //console.log(document.getElementById("new_input_text").value)
    let text = document.getElementById("new_input_text").value
    
    document.getElementById("newItem").style.display = "none";
    document.getElementById("wholeTable").style.display = "block";
    
    let to_send = {
        time: time,
        text: text
    }
    
    console.log(to_send)
    addPoint(to_send)
} 

function addPoint(to_send) {
    
    // fetch 
    
    let html = "<li class=\"entry_list\"" +
                "onclick=\"selectEntry(this)\"" +                     "value=\"1\">"  +
                    "<table class=\"table_list\">" +
                        "<tr>" +
                            "<td>TIME:</td>" +
                            "<td>"+to_send.time+"</td>" +
                        "</tr>" + 
                        "<tr>" +
                            "<td>TO DO:</td>" +
                            "<td>"+to_send.text+"</td>" +
                        "</tr>" +
                    "</table>" + 
                "</li>"

    let li = document.createElement("li");
    li.innerHTML = html
    document.getElementById("point_list")
        .appendChild(li)
}

let selectEntry = (item) =>{
    //console.log(item.value)
    _point_to_do = item;

    //console.log(items.get(4))
    //console.log(items.item(4).innerText)
    item.style.backgroundColor = "red"
    
    _previous_point.style.backgroundColor = "blue"
    
    //console.log(_point_to_do)
    //console.log(_previous_point.value)
    
    _previous_point = item;
    
}

// add new point
// delete point 

let deletePoint = () => {
    //console.log(_point_to_do.id)
    
    if (_point_to_do == null)
        alert("no_point_selected")
    else {
        _point_to_do.parentNode.removeChild(_point_to_do)
        _point_to_do.style.backgroundColor = _white;
    }
    
    // fetch
}

let editPoint = () => {
    
    if (_point_to_do == null)
        alert("no_point_selected")
    else {
        let item = {
            time: _point_to_do.getElementsByTagName("*")[4].innerText,
            text: _point_to_do.getElementsByTagName("*")[7].innerText
        }
    
        //console.log(item.time)
        //console.log(item.text)
        
        // input_time
        // input_text
        
        document.getElementById("input_time").value = item.time
        document.getElementById("input_text").value = item.text
    
    }
    
    // fetch
    
}