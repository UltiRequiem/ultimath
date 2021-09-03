/**
 * Review: codereview.stackexchange.com/questions/263975
 *
 * @param {number[]} arr
 * @returns {number}
 */
function getMostFrequentElement(arr) {
  let [maxFreq, result] = [-1, -1]

  arr
    .reduce((acu, cur) => {
      acu.set(cur, (acu.has(cur) ? acu.get(cur) : 0) + 1)
      return acu
    }, new Map())
    .forEach((value, key) => {
      if (value > maxFreq) {
        maxFreq = value
        result = key
      }
    })

  return result
}

export default getMostFrequentElement
