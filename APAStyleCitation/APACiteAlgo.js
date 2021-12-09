function webPageCite(){
    // Obtaining the data from the inputs
    var author = document.getElementById("input1").value;
    var date = document.getElementById("input2").value;
    var title = document.getElementById("input3").value;
    var recoveryDate = document.getElementById("input4").value;
    var publisher = document.getElementById("input5").value;  
    var url = document.getElementById("input6").value;

    // If all the inputs are bigger tha cero the cite is retrieved
    if(author.length > 0 &&
       date.length > 0 &&
       title.length > 0 &&
       recoveryDate.length > 0 &&
       publisher.length > 0 &&
       url.length > 0 ){
        document.getElementById("output1").innerHTML = (author + "(" + date + "). " + title + ". " + recoveryDate + ", from " + publisher + ". Web Site: " + url);
    }else{
        document.getElementById("output1").innerHTML = "You're missing one or more inputs.";
    }
}