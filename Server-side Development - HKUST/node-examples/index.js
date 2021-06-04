var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};

function solveRect(len, bre) {
    console.log("Solving for rectnagle with l = " + len + " and b = " + bre);

    if (len <= 0 || bre <= 0) {
        console.log("Rectnagle dimensions should be greater than zero.")
    } else {
        console.log("The area of the rectangle is " + rect.area(len, bre));
        console.log("The perimeter of the rectangle is " + rect.perimeter(len, bre));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);