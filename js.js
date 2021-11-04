document.getElementById("box_left").onmouseover = function() {
    fun_name();
    fun_box1();
};

function fun_name() {
    document.getElementById('rect1').style.height = "800";
    document.getElementById('rect1').style.y = "0px";
    document.getElementById('rect1').style.transition = "2s";
    document.getElementById('stick1').style.transition = "2s";
    document.getElementById('stick1').style.transitionDelay = ".5s";
    document.getElementById('stick1').style.x = "190";
    document.getElementById('stick2').style.transition = "2s";
    document.getElementById('stick2').style.x = "200";
    document.getElementById('ex').style.transition = "0s";
    document.getElementById('ex').style.opacity = "0";

}
document.getElementById("box_left").onmouseout = function() {
    fun_name2();
    fun_box11();
};

function fun_name2() {
    document.getElementById('rect1').style.y = "800px";

    document.getElementById('stick1').style.transition = "2s";
    document.getElementById('stick1').style.x = "10";
    document.getElementById('stick2').style.transition = "2s";
    document.getElementById('stick2').style.transitionDelay = ".3s";
    document.getElementById('stick2').style.x = "20";

    document.getElementById('ex').style.transition = "1s";
    document.getElementById('ex').style.transitionDelay = "2s";
    document.getElementById('ex').style.opacity = "1";

}

document.getElementById("p_hover1").onmouseover = function() {
    fun_hoverP();
};
document.getElementById("p_hover1").onmouseout = function() {
    fun_hoverP2();
};

function fun_hoverP() {
    let scale1 = document.getElementById("scale_p1");
    scale1.style.width = "1";
    scale1.style.transition = "1s";
    scale1.style.transform = "scaleX(100)";
}

function fun_hoverP2() {
    let scale1 = document.getElementById("scale_p1");
    scale1.style.transition = "1s";
    scale1.style.transform = "scaleX(0)";
}

document.getElementById("p_hover2").onmouseover = function() {
    fun_hoverP11();
};
document.getElementById("p_hover2").onmouseout = function() {
    fun_hoverP22();
};

function fun_hoverP11() {
    let scale2 = document.getElementById("scale_p2");
    scale2.style.width = "1";
    scale2.style.transition = "1s";
    scale2.style.transform = "scaleX(100)";
}

function fun_hoverP22() {
    let scale2 = document.getElementById("scale_p2");
    scale2.style.transition = "1s";
    scale2.style.transform = "scaleX(0)";
}

document.getElementById("p_hover3").onmouseover = function() {
    fun_hoverP01();
};
document.getElementById("p_hover3").onmouseout = function() {
    fun_hoverP02();
};

function fun_hoverP01() {
    let scale2 = document.getElementById("scale_p3");
    scale2.style.width = "1";
    scale2.style.transition = "1s";
    scale2.style.transform = "scaleX(140)";
}

function fun_hoverP02() {
    let scale2 = document.getElementById("scale_p3");
    scale2.style.transition = "1s";
    scale2.style.transform = "scaleX(0)";
}


function fun_box1() {
    let DISPLAY = document.getElementById("p_hover1");
    let DISPLAY2 = document.getElementById("p_hover2");
    let DISPLAY3 = document.getElementById("p_hover3");

    DISPLAY.style.transition = "1s";
    DISPLAY.style.display = "block";
    DISPLAY.style.height = "20px";

    DISPLAY2.style.transition = "1s";
    DISPLAY2.style.display = "block";
    DISPLAY2.style.height = "20px";

    DISPLAY3.style.transition = "1s";
    DISPLAY3.style.display = "block";
    DISPLAY3.style.height = "20px";
}

function fun_box11() {
    let DISPLAY = document.getElementById("p_hover1");
    let DISPLAY2 = document.getElementById("p_hover2");
    let DISPLAY3 = document.getElementById("p_hover3");

    DISPLAY.style.transition = "1s";
    DISPLAY.style.overflow = "hidden";
    DISPLAY.style.height = "0";

    DISPLAY2.style.transition = "1s";
    DISPLAY2.style.overflow = "hidden";
    DISPLAY2.style.height = "0";


    DISPLAY3.style.transition = "1s";
    DISPLAY3.style.overflow = "hidden";
    DISPLAY3.style.height = "0";
}
document.getElementById("menu").onclick = function() {
    f_menu();
};

