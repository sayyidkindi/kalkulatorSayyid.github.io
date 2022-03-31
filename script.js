var tombol = document.querySelector(".container");
var field = document.querySelector("#field");

tombol.addEventListener("click",function(e){

    var tombolClick = e.target;
    var nilaiTombol = tombolClick.innerText;

    if (nilaiTombol == "C") {
        field.value = "";
    }else if (nilaiTombol == "Del") {
        field.value = field.value.slice(0, -1);
    }else if (nilaiTombol == "=") {
        field.value = eval(field.value);
    }else{
    field.value = field.value + nilaiTombol;
}

});