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