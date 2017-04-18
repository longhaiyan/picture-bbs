// 计算排列组合

// 接受可变长数组参数
function Zuhe () {
  var heads = arguments[0]
  for (var i = 1, len = arguments.length; i < len; i++) {
    if (arguments[i].length) {
      heads = addNewType(heads, arguments[i])
    }
  }
  return heads
};

function addNewType (heads, choices) {
  var result = []
  for (var i = 0, len = heads.length; i < len; i++) {
    for (var j = 0, lenj = choices.length; j < lenj; j++) {
      result.push(heads[i] + '_' + choices[j])
    }
  }
  return result
};

// 打印结果的函数
function printResult (result) {
  for (var i = 0, len = result.length; i < len; i++) {
    console.log(result[i])
  }
  console.log(result.length)
  return result
}

export default Zuhe
