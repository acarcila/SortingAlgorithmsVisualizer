import { arrayMove } from '../ArrayUtil/ArrayUtil';

export default function sort(array, left, right) {
    var newArray = array.slice(0);      // prevents pass by reference
    var steps = [];

    if (left < right) {
        const middle = (parseInt((right - left) / 2) + left);

        const leftArray = sort(newArray, left, middle);
        newArray = leftArray.newArray;
        steps = steps.concat(leftArray.steps);
        const rightArray = sort(newArray, middle + 1, right);
        newArray = rightArray.newArray;
        steps = steps.concat(rightArray.steps);
        const mergedInfo = merge(newArray, left, middle, right);
        newArray = mergedInfo.newArray
        steps = steps.concat(mergedInfo.steps);
    }
    return { newArray, steps };
}

function merge(array, left, middle, right) {
    var newArray = array.slice(0);      // prevents pass by reference
    var steps = [];

    var i = left;
    var j = middle + 1;
    if (left == 0 && middle == 4 && right == 9) {
        console.log();
    }
    while (i <= middle && j <= right) {
        var step = {
            elements: []
        }
        if (newArray[j].value < newArray[i].value) {
            step.elements.push({ index: j, newIndex: i });
            step.elements.push({ index: i+1, newIndex: i+1 });
            newArray = arrayMove(newArray, j, i);
            j++
            middle++;
        }
        else
        {
            step.elements.push({ index: i, newIndex: i });
            step.elements.push({ index: j, newIndex: j });
        }
        i++;
        steps.push(step);
    }
    return { newArray, steps };
}