var myFunc = function (name, weather) {
    if (weather === void 0) { weather = "raining"; }
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
};
myFunc("Adam");
