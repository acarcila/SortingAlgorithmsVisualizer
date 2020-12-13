export function arrayMove(array, oldIndex, newIndex) {
    var newArray = array.slice(0);      // prevents pass by reference
    if (newIndex >= newArray.length) {
        var k = newIndex - newArray.length + 1;
        while (k--) {
            newArray.push(undefined);
        }
    }
    newArray.splice(newIndex, 0, newArray.splice(oldIndex, 1)[0]);
    return newArray;
};

export function arrayShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};