var clickM = 0;
var CONT = document.getElementById('content');
var TEXT = document.querySelectorAll('.text');
var MENU1 = document.querySelectorAll('.m_o');


function f_menu() {
    clickM++;

    if (clickM % 2 == 1) {
        document.getElementById("mm1").setAttribute('class', 'anim1');
        document.getElementById("mm7").setAttribute('class', 'anim2');
        
        for (let i = 0; i < MENU1.length; i++) {
            MENU1[i].style.transition = "0";
            MENU1[i].style.opacity = "0";
        }

        CONT.style.left = '0px';

        for (let i = 0; i < TEXT.length; i++) {
            TEXT[i].style.transition = "2s";
            TEXT[i].style.transitionDelay = "1s";
            TEXT[i].style.opacity = "1";
        }
    }
    if (clickM % 2 == 0) {

        document.getElementById("mm1").setAttribute('class', 'anim11');
        document.getElementById("mm7").setAttribute('class', 'anim22');

        CONT.style.left = '-100%';

        for (let i = 0; i < TEXT.length; i++) {
            TEXT[i].style.opacity = "0";
            TEXT[i].style.transition = "1s";
        }
        
        for (let i = 0; i < MENU1.length; i++) {
            MENU1[i].style.transition = "2s";
            MENU1[i].style.opacity = "1";
        }


    }

}
document.getElementById("n1").onclick = function() {
    func_nav();
};
document.getElementById("n2").onclick = function() {
    func_nav2();
};
document.getElementById("n3").onclick = function() {
    func_nav3();
};
document.getElementById("n4").onclick = function() {
    func_nav4();
};

var TEXT_NAV = document.getElementById('n1');
var TEXT_NAV2 = document.getElementById('n2');
var TEXT_NAV3 = document.getElementById('n3');
var TEXT_NAV4 = document.getElementById('n4');
var TEXT_SL = document.querySelector('.text_sl');

function func_nav() {
    TEXT_NAV.style.transition = "1s";
    TEXT_NAV2.style.fill = "black";
    TEXT_NAV3.style.fill = "black";
    TEXT_NAV4.style.fill = "black";
    TEXT_NAV.style.fill = "white";
    TEXT_SL.style.transition = "1s";
    TEXT_SL.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}

function func_nav2() {
    TEXT_NAV2.style.transition = "1s";
    TEXT_NAV.style.fill = "black";
    TEXT_NAV3.style.fill = "black";
    TEXT_NAV4.style.fill = "black";
    TEXT_NAV2.style.fill = "white";
    TEXT_SL.style.transition = "1s";
    TEXT_SL.innerHTML = "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
}

function func_nav3() {
    TEXT_NAV3.style.transition = "1s";
    TEXT_NAV.style.fill = "black";
    TEXT_NAV2.style.fill = "black";
    TEXT_NAV4.style.fill = "black";
    TEXT_NAV3.style.fill = "white";
    TEXT_SL.style.transition = "1s";
    TEXT_SL.innerHTML = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
}

function func_nav4() {
    TEXT_NAV4.style.transition = "1s";
    TEXT_NAV.style.fill = "black";
    TEXT_NAV2.style.fill = "black";
    TEXT_NAV3.style.fill = "black";
    TEXT_NAV4.style.fill = "white";
    TEXT_SL.style.transition = "1s";
    TEXT_SL.innerHTML = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
}

function showCoords(event) {
    var img = document.getElementById("img1");
    let x = event.clientX -(img.offsetLeft+160); 
    let y = event.clientY -(img.offsetTop+160);
    console.log(x + ' ' + y);
    
    img.style.transform = 'rotate(' + 57.2958 * arcctg(x, y) + 'deg)';
    console.log(img.style.transform = 'rotate(' + 57.2958 * arcctg(x, y) + 'deg)');
   
    function arcctg(x, y) {
        if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
        if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
        if (x < 0 && y < 0) return Math.PI + Math.atan(y / x);
        if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
    }
};