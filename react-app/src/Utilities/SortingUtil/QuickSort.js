import { arrayMove } from "../ArrayUtil/ArrayUtil";

export default function sort(array, left, right) {
    var newArray = array.slice(0); // prevents pass by reference
    var steps = [];
    if (left < right) {
        var pivotIndex = right;
        var pivotValue = (array[pivotIndex].value);

        var j = left;
        while (j < pivotIndex) {
            var step = {
                elements: []
            }
            if ((newArray[j].value) > (pivotValue)) {
                newArray = arrayMove(newArray, j, right);
                pivotIndex--;
                step.elements.push({ index: j, newIndex: right });
                step.elements.push({ index: pivotIndex, newIndex: pivotIndex });
                steps.push(step);
                continue;
            }
            step.elements.push({ index: j, newIndex: j });
            step.elements.push({ index: pivotIndex, newIndex: pivotIndex });
            steps.push(step);

            j++;            
        }

        const leftArray = sort(newArray, left, pivotIndex - 1);
        newArray = leftArray.newArray;
        steps = steps.concat(leftArray.steps);
        const rightArray = sort(newArray, pivotIndex + 1, right);
        newArray = rightArray.newArray;
        steps = steps.concat(rightArray.steps);
    }
    return { newArray, steps };
}
