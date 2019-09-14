"use strict";

//DOM content is loaded and the colorChanger-function activates:
document.addEventListener("DOMContentLoaded", colorChanger);

//Main function to allow color changing:
function colorChanger() {

    //Variable that lets the larger box change color depending on input-value:
    let selectedColor = document.querySelector(".selected").value;

    //Variable that will let the RGB-code displayable:
    let rgbColors = document.querySelector(".display").style.background;

    //-----------------------------------------
    //Code given from the assignment in Fronter - makes the translation from RGB to HSL:
    r /= 255;
    g /= 255;
    b /= 255;

    let h, s, l;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === min) {
        h = 0;
    } else if (max === r) {
        h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
        h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
        h = 60 * (4 + (r - g) / (max - min));
    }

    if (h < 0) {
        h = h + 360;
    }

    l = (min + max) / 2;

    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = (max - l) / Math.min(l, 1 - l);
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]

    s *= 100;
    l *= 100;
    //-----------------------------------------
}
