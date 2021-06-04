const rect = require('./rectangle');

function solveRect(len, bre) {
    console.log("Solving for rectnagle with l = " + len + " and b = " + bre);

    rect(len, bre, (err, rectangle) => {
        if (err) {
            console.log("ERRPR: ", err.message);
        } else {
            console.log("The arena of the rectangle of dimensions l = "
            + len + " and b = " +  bre + " is " + rectangle.area());

            console.log("The perimeter of the rectangle of dimensions l = "
            + len + " and b = " +  bre + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);