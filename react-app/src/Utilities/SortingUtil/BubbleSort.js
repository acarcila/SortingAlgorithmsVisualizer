export default function (array) {
    var newArray = array.slice(0);      // prevents pass by reference
    var steps = [];
    for (var i = 0; i < newArray.length - 1; i++) {
        for (var j = 0; j < newArray.length - i - 1; j++) {
            var step = {
                elements: [j, j + 1],
                isChange: false
            }

            if (newArray[j] > newArray[j + 1]) {
                var temp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;

                step.isChange = true;
            }
            steps.push(step);
        }
    }
    // console.log(steps);
    return { newArray, steps };
}