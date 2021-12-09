function convertTemp(){
    // Obtaining the inputs given
    tempToConvert = document.getElementById("input_id1").value;
    currentSystem = document.getElementById("input_id2").value;
    systemToConvert = document.getElementById("input_id4").value;

    // For equal temperature systems
    if(currentSystem == systemToConvert){
        document.getElementById("input_id3").value = tempToConvert;
    }else if(currentSystem == "C" && systemToConvert == "F"){
        // From Celsius to Fahrenheit
        document.getElementById("input_id3").value = (9/5)*(tempToConvert) + 32;
    }else if(currentSystem == "C" && systemToConvert == "K"){
        // From Celsius to Kelvin
        document.getElementById("input_id3").value = 273.15 + 1*tempToConvert;
    }else if(currentSystem == "F" && systemToConvert == "C"){
        // From Fahrenheit to Celsius
        document.getElementById("input_id3").value = (5/9)*(tempToConvert-32);
    }else if(currentSystem == "F" && systemToConvert == "K"){
        // From Fahrenheit to Kelvin
        document.getElementById("input_id3").value = (1*tempToConvert - 32)*(5/9) + 273.15;
    }else if(currentSystem == "K" && systemToConvert == "C"){
        // From Kelvin to Celsius
        document.getElementById("input_id3").value = tempToConvert - 273.15;
    }else{
        document.getElementById("input_id3").value = "Error"
    }

}