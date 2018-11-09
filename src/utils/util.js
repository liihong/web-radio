let util = {}
/**
 * 获取浏览器参数
 * @param {*} name
 * @param {m} 参数
 */
util.getQuery = function (name, m) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
  var w = window.location.href.split('?')[1]
  var r = null
  if (w) {
    r = w.match(reg)
  }
  if (r != null && m) return r[2]
  if (r != null) return unescape(r[2])
  return null
}
/**
 * 数组转对象格式
 */
util.hanleFormatObject = function (a, m) {
  let ar = []
  for (var i = 0; i < a[m].length; i++) {
    let o = {}
    for (var it in a) {
      o[it] = a[it][i]
    }
    ar.push(o)
  }
  return ar
}
/**
 * 对字符串进行Unicode编码
 * @param str
 * @returns {string}
 */
util.decodeStr = function (str) {
  let res = []

  for (let i = 0; i < str.length; i++) {
    res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4)
  }

  return '\\u' + res.join('\\u')
}

/**
 * 对unicode编码格式的字符串进行解码
 * @param str
 * @returns {string}
 */
util.undecodeStr = function (str) {
  let result = []
  let strArr = str.split('\\u') // 根据 \u 分割
  let len = strArr.length

  for (let i = 0; i < len; i++) {
    if (strArr[i]) {
      result.push(String.fromCharCode(parseInt(strArr[i], 16))) // 16 转 10
    }
  }

  return result.join('')
}
/**
 * 判断传入对象的数据类型,返回对象字符串
 * String
 * Number
 * Array
 * Date
 * Function
 * Function
 * @param {*} obj
 */
util.typeOfObj = function (obj) {
  let objType = Object.prototype.toString.call(obj)
  return objType.replace('[object ', '').replace(']', '')
}

/**
 * 滚动条滚动到指定位置
 * @param {*} el
 * @param {*} from
 * @param {*} to
 * @param {*} duration
 */
util.scrollTop = function (el, from = 0, to, duration = 500) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil(difference / duration * 50)

  function scroll(start, end, step) {
    if (start === end) {
      return
    }

    let d = (start + step > end) ? end : start + step
    if (start > end) {
      d = (start - step < end) ? end : start - step
    }

    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }

  scroll(from, to, step)
}

/**
 * 获取当前时间
 */
util.getNowFormatDate = function () {
  var date = new Date()
  var seperator1 = "-"
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = "0" + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate
  return currentdate
}

util.sameNameId = function (a) {
  let m = []
  a.map(function (item, index) {
    let o = {}
    o.name = item
    o.id = item
    m.push(o)
  })
  return m
}
util.oneArray = function (o, m) {
  if (!m) {
    if (o instanceof Array) {} else {
      let os = []
      os.push(o)
      return os
    }
  }
  if (o[m] instanceof Array) {
    return o
  } else {
    for (var i in o) {
      let s = o[i]
      o[i] = []
      o[i].push(s)
    }
    return o
  }
}
/**
 * 数组去重，
 * @param {*} obj 
 */
util.uniqueArray = function (arr) {
  return Array.from(new Set(arr));
}
/**
 * 将对象元素转换成字符串以作比较
 * @param {*} obj 
 */
util.obj2key = function (obj, keys) {
  var n = keys.length,
    key = [];
  while (n--) {
    key.push(obj[keys[n]]);
  }
  return key.join('|');
}
/**
 * 数组去重，可去除重复对象
 * @param {*} obj 
 */
util.uniqueArrayObj = function (arr, key) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][key] === arr[j][key]) {
        arr.splice(j, 1);
        j = j - 1; // 关键，因为splice()删除元素之后，会使得数组长度减小，此时如果没有j=j-1的话，会导致相同id项在重复两次以上之后无法进行去重，且会错误删除id没有重复的项。
      }
    }
  }
  return arr
}
/**
 * 传入一个数组和一个key，返回该数组中key列的合计
 * @param {*} array 
 * @param {*} key 
 */
util.sumArrayObj = function (array, key) {
  let count = 0;
  array.forEach(item => {
    count = count + parseFloat(item[key].toString().replace(',', ''))
  })
  return count.toFixed(2) //保留小数点后两位
}
/**
 * 返回包含某字符串的过滤数组
 * @param {*} arr 
 * @param {*} value 
 */
util.arrayFilter = function (arr, value) {
  let newArr = new Array()
  arr.forEach(item => {
    let flag = false
    for (let key in item) {
      if (item[key].length > 0) {
        if (item[key].toString().toLowerCase().indexOf(value.toLowerCase()) != -1) {
          newArr.push(item)
          break;
        }
      }
    }
  })
  return newArr
}
util.groupArray = function (arr) {
  var map = {},
    dest = [];
  for (var i = 0; i < arr.length; i++) {
    var ai = arr[i];
    if (!map[ai.category_id_first]) {
      dest.push({
        id: ai.category_id_first,
        name: ai.category_name_first,
        data: [ai]
      });
      map[ai.category_id_first] = ai;
    } else {
      for (var j = 0; j < dest.length; j++) {
        var dj = dest[j];
        if (dj.id == ai.category_id_first) {
          dj.data.push(ai);
          break;
        }
      }
    }
  }
  return dest
}
export default util
