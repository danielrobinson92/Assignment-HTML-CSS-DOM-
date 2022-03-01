function tagCreate(tag, classname) {
  variable = document.createElement(tag);
  variable.className = classname || "";
  return variable;
}
/* ----------------- Automate Function Above--------------------------*/

// Outer Container-----------------------------

var flexContainer = tagCreate("div", "flex-container");
flexContainer.style.display = "flex";
flexContainer.style.justifyContent = "center";
flexContainer.style.alignItems = "center";
flexContainer.style.height = "700px";

/*---------------------------------------Internal Outline---------------------------------*/
var caldiv = tagCreate("div", "caldiv");
caldiv.style.width = "15%";
caldiv.style.backgroundColor = "lightgray"; /*lightgray*/
caldiv.style.borderRadius = "8px";

// ----------------> Input Label
var InOpdiv = tagCreate("div", "InOpdiv");
var labelInput = tagCreate("input", "labelInput");
labelInput.setAttribute("type", "text");
labelInput.setAttribute("Id", "result");
labelInput.style.position = "relative";
labelInput.style.right = "0px";
labelInput.style.textAlign = "right";
labelInput.style.backgroundColor = "lightgray";
labelInput.style.width = "99%";
labelInput.style.borderRadius = "2px";
labelInput.innerHTML = "hello";
labelInput.style.margin = "30px 2px 0px 2px";
labelInput.style.paddingRight = "5px";
labelInput.style.border = "none";
labelInput.setAttribute("disabled", "");

// ----------------> Output Label

var labelOutput = tagCreate("input", "labelOutput");
labelOutput.setAttribute("type", "text");
labelOutput.setAttribute("Id", "res2");
labelOutput.style.position = "relative";
labelOutput.style.right = "0px";
labelOutput.style.textAlign = "right";
labelOutput.style.backgroundColor = "white";
labelOutput.style.width = "99%";
labelOutput.style.borderRadius = "2px";
labelOutput.innerHTML = "hello";
labelOutput.style.margin = "2px";
labelOutput.style.paddingRight = "5px";
labelOutput.style.border = "none";
labelOutput.setAttribute("disabled", "");
// ---------------> Buttons/Numbers

var entryDiv = tagCreate("div", "entryDiv");
entryDiv.style.margin = "40px 0 0 0";

/*---------------- Row1------------------*/
let entryDivrow1 = tagCreate("div", "row");

entryDivrow1.style.display = "flex";
entryDivrow1.style.justifyContent = "space-evenly";
//Button 7

var button7 = tagCreate("input", "button");
button7.setAttribute("type", "button");
button7.setAttribute("value", "7");
button7.setAttribute("onclick", "display(`7`)");

//Button 8
var button8 = tagCreate("input", "button");
button8.setAttribute("type", "button");
button8.setAttribute("value", "8");
button8.setAttribute("onclick", "display(`8`)");

//Button 9
var button9 = tagCreate("input", "button");
button9.setAttribute("type", "button");
button9.setAttribute("value", "9");
button9.setAttribute("onclick", "display(`9`)");

//Button +
var buttonPlus = tagCreate("input", "button");
buttonPlus.setAttribute("type", "button");
buttonPlus.setAttribute("value", "+");
buttonPlus.style.backgroundColor = "goldenrod";
buttonPlus.style.color = "black";
buttonPlus.setAttribute("onclick", "display(`+`)");

/*---------------- Row2------------------*/
let entryDivrow2 = tagCreate("div", "row");
entryDivrow2.style.display = "flex";
entryDivrow2.style.justifyContent = "space-evenly";

//Button 4

var button4 = tagCreate("input", "button");
button4.setAttribute("type", "button");
button4.setAttribute("value", "4");
button4.setAttribute("onclick", "display(`4`)");

//Button 5
var button5 = tagCreate("input", "button");
button5.setAttribute("type", "button");
button5.setAttribute("value", "5");
button5.setAttribute("onclick", "display(`5`)");

