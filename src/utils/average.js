/**
 * Get the Average
 *
 * @param {number[]} array
 * @returns Number
 */
function getAverage(array) {
  return array.reduce((a, b) => a + b) / array.length
}

export default getAverage
