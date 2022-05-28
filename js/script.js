function ins(num) {
    var inp1 = document.getElementById("input1")
    var inp2 = document.getElementById("input2")
    var inp3 = document.getElementById("input3")





    if (inp2.innerText == "") {
        inp1.innerText += num;
    } else {
        inp3.innerText += num;
    }
}


window.addEventListener('keydown', mykey);



function mykey(event) {
    var inp1 = document.getElementById("input1");
    var inp2 = document.getElementById("input2");
    var inp3 = document.getElementById("input3");
    var x = event.key;


    var inpu1 = document.getElementById("input1").innerText;
    var inpu2 = document.getElementById("input2").innerText;
    var inpu3 = document.getElementById("input3").innerText;
    if (x == "." && document.getElementById("input2").innerText == "") {
        document.getElementById("input1").innerText = inpu1.substring(0, inpu1.length - 1);
    } else if (x == "." && document.getElementById("input3").innerText == "") {
        document.getElementById("input2").innerText = inpu2.substring(0, inpu2.length - 1);
    } else if (x == "." && inpu1 != "" && inpu2 != "") {
        document.getElementById("input3").innerText = inpu3.substring(0, inpu3.length - 1);
    }




    if (inp1.innerText != "" && x == "/" || x == "*" || x == "-" || x == "+") {
        inp2.innerText = x;
    } else if (x <= 9 && inp2.innerText === "") {
        inp1.innerText += x;
    } else if (inp2.innerText != "" && x >= 0) {
        inp3.innerText += x;
    }

    let add = '+';
    let sub = '-';
    let mul = '*';
    let div = '/';



    if (x == "Enter" && inp2.innerText == add) {
        try {
            inp1.innerText = (Number(inp1.innerText)) + (Number(inp3.innerText));
            inp2.innerText = "";
            inp3.innerText = "";

        } catch (error) {
            inp2.innerText = 'Syantax Error';

        }
    }
    if (x == "Enter" && inp2.innerText == sub) {
        try {
            inp1.innerText = (Number(inp1.innerText)) - (Number(inp3.innerText));
            inp2.innerText = "";
            inp3.innerText = "";

        } catch (error) {
            inp2.innerText = 'Syantax Error';

        }
    }
    if (x == "Enter" && inp2.innerText == mul) {
        try {
            inp1.innerText = (Number(inp1.innerText)) * (Number(inp3.innerText));
            inp2.innerText = "";
            inp3.innerText = "";

        } catch (error) {
            inp2.innerText = 'Syantax Error';

        }
    }
    if (x == "Enter" && inp2.innerText == div) {
        try {
            inp1.innerText = (Number(inp1.innerText)) / (Number(inp3.innerText));
            inp2.innerText = "";
            inp3.innerText = "";

        } catch (error) {
            inp2.innerText = 'Syantax Error';

        }
    }



}


function equal() {
    var inp1 = document.getElementById("input1");
    var inp2 = document.getElementById("input2");
    var inp3 = document.getElementById("input3");
    let add = '+';
    let sub = '-';
    let mul = 'x';
    let div = '÷';


    if (inp2.innerText == add) {
        try {
            inp1.innerText = (Number(inp1.innerText)) + (Number(inp3.innerText));
            inp2.innerText = "";
            inp3.innerText = "";

        } catch (error) {
            inp2.innerText = 'Syantax Error';

        }
    }
    if (inp2.innerText == sub) {
        try {
            inp1.innerText = (Number(inp1.innerText)) - (Number(inp3.innerText));
            inp2.innerText = "";
            inp3.innerText = "";

        } catch (error) {
            inp2.innerText = 'Syantax Error';

        }
    }
    if (inp2.innerText == mul) {
        try {
            inp1.innerText = (Number(inp1.innerText)) * (Number(inp3.innerText));
            inp2.innerText = "";
            inp3.innerText = "";

        } catch (error) {
            inp2.innerText = 'Syantax Error';

        }
    }
    if (inp2.innerText == div) {
        try {
            inp1.innerText = (Number(inp1.innerText)) / (Number(inp3.innerText));
            inp2.innerText = "";
            inp3.innerText = "";

        } catch (error) {
            inp2.innerText = 'Syantax Error';

        }
    }

}

