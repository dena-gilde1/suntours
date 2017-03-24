
function time() {
    "use strict";
    var tijd = new Date();
    var datum = tijd.toLocaleDateString();
    var t = tijd.toLocaleTimeString();
    document.write('het is nu: ' + t);
    document.write('<br />datum:' + datum);
}

function startTime() {
    "use strict";
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
                h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    "use strict";
    if (i < 10) {i = "0" + i; }   // add zero in front of numbers < 10
    return i;
}
