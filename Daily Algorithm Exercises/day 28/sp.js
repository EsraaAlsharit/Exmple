/*
Efficiently combine two already sorted multiset arrays
into an array containing the sorted set intersection of the two.
Output: only the shared values between the two arrays (deduped).
* Venn Diagram Visualization (bottom):
* https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
* - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
*    dupes we may end up looping over all items of longer arr.
* - Space: O(n) linear, n = shorter array length.
* @param {Array<number>} sortedA
* @param {Array<number>} sortedB Both sets are multisets
*    (multi in that it can contain multiple dupes).
* @returns {Array<number>} The sorted set intersection: a new array that is
*    sorted and contains only the shared values between the two arrays
*    deduped.
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

function orderedIntersection(sortedA, sortedB) {

    var arr = [];
    for (let i = 0; i < sortedA.length; i++) {
        if(!arr.includes(sortedA[i])){
        for (let j = 0; j < sortedB.length; j++) {
            if (sortedA[i] == sortedB[j]) {
                arr.push(sortedB[j])
                break
            }
        }}

    }

    return arr;
}

console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));