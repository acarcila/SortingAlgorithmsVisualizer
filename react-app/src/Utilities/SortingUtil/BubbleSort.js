export default function (array, left, right) {
    var newArray = array.slice(0);      // prevents pass by reference
    var steps = [];
    for (var i = left; i < right; i++) {
        for (var j = left; j < right - i; j++) {
            var step = {
                elements: []
            }

            if (newArray[j].value > newArray[j + 1].value) {
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