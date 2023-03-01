//pop a window
alert("ALERT");

//output in console
console.log("First practice");

//output date in html
document.write(Date())

//function
function clickButton() {
    document.getElementById("01").innerHTML = "Button Clicked";
}

//variables
var a, b, c
a = 10
b = "cat"
//c="10cat"
c = a + b
console.log(c)
//b=10 now
b = a
console.log(b)
//output number
console.log(typeof (b))

//array
var d = new Array("java", "python", "c++")
var e = ["r", "go", "js"]
var f = new Array()
f[0] = d[1]
f[1] = e[0]
console.log("d=", d, "\n")
console.log("e=", e, "\n")
console.log("f=", f, "\n")