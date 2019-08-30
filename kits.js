var kits = {};
//从localStorage里面根据指定的键(key)获取一个数组
kits.getLocalDataArray = function(key) {
    var jsonStr = localStorage.getItem(key);
    var arr = JSON.parse(jsonStr);
    if (!arr) {
        arr = [];
    }
    return arr;
}

//localStorage里面存数据
//localStorage只能存字符串
kits.savelocalDateArray = function(key, arr) {
    let jsonStr = JSON.stringify(arr);
    localStorage.setItem(key, jsonStr);
}

//根据id修改数据
kits.modifylocalDataById = function(jey, id, data) {
    //1把本地的数据取出来
    let arr = this.getLocalDataArray(key);
    //6假设一个返回值是flase，表明没有修改成功
    let flag = false;
    //2遍历数组
    arr.forEach((e, i) => {
            //3判断每一项的id是否和我们传入的id一致
            if (e.id == id) {
                //4找到这项数据进行修改

                arr[i] = data;
                flag = true;
            }
        })
        //5存储修改后的数据
    this.savelocalDateArray(key, arr);
    return flag;
}