"use strict";
function partition(array, low, high) {
    const pivot_point = high - 1;
    let swap_index = low - 1;
    for (let curr_index = low; curr_index <= pivot_point; curr_index++) {
        if (array[curr_index] <= array[pivot_point]) {
            swap_index++;
            const temp = array[swap_index];
            array[swap_index] = array[curr_index];
            array[curr_index] = temp;
        }
    }
    return swap_index;
}
function quicksort(array, low = 0, high = array.length) {
    if (low === high) {
        return [];
    }
    const swap_index = partition(array, low, high);
    quicksort(array, low, swap_index);
    quicksort(array, swap_index + 1, high);
    return array;
}
function main() {
    const unsorted_array = new Array(5)
        .fill(0)
        .map((value) => (value = Math.floor(Math.random() * 100)));
    console.log(unsorted_array);
    return quicksort(unsorted_array);
}
console.log(main());