//Button 6
var button6 = tagCreate("input", "button");
button6.setAttribute("type", "button");
button6.setAttribute("value", "6");
button6.setAttribute("onclick", "display(`6`)");

//Button -
var buttonMinus = tagCreate("input", "button");
buttonMinus.setAttribute("type", "button");
buttonMinus.setAttribute("value", "-");
buttonMinus.style.backgroundColor = "goldenrod";
buttonMinus.style.color = "black";
buttonMinus.setAttribute("onclick", "display(`-`)");

/*---------------- Row3------------------*/
let entryDivrow3 = tagCreate("div", "row");

entryDivrow3.style.display = "flex";
entryDivrow3.style.justifyContent = "space-evenly";

//Button 1

var button1 = tagCreate("input", "button");
button1.setAttribute("type", "button");
button1.setAttribute("value", "1");
button1.setAttribute("onclick", "display(`1`)");

//Button 2
var button2 = tagCreate("input", "button");
button2.setAttribute("type", "button");
button2.setAttribute("value", "2");
button2.setAttribute("onclick", "display(`2`)");

//Button 3
var button3 = tagCreate("input", "button");
button3.setAttribute("type", "button");
button3.setAttribute("value", "3");
button3.setAttribute("onclick", "display(`3`)");

//Button X
var buttonMltpy = tagCreate("input", "button");
buttonMltpy.setAttribute("type", "button");
buttonMltpy.setAttribute("value", "*");
buttonMltpy.style.backgroundColor = "goldenrod";
buttonMltpy.style.color = "black";
buttonMltpy.setAttribute("onclick", "display(`*`)");

/*---------------- Row4------------------*/
let entryDivrow4 = tagCreate("div", "row");

entryDivrow4.style.display = "flex";
entryDivrow4.style.justifyContent = "space-evenly";

//Button C

var buttonC = tagCreate("input", "button");
buttonC.setAttribute("type", "button");
buttonC.setAttribute("value", "C");
buttonC.style.backgroundColor = "red";
buttonC.setAttribute("onclick", "clearscreen()");

//Button 0
var button0 = tagCreate("input", "button");
button0.setAttribute("type", "button");
button0.setAttribute("value", "0");
button0.setAttribute("onclick", "display(`0`)");

//Button =
var buttonEq = tagCreate("input", "button");
buttonEq.setAttribute("type", "button");
buttonEq.setAttribute("value", "=");
buttonEq.style.backgroundColor = "green";
buttonEq.setAttribute("onclick", "calc()");

//Button /
var buttonDivi = tagCreate("input", "button");
buttonDivi.setAttribute("type", "button");
buttonDivi.setAttribute("value", "/");
buttonDivi.style.backgroundColor = "goldenrod";
buttonDivi.style.color = "black";
buttonDivi.setAttribute("onclick", "display(`/`)");

/*---------Appending area-----------*/
document.body.style.backgroundColor = "rgb(220, 247, 220, 0.582)";

InOpdiv.append(labelInput, labelOutput);
entryDivrow1.append(button7, button8, button9, buttonPlus);
entryDivrow2.append(button4, button5, button6, buttonMinus);
entryDivrow3.append(button1, button2, button3, buttonMltpy);
entryDivrow4.append(buttonC, button0, buttonEq, buttonDivi);
entryDiv.append(entryDivrow1);
entryDiv.append(entryDivrow2);
entryDiv.append(entryDivrow3);
entryDiv.append(entryDivrow4);
caldiv.append(InOpdiv);
caldiv.append(entryDiv);
flexContainer.append(caldiv);
document.body.append(flexContainer);

/*-----------------------------BG Code for execution-----------------*/

function clearscreen() {
  document.getElementById("res2").value = "";
  document.getElementById("result").value = "";
}

function display(value) {
  let temp = (document.getElementById("result").value += value);
  console.log(temp);
}

function calc() {
  let temp = document.getElementById("result").value;
  let result2 = eval(temp);
  document.getElementById("res2").value = result2;
  console.log(result2);
}
