// sum's div
let sum = document.querySelector("#sum");
let sSum ="";
// variable 
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let point = document.querySelector("#point");
let allCut = document.querySelector("#allcut");
let cut = document.querySelector("#cut");
let plus = document.querySelector("#plus");
let multi = document.querySelector("#multi");
let minus = document.querySelector("#minus");
let divid = document.querySelector("#divid");
let equal = document.querySelector("#equal");
let pm = document.querySelector("#pm");
let persent = document.querySelector("#persent")
// one
one.onclick = () => {
    sum.innerText = sum.innerText + "1"
    sSum = sSum + "1"
}

//two
two.onclick =() => {
    sum.innerText = sum.innerText + "2"
    sSum = sSum + "2"
}

// three 
three.onclick =() => {
    sum.innerText = sum.innerText + "3"
    sSum = sSum + "3"
}

// four
four.onclick =() => {
    sum.innerText = sum.innerText + "4"
    sSum = sSum + "4"
}

// five
five.onclick =() => {
    sum.innerText = sum.innerText + "5"
    sSum = sSum + "5"
}

// six
six.onclick =() => {
    sum.innerText = sum.innerText + "6"
    sSum = sSum + "6"
}

// seven
seven.onclick =() => {
    sum.innerText = sum.innerText + "7"
    sSum = sSum + "7"
}

// eight
eight.onclick =() => {
    sum.innerText = sum.innerText + "8"
    sSum = sSum + "8"
}

// nine
nine.onclick =() => {
    sum.innerText = sum.innerText + "9"
    sSum = sSum + "9"
}

// zero
zero.onclick =() => {
    sum.innerText = sum.innerText + "0"
    sSum = sSum + "0"
}

// point
point.onclick =() => {
    sum.innerText = sum.innerText + "."
    sSum = sSum + "."
}
//allcut
allCut.onclick =() => {
    plus.style.backgroundColor = "#3c3c3c"
    plus.style.border = "none"
    multi.style.backgroundColor = "#3c3c3c"
    multi.style.border = "none"
    minus.style.backgroundColor = "#3c3c3c"
    minus.style.border = "none"
    divid.style.backgroundColor = "#3c3c3c"
    divid.style.border = "none"
    sum.innerText = ""
    sSum = ""
}
//cut
cut.onclick =() => {
    sum.innerText = sum.innerText.slice(0,-1)
    sSum = sSum.slice(0,-1)
}
//plus
plus.onclick =() => {
    plus.style.backgroundColor = "black"
    plus.style.border = "2px solid white"
    multi.style.backgroundColor = "#3c3c3c"
    multi.style.border = "none"
    minus.style.backgroundColor = "#3c3c3c"
    minus.style.border = "none"
    divid.style.backgroundColor = "#3c3c3c"
    divid.style.border = "none"
    sum.innerText = sum.innerText + "+"
    sSum = sSum + "+"
}
//multi
multi.onclick =() => {
    plus.style.backgroundColor = "#3c3c3c"
    plus.style.border = "none"
    multi.style.backgroundColor = "black"
    multi.style.border = "2px solid white"
    minus.style.backgroundColor = "#3c3c3c"
    minus.style.border = "none"
    divid.style.backgroundColor = "#3c3c3c"
    divid.style.border = "none"
    sum.innerText = sum.innerText + "×"
    sSum = sSum + "*"
}
//minus
minus.onclick =() => {
    plus.style.backgroundColor = "#3c3c3c"
    plus.style.border = "none"
    multi.style.backgroundColor = "#3c3c3c"
    multi.style.border = "none"
    minus.style.backgroundColor = "black"
    minus.style.border = "2px solid white"
    divid.style.backgroundColor = "#3c3c3c"
    divid.style.border = "none"
    sum.innerText = sum.innerText + "-"
    sSum = sSum + "-"
}
//divid
divid.onclick =() => {
    plus.style.backgroundColor = "#3c3c3c"
    plus.style.border = "none"
    multi.style.backgroundColor = "#3c3c3c"
    multi.style.border = "none"
    minus.style.backgroundColor = "#3c3c3c"
    minus.style.border = "none"
    divid.style.backgroundColor = "black"
    divid.style.border = "2px solid white"
    sum.innerText = sum.innerText + "÷"
    sSum = sSum + "/"
}
//persent
persent.onclick = () => {
    sum.innerText = sum.innerText + "%"
    sSum = sSum + "/100"
}
// plus and minus
pm.onclick = () => {
    sum.innerText = "-" + sum.innerText
    sSum = "-" + sSum
}
// equal
equal.onclick = () => {
    plus.style.backgroundColor = "#3c3c3c"
    plus.style.border = "none"
    multi.style.backgroundColor = "#3c3c3c"
    multi.style.border = "none"
    minus.style.backgroundColor = "#3c3c3c"
    minus.style.border = "none"
    divid.style.backgroundColor = "#3c3c3c"
    divid.style.border = "none"
    sum.innerText =eval(sSum)
}
