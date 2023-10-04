// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//                              a
var arr1 = [1, 3, 3, 5, 8, 10,];
//                              b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
// [1, 3, 5, 8, 10]

//                   i
var arrA = [1, 3, 4, 5];
//                   j
var arrB = [1, 3, 3, 5, 8, 10,];
// [1, 3, 4]

// 1. DRIVER 🚗
// 2. PRESENTER 🧑‍🏫
// 3. NAVIGATOR 🧭
function mergeDedupe(arr1, arr2) { }

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]





function mergeDedupe(arr1, arr2) {

    let i = 0
    let j = 0
    const mergedArr = []
    while (i < arr1.length && j < arr2.length) {  // 1) iterate through both arrays at the same time
        if (mergedArr.includes(arr1[i])) {
            i++
        }
        else if (mergedArr.includes(arr2[j])) {
            j++
        }
        else if (arr1[i] === arr2[j] && mergedArr.includes(arr1[i])) {
            i++
            j++
        } else if (arr1[i] === arr2[j]) {
            mergedArr.push(arr1[i])
            i++
            j++
        } else if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i])
            i++
        } else if (arr1[i] > arr2[j]) {
            mergedArr.push(arr2[j])
            j++
        }
    }
    let remainder = []

    if (arr1.length === arr2.length) {
        return mergedArr

    } else if (arr1.length < arr2.length) {
        remainder = arr2.slice(j)
    } else {
        remainder = arr1.slice(i)
    }
    for (let k = 0; k < remainder.length; k++) {
        if (!mergedArr.includes(remainder[k])) {
            mergedArr.push(remainder[k])
        }
    }
    return mergedArr
}