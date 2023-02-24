let degree = document.getElementById("degree");
let result = document.getElementById("result");
let buttom = document.getElementById("button");

function convert(){
    if(!degree.value)
    {
        alert("please  enter degree");
        return false;
    }

    if(degree.value)
    {
        let data = ((degree.value-32)*5)/9;

        result.value= data + " 'C";
        degree.value = " ";
        return true;
    }
}