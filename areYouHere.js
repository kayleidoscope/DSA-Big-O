function areYouHere(arr1, arr2) {
    let ticks = 1;
    for (let i = 0; i < arr1.length; i++) {
        ticks++;
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            ticks ++;
            const el2 = arr2[j];
            if (el1 === el2) return {result: true, ticks: ticks};
        }
    }
    return {
        result: false,
        ticks: ticks
    };
}

console.log(areYouHere([14, 4, 42], [12, 2, 42]))
console.log(areYouHere([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], [1, 2, 3]))
console.log(areYouHere([500, 123413223, 43232352534, 234233223, 123143123432, 134135134431, 2454364313, 34524353, 34534, 99, 12, 13, 14, 15, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 200], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 200]))
console.log(areYouHere([500, 123413223, 12341321, 1341233214, 12364131, 453234, 43232352534, 234233223, 123143123432, 134135134431, 2454364313, 34524353, 34534, 99, 12, 13, 14, 15, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 200], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 51, 55, 123, 3123, 200]))

/*

The Big O notation for this function is O(n^2) because it is a loop nested in another loop.

*/