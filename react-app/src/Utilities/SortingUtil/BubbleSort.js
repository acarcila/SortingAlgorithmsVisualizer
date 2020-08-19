export default function (array) {
    var newArray = array.slice(0);      // prevents pass by reference
    var steps = [];
    for (var i = 0; i < newArray.length - 1; i++) {
        for (var j = 0; j < newArray.length - i - 1; j++) {
            var step = {
                elements: []
            }

            if (newArray[j] > newArray[j + 1]) {
                step.elements.push({ index: j, newIndex: j + 1 });
                step.elements.push({ index: j + 1, newIndex: j + 1 });
                var temp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;
            }
            else {
                step.elements.push({ index: j, newIndex: j });
                step.elements.push({ index: j + 1, newIndex: j + 1 });
            }

            steps.push(step);
        }
    }
    return { newArray, steps };
}