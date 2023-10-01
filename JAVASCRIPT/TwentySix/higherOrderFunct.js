let radius = [2, 4, 6, 8];


//-------------------------------------------function to calculate area--------------------------------------



let Area = function (radius) {
    return Math.PI * radius * radius;
}



////----------------------------------------function to calculate diameter-------------------------------------------------------



let diameter = function (radius) {
    return radius / 2;
}




//----------------------------------------function to calculate circumference-----------------------------------------------------------




let calculateCircumference = function (radius) {
    return 2 * Math.PI * radius[i];
}





//------------------------------and here is our calculator main funtion which calculat all----------------------------------------






let calculator = function (radius, logicFunction) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logicFunction(radius[i]));
    }
    return output;
}




calculator(radius, Area);// to calculate area  [12.566370614359172, 50.26548245743669, 113.09733552923255, 201.06192982974676]
calculator(radius, diameter);// to calculate diameter [1, 2, 3, 4]
calculator(radius, circumference);// to calculate circimference[12.566370614359172, 25.132741228718345, 37.69911184307752, 50.26548245743669]




//------------------------------------------this will only calculate area----------------------------------------------------------





let calculatearea = function (radius) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
calculatearea(radius);