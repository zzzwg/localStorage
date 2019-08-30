var kits = {};
/*
getLocalDataArray(key)  从localStorage里面根据指定的键(key)获取一个数组参数
key：localStorage里面根据根据key存储的数据
@param {string} key 存储在localStorage里面数据对应的键
@returns {Array} 以数组形式返回 key里面储存的数据
*/
kits.getLocalDataArray = function(key) {
    var json = localStorage.getItem(key);
    var arr = JSON.parse(json);
    return arr;
}

/*
 saveLocalDataArray(key,arr)   将一个数组(arr)以指定的键(key)存储到localStorage里面参数
key：localStorage里面根据根据key存储的数据
arr: 要存入localStorage的key里面的数据
 */
kits.saveLocalDataArray = function(key, arr) {
        let json = JSON.stringify(arr);
        localStorage.setItem(key, json);
    }
    /*
     * 向localStorage里面指定键(key)的数组数据追加一个数据对象（data）参数
     */
kits.appendDataIntoArray = function(key, obj) {
        let oldArr = tool.getLocalDataArray(key);
        oldArr.push(obj);
        arr = JSON.stringify(oldArr);
        localStorage.setItem(key, arr);
    }
    /**
     * 根据对应的id从localStorage中指定键(key)的数组中删除一条数据参数
     */
kits.deleteLocalDataById = function(key, id) {
    // let oldArr = tool.getLocalDataArray(key);
    let oldArr = this.getLocalDataArray(key);
    oldArr.forEach((e, i) => {
            if (e.id === id) {
                oldArr.splice(i, 1);
                return;
            }
        })
        // kits.saveLocalDataArray(key, oldArr);
    this.saveLocalDataArray(key, oldArr);
}

/**
 * 根据id修改localStorage里面的指定键(key)的数组数据参数
 */
kits.modifyLocalDataById = function(key, id, data) {
    // let oldArr = kits.getLocalDataArray(key);
    let oldArr = this.getLocalDataArray(key);
    let flag = false;
    oldArr.forEach((e, i) => {
        if (e.id === id) {
            oldArr[i] = data;
            flag = true;
            return;
        }
    })
    this.saveLocalDataArray(key, oldArr);
    return flag;
}