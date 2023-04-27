//Input the the buttons--------------------
let i7 = document.getElementById('i7');
let i8 = document.getElementById('i8');
let i9 = document.getElementById('i9');
let id = document.getElementById('id');
let i4 = document.getElementById('i4');
let i5 = document.getElementById('i5');
let i6 = document.getElementById('i6');
let im = document.getElementById('im');
let i1 = document.getElementById('i1');
let i2 = document.getElementById('i2');
let i3 = document.getElementById('i3');
let is = document.getElementById('is');
let i0 = document.getElementById('i0');
let io = document.getElementById('io');
let ip = document.getElementById('ip');
let result = document.getElementById('result');


//functions to display the entered characters on display textarea--------------------
function inputi0() {
    result.value = result.value + '0';
}
function inputi1() {
    result.value = result.value + '1';
}
function inputi2() {
    result.value = result.value + '2';
}
function inputi3() {
    result.value = result.value + '3';
}
function inputi4() {
    result.value = result.value + '4';
}
function inputi5() {
    result.value = result.value + '5';
}
function inputi6() {
    result.value = result.value + '6';
}
function inputi7() {
    result.value = result.value + '7';
}
function inputi8() {
    result.value = result.value + '8';
}
function inputi9() {
    result.value = result.value + '9';
}
function inputip() {
    result.value = result.value + '+';
}
function inputis() {
    result.value = result.value + '-';
}
function inputim() {
    result.value = result.value + '*';
}
function inputid() {
    result.value = result.value + '/';
}
function inputimo(){
    result.value = result.value/100;
}
function inputio() {
    result.value = result.value + '.';
}

//to backspace--------------------
function inputic() {
    let backspace = result.value;
    backspace = backspace.split('');
    backspace.pop();
    result.value = backspace.join('');
}

//cancels all--------------------
function inputc() {
    // location.reload();
    result.value = '';
}

// gets input--------------------
function inpute() {
    if (result.value != "") {
        string = result.value;
        let m = eval(string)
        result.value = m;
        // console.log(string);
        // console.log(m);
    }else{
        alert('The expression does not exist')
    }
}
function input() {
    console.log(result.value);
}

//code to get input from keyboard--------------------
document.onkeydown = checkKeycode
function checkKeycode(e) {
    var keycode;
    if (window.event) { keycode = window.event.keyCode; }
    else if (e) { keycode = e.which; }
    if ((keycode == 48) || (keycode == 96)) {
        result.value = result.value + '0';
    }
    else if ((keycode == 49) || (keycode == 97)) {
        result.value = result.value + '1';
    }
    else if ((keycode == 50) || (keycode == 98)) {
        result.value = result.value + '2';
    }
    else if ((keycode == 51) || (keycode == 99)) {
        result.value = result.value + '3';
    }
    else if ((keycode == 52) || (keycode == 100)) {
        result.value = result.value + '4';
    }
    else if ((keycode == 53) || (keycode == 101)) {
        result.value = result.value + '5';
    }
    else if ((keycode == 54) || (keycode == 102)) {
        result.value = result.value + '6';
    }
    else if ((keycode == 55) || (keycode == 103)) {
        result.value = result.value + '7';
    }
    else if ((keycode == 56) || (keycode == 104)) {
        result.value = result.value + '8';
    }
    else if ((keycode == 57) || (keycode == 105)) {
        result.value = result.value + '9';
    }
    else if ((keycode == 110) || (keycode == 190)) {
        result.value = result.value + '.';
    }
    else if (keycode == 107) {
        result.value = result.value + '+';
    }
    else if (keycode == 109) {
        result.value = result.value + '-';
    }
    else if (keycode == 106) {
        result.value = result.value + '*';
    }
    else if (keycode == 111) {
        result.value = result.value + '/';
    }
    else if (keycode == 187) {
        inpute();
    }
    else if (keycode == 8) {
        inputic();
    }
}