function divide(div) {
    var add = '+';
    var sub = '-';
    var mul = 'x';
    var div = '÷';
    var inp1 = document.getElementById("input1");
    var inp2 = document.getElementById("input2");
    var inp3 = document.getElementById("input3");

    if (inp3.innerText != "" && inp2.innerText === div) {

        inp1.innerText = (Number(inp1.innerText)) / (Number(inp3.innerText));
        inp2.innerText = div;
        inp3.innerText = "";
    }
    if (inp3.innerText != "" && inp2.innerText === mul) {

        inp1.innerText = (Number(inp1.innerText)) * (Number(inp3.innerText));
        inp2.innerText = div;
        inp3.innerText = "";
    }
    if (inp3.innerText != "" && inp2.innerText === sub) {

        inp1.innerText = (Number(inp1.innerText)) - (Number(inp3.innerText));
        inp2.innerText = div;
        inp3.innerText = "";
    }
    if (inp3.innerText != "" && inp2.innerText === add) {

        inp1.innerText = (Number(inp1.innerText)) + (Number(inp3.innerText));
        inp2.innerText = div;
        inp3.innerText = "";
    }
    if (inp1.innerText != "") {
        inp2.innerText = div;
    } else {
        alert('Enter a number frist')
    }
}

function multiplay(mul) {
    var add = '+';
    var sub = '-';
    var mul = 'x';
    var div = '÷';
    var inp1 = document.getElementById("input1");
    var inp2 = document.getElementById("input2");
    var inp3 = document.getElementById("input3");
    if (inp3.innerText != "" && inp2.innerText === div) {

        inp1.innerText = (Number(inp1.innerText)) / (Number(inp3.innerText));
        inp2.innerText = mul;
        inp3.innerText = "";
    }
    if (inp3.innerText != "" && inp2.innerText === mul) {

        inp1.innerText = (Number(inp1.innerText)) * (Number(inp3.innerText));
        inp2.innerText = mul;
        inp3.innerText = "";
    }
    if (inp3.innerText != "" && inp2.innerText === sub) {

        inp1.innerText = (Number(inp1.innerText)) - (Number(inp3.innerText));
        inp2.innerText = mul;
        inp3.innerText = "";
    }
    if (inp3.innerText != "" && inp2.innerText === add) {

        inp1.innerText = (Number(inp1.innerText)) + (Number(inp3.innerText));
        inp2.innerText = mul;
        inp3.innerText = "";
    }
    if (inp1.innerText != "") {
        inp2.innerText = mul;
    } else {
        alert('Enter a number frist')
    }
}

function subtract(sub) {
    var add = '+';
    var sub = '-';
    var mul = 'x';
    var div = '÷';
    var inp1 = document.getElementById("input1");
    var inp2 = document.getElementById("input2");
    var inp3 = document.getElementById("input3");

    if (inp3.innerText != "" && inp2.innerText === div) {

        inp1.innerText = (Number(inp1.innerText)) / (Number(inp3.innerText));
        inp2.innerText = sub;
        inp3.innerText = "";
    }
    if (inp3.innerText != "" && inp2.innerText === mul) {

        inp1.innerText = (Number(inp1.innerText)) * (Number(inp3.innerText));
        inp2.innerText = sub;
        inp3.innerText = "";
    }
    if (inp3.innerText != "" && inp2.innerText === sub) {

        inp1.innerText = (Number(inp1.innerText)) - (Number(inp3.innerText));
        inp2.innerText = sub;
        inp3.innerText = "";
    }
    if (inp3.innerText != "" && inp2.innerText === add) {

        inp1.innerText = (Number(inp1.innerText)) + (Number(inp3.innerText));
        inp2.innerText = sub;
        inp3.innerText = "";
    }
    if (inp1.innerText != "") {
        inp2.innerText = sub;
    } else {
        alert('Enter a number frist')
    }
}

