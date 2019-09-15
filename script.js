"use strict";

//DOM content is loaded and the colorChanger-function activates:
document.addEventListener("DOMContentLoaded", colorChanger);

//Main function to allow color changing:
function colorChanger() {
    //Variable that lets the larger box change color depending on input-value:
    let selectedColor = document.querySelector(".selected").value;

    //Variable that will let the RGB-code displayable:
    let rgbColors = document.querySelector(".display").style.background;

    //Constants and variables declaring how to display the RGB-code:
    const firstBracket = rgbColors.indexOf("(");
    const firstComma = rgbColors.indexOf(",");
    const secondComma = rgbColors.indexOf(",", firstComma + 1);
    const lastBracket = rgbColors.indexOf(")", secondComma + 1);

    //"r" is declared as "( + first number + ,"
    let r = rgbColors.substring(firstBracket + 1, firstComma);

    //"g" is declared as ", + second number + ,"
    let g = rgbColors.substring(firstComma + 2, secondComma);

    //"b" is declared as ", + third number + )"
    let b = rgbColors.substring(secondComma + 3, lastBracket);

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

    //The larger box is selected and the background is changed according to the variable-values:
    document.querySelector(".display").style.background = selectedColor;

    //the HEX code for the selected color is displayed:
    document.querySelector(".hex").innerHTML = `HEX:
    ${selectedColor}`;

    //the RGB code for the selected color is displayed:
    document.querySelector(".rgb").innerHTML = `RGB:
    ${rgbColors}`;

    //the HSL code for the selected color is displayed:
    document.querySelector(".hsl").innerHTML = `HSL:
    ${h},
    ${s}%,
    ${l}%`;
}
