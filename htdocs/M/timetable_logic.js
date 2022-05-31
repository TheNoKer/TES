var _to_do;
var _previous_item_id = "cheats";
var _point_to_do;
var _previous_point;
var _white = "#FFFFFF";
var _selected = "#123456";
var _current_id = 0;



let load = () => {
    _previous_point = document.getElementById("hidden")
    
    // fetch get all data of day

    let date = new Date()
    
    //console.log(date)
    //correct: 
    //console.log(date.toLocaleDateString())
    
    //fetch("./api/tes/id")
    //.then(response => response.json)
    //.then(data => _current_id = data.value)
    //.catch(ex => console.log(ex))
}

let loadEntries= (date) => {

    //fetch("./api/tes/d=" + date)
      //  .then(response => response.json)
        //.then(data => {
          //  for (let d of data){
            //    console.log(data)
              //  addPoint(data)
    //        }
    //})


}

let selectAction = (to_do_local, item) =>{
    
    let previous_id = _previous_item_id
    
    _to_do = to_do_local;
    console.log(_to_do)
    let item_id = item.id
    //document.getElementById(item_id).style.backgroundColor = _selected
    //document.getElementById(previous_id).style.backgroundColor = _white;
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
    document.getElementById("wholeTable").style.display = "none";
    //document.getElementsByTagName("body")[0].style.display = "none";
    document.getElementById("newItem").style.display = "block";
    
    if (document.width < 500){
            document.getElementsByTagName("footer")[0].style.display = "none";
        }
    
    _to_do = "+"
}

let addItem = () => {
    //console.log(document.getElementById("new_input_time").value)
    let time = document.getElementById("new_input_time").value
    //console.log(document.getElementById("new_input_text").value)
    let text = document.getElementById("new_input_text").value
    
    document.getElementById("newItem").style.display = "none";
    document.getElementById("wholeTable").style.display = "block";
    if (document.width < 500){
        document.getElementsByTagName("footer")[0].style.display = "block";
    }
    
    let to_send = {
        id: ++_current_id,
        time: time,
        text: text
    }
    
    console.log(to_send)
    addPoint(to_send)
    
    // fetch post to_send 
    // id 
    
    //fetch ("./api/tes", {
      //  METHOD: "POST",
        //headers: {"content-Type= application/json"},
        //body: JSON.stringify(to_send)
    //})
    //.catch(ex => console.log(ex))
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
    //item.style.backgroundColor = "red"
    //item.style.borderColor = _white;
    item.style.border = "thick solid #0000FF"
    
    _previous_point.style.border = "none"
    
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
        //_point_to_do.parentNode.style.backgroundColor = transparent;
    }
    
    // fetch delete id
    
    //fetch("./api/tes/"+id, {
      //  METHOD: "DELETE"
    //})
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
    
    
}

let submitChanges = () => {
    let item = {
            time: _point_to_do.getElementsByTagName("*")[4].innerText,
            text: _point_to_do.getElementsByTagName("*")[7].innerText
        }
    console.log(item.time)
    console.log(item.text)
    
    // fetch put id time & text (null if necesary)

    
}