function addition(add) {
    var add = '+';
    var sub = '-';
    var mul = 'x';
    var div = '÷';

    var inp1 = document.getElementById("input1");
    var inp2 = document.getElementById("input2");
    var inp3 = document.getElementById("input3");

    if (inp3.innerText != "" && inp2.innerText === div) {

        inp1.innerText = (Number(inp1.innerText)) / (Number(inp3.innerText));
        inp2.innerText = add;
        inp3.innerText = "";
    }
    if (inp3.innerText != "" && inp2.innerText === mul) {

        inp1.innerText = (Number(inp1.innerText)) * (Number(inp3.innerText));
        inp2.innerText = add;
        inp3.innerText = "";
    }
    if (inp3.innerText != "" && inp2.innerText === sub) {

        inp1.innerText = (Number(inp1.innerText)) - (Number(inp3.innerText));
        inp2.innerText = add;
        inp3.innerText = "";
    }
    if (inp3.innerText != "" && inp2.innerText === add) {

        inp1.innerText = (Number(inp1.innerText)) + (Number(inp3.innerText));
        inp2.innerText = add;
        inp3.innerText = "";
    }
    if (inp1.innerText != "") {
        inp2.innerText = add;
    } else {
        alert('Enter a number frist')
    }
}



function clean() {
    var inp1 = document.getElementById("input1");
    var inp2 = document.getElementById("input2");
    var inp3 = document.getElementById("input3");
    inp1.innerText = '';
    inp2.innerText = '';
    inp3.innerText = '';
}


function zero() {
    var inp1 = document.getElementById("input1");
    var inp2 = document.getElementById("input2");
    var inp3 = document.getElementById("input3");
    if (inp2.innerText != "") {
        inp3.innerText += '0'
    } else if (inp1.innerText != "") {
        inp1.innerText += '0';
    } else {
        alert('Bhai Number Daloo Pehle Koi...')
    }
}


function back1() {
    var inp1 = document.getElementById("input1").innerText;
    var inp2 = document.getElementById("input2").innerText;
    var inp3 = document.getElementById("input3").innerText;
    if (document.getElementById("input2").innerText == "") {
        document.getElementById("input1").innerText = inp1.substring(0, inp1.length - 1);
    } else if (document.getElementById("input3").innerText == "") {
        document.getElementById("input2").innerText = inp2.substring(0, inp2.length - 1);
    } else {
        document.getElementById("input3").innerText = inp3.substring(0, inp3.length - 1);
    }




}








function tpage() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'inline';
    document.getElementById('page3').style.display = 'none';
}

function cpage() {
    document.getElementById('page1').style.display = 'inline';
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'none';
}

function spage() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'inline';
}






































function table() {
    var x = document.getElementById('num').value
    if (x <= 0) {
        alert("Enter Number Frist");


    } else {
        document.getElementById('1r').innerHTML = `${x} x 1 = ${x*1}`
        document.getElementById('2r').innerHTML = `${x} x 2 = ${x*2}`
        document.getElementById('3r').innerHTML = `${x} x 3 = ${x*3}`
        document.getElementById('4r').innerHTML = `${x} x 4 = ${x*4}`
        document.getElementById('5r').innerHTML = `${x} x 5 = ${x*5}`
        document.getElementById('6r').innerHTML = `${x} x 6 = ${x*6}`
        document.getElementById('7r').innerHTML = `${x} x 7 = ${x*7}`
        document.getElementById('8r').innerHTML = `${x} x 8 = ${x*8}`
        document.getElementById('9r').innerHTML = `${x} x 9 = ${x*9}`
        document.getElementById('10r').innerHTML = `${x} x 10 = ${x*10}`
    }

}






function str(id) {
    var s = document.getElementById("select");
    var val = document.getElementById("name2").value;
    if (s.value == 2) {


        id.innerHTML = val.split("").reverse().join("");
    } else if (s.value == 1) {


        id.innerHTML = val.toUpperCase();
    } else if (s.value == 3) {


        id.innerHTML = val.toLowerCase();
    }



}