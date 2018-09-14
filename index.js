javascript: function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
var tog = true;
async function doit() {
    while (tog) {
        document.getElementsByClassName('button Lts($ls-s) Z(0) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) recsGamepad__button D(b) Bgc(#fff) Wc($transform) recsGamepad__button--like Scale(1.1):h')[0].click();
        await sleep(500);
    }
}

function toggle() {
    tog = !tog;
    if (tog) doit();
}

function add() {
    var element = document.createElement("input");
    element.setAttribute("type", "button");
    element.setAttribute("value", "Toggle");
    element.setAttribute("name", "button3");
    element.setAttribute("onclick", "toggle()");
    document.getElementsByClassName('CenterAlign recsGamepad Pos(r) Py(16px) Px(16px) Px(8px)--ml D(f) Jc(sa) Ai(c) Maw(375px)--m Mx(a)')[0].appendChild(element)
}
add();
doit();
