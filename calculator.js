
let firstnumber
let lastnumber

function addition(){

    /*Doing this will allow the output to be black if previously was red*/
    document.getElementById("output").style.color = "black";

    /*Get the values from user input*/
    firstnumber = document.getElementById("firstnumber").value;
    lastnumber = document.getElementById("lastnumber").value;

    /*convert user inputs to Numbers and add*/
    let sum = Number(firstnumber) + Number(lastnumber);

    /*Negative number converts to red*/
    if (sum < 0){
        document.getElementById("output").style.color = "red";
    }

    /*Display sum to output as a String*/
    document.getElementById("output").innerHTML = String(sum);
}

function subtraction(){

    /*Doing this will allow the output to be black if previously was red*/
    document.getElementById("output").style.color = "black" ;

    /*Get the values from user input*/
    firstnumber = document.getElementById("firstnumber").value;
    lastnumber = document.getElementById("lastnumber").value;

    /*convert user inputs to Numbers and subtract*/
    let sum = Number(firstnumber) - Number(lastnumber);

    /*Negative number converts to red*/
    if (sum < 0){
        document.getElementById("output").style.color = "red";
    }

    /*Display sum to output as a String*/
    document.getElementById("output").innerHTML = String(sum);
}

function multiplication(){

    /*Doing this will allow the output to be black if previously was red*/
    document.getElementById("output").style.color = "black" ;

    /*Get the values from user input*/
    firstnumber = document.getElementById("firstnumber").value;
    lastnumber = document.getElementById("lastnumber").value;

    /*convert user inputs to Numbers and multiply*/
    let sum = Number(firstnumber) * Number(lastnumber);

    /*Negative number converts to red*/
    if (sum < 0){
        document.getElementById("output").style.color = "red";
    }

    /*Display sum to output as a String*/
    document.getElementById("output").innerHTML = String(sum);
}

function division(){

    /*Doing this will allow the output to be black if previously was red*/
    document.getElementById("output").style.color = "black";

    /*Get the values from user input*/
    firstnumber = document.getElementById("firstnumber").value;
    lastnumber = document.getElementById("lastnumber").value;

    /*convert user inputs to Numbers and divide*/
    let sum = Number(firstnumber) / Number(lastnumber);

    /*Negative number converts to red*/
    if (sum < 0){
        document.getElementById("output").style.color = "red";
    }

    /*Display sum to output as a String*/
    document.getElementById("output").innerHTML = String(sum);
}

function power(){

    /*Doing this will allow the output to be black if previously was red*/
    document.getElementById("output").style.color = "black";

    /*Get the values from user input*/
    firstnumber = document.getElementById("firstnumber").value;
    lastnumber = document.getElementById("lastnumber").value;

    let sum = 1

    /*Considers the possibility of the power to a negative number*/
    if(lastnumber < 0){
        let n = (lastnumber * -1);
        for (let i = 0; i < n; i++){
            sum *= firstnumber;
        }
        sum = 1 / sum;
    }
    else {
        for (let i = 0; i < lastnumber; i++) {
            sum *= firstnumber;
        }
    }

    /*Negative number converts to red*/
    if (sum < 0){
        document.getElementById("output").style.color = "red";
    }

    /*Display sum to output as a String*/
    document.getElementById("output").innerHTML = String(sum);
}

function cleardata(){
    document.getElementById("firstnumber").value = "";
    document.getElementById("lastnumber").value = "";
    document.getElementById("output").innerHTML = "";
}

