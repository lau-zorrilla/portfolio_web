function main() {
    /*var bb_margin, gb_margin

    for (var i = 0; i < 1200; i++)
        bb_margin += 1
    black_band.style.marginLeft = "" + bb_margin + "px"

    for (var i = 0; i > 1200; i++)
        gb_margin -= 1
    gray.style.marginRight = "" + gb_margin + "px"*/

    /*academics.addEventListener("mouseover", panel_open)
    academics.addEventListener("mouseout", panel_close)*/

    /*purple_container.scrollBottom = purple_container.scrollHeight;
    var objDiv = document.getElementById("your_div");*/
}

function panel_open() {
    var ac_height = 65
    for (var i = 0; i < 300; i++)
        ac_height += 1
    academics.style.height = "" + ac_height + "px"
}

function panel_close() {
    var ac_height = 300
    for (var i = 0; i > 65; i++) {
        ac_height -= 1
        academics.style.height = "" + ac_height + "px"
    }
}
/*var acdmcs = document.getElementById("academics")*/