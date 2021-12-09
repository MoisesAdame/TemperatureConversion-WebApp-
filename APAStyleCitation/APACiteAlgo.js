// Function that retrieves the cite of a web page given some inputs
function webPageCite(){
    // Obtaining the data from the inputs
    var author = document.getElementById("input1").value;
    var date = document.getElementById("input2").value;
    var title = document.getElementById("input3").value;
    var edition = document.getElementById("input4").value;
    var publisherLocation = document.getElementById("input5").value;  
    var publisher = document.getElementById("input6").value;

    // If all the inputs are bigger tha cero the cite is retrieved
    if(author.length > 0 &&
       date.length > 0 &&
       title.length > 0 &&
       edition.length > 0 &&
       publisherLocation.length > 0 &&
       publisher.length > 0 ){
        document.getElementById("output1").innerHTML = (author + "(" + date + "). " + title + ". " + edition + ", from " + publisherLocation + ". Web Site: " + publisher);
    }else{
        document.getElementById("output1").innerHTML = "You're missing one or more inputs.";
    }
}

// Function that retrieves the cite of a book given some inputs
function bookCite(){
    // Obtaining the data from the inputs
    var author = document.getElementById("input1").value;
    var date = document.getElementById("input2").value;
    var title = document.getElementById("input3").value;
    var edition = document.getElementById("input4").value;
    var publisherLocation = document.getElementById("input5").value;  
    var publisher = document.getElementById("input6").value;

    // If all the inputs are bigger tha cero the cite is retrieved
    if(author.length > 0 &&
       date.length > 0 &&
       title.length > 0 &&
       edition.length > 0 &&
       publisherLocation.length > 0 &&
       publisher.length > 0 ){
        if(edition == 1){
            edition += "st. ed.";
        }else if(edition == 2){
            edition += "nd. ed.";
        }else if(edition == 3){
            edition += "rd. ed.";
        }else{
            edition += "th. ed.";
        }

        document.getElementById("output1").innerHTML = (author + "(" + date + "). " + title + " (" + edition + "). " + publisherLocation + ": " + publisher + ".");
    }else{
        document.getElementById("output1").innerHTML = "You're missing one or more inputs.";
    }
}