// function for calculation
function add(){
    let x = document.getElementById("textval").value; 
    let z = /[a-zA-Z@#%^&_`]/g; 
    if (x == ""){
        document.getElementById("textval").value = "err";
    }
    else if (z.test(x)){
        document.getElementById("textval").value = "undefined";
    }
    else{
        let y = eval(x)
        document.getElementById("textval").value = y;
    }
}
function display(val){
    document.getElementById("textval").value += val;
}

function clr(){
    document.getElementById("textval").value = "";
}
