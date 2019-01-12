// -------------------------------------------------------数字的升序降序排列---------------------------------
var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];
//将上面数组分别按从大到小以及从小到大进行排序后在console中输出

arr.sort((a,b)=> b-a)//降序
arr.sort((a,b)=> a-b);//升序

// console.log(arr)

// -------------------------------------------------------字符串的升序降序-----------------------------------
var arr1 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
//将上面数组分别按字母顺序a-z及z-a进行排序，在console中输出

arr1.sort()//a-z排序
arr1.sort(function(a,b){   //降序
    if(a<b){
    return 1;
    }
    if(a>b){
    return -1;
    }
    return 0;
})
// console.log(arr1)

// -------------------------------------------------------利用map映射改善排序，基本思想是首先将数组中的每个元素比较的实际值取出来，排序后再将数组恢复---------------------------------

var arr2 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
// 将上面的二维数组，按照每个元素中第二个数从大到小的顺序进行排序输出，输出结果应该为：
// [[22, 63], [16, 60], [7, 44], [26, 35], [10, 14]]
// 基本思想是首先将数组中的每个元素比较的实际值取出来，排序后再将数组恢复。

// 对需要排序的数字和位置的临时存储
var mapped = arr2.map(function(item,i){
    return {'index':i,'ele': item}
})

// 按照多个值排序数组
mapped.sort(function(a,b){
    if(a.ele[1]<b.ele[1]){
        return 1;
    }
    if(a.ele[1]>b.ele[1]){
        return -1
    }
    return 0;
  
})

// 根据索引得到排序的结果
var result = mapped.map(function(item){
    return arr2[item.index]
})
// console.log(result)

// ---------------------------------------------------------分割线-------------------------------------------
var arr3 = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
//将上面数组分别按元素对象的value值从小到大进行排序后输出
arr3.sort(function(a,b){
    var val1 = a.value;
    var val2 = b.value;
    return val1-val2;
})
// console.log(arr3)

// ---------------------------------------------------------分割线--学习通用的数据用不同的数据结构进行存储，以及相互的转换-----------------------------------------
/* 
*对象转为数组：
*如有一个用来存储学习成绩的对象，编写一个函数，将其转为如下的二维数组
*var scoreArray = [
    ["Tony", 95, 79, 68],
    ……
*];
*/

var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}
function objToArr(obj){
    var scoreArray = [];
    var i = 0;
    for (let pro in obj){
        var inArr = [];
        inArr.push(pro)
        for(let j in obj[pro]){
            inArr.push(obj[pro][j])
        }
        scoreArray[i] = inArr;

        i++
    }
    return scoreArray

}
// console.log(objToArr(scoreObject))
// ---------------------------------------------------------分割线-------------------------------------
//数组转为对象：

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];
//如上有一个用来存储多级菜单数据的数组，编写一个函数，将其转为如下的对象


// function arrToObj1(arr){
//     var result = {}
//     for (let item of arr){
//         if (item[2]===-1){
//             result[item[0]] = {}
//             result[item[0]].name = item[1]
//         } else {
//             for(var x of arr){
//                 if(x[0]===item[2]){
//                     let obj = {};
//                     obj[x[0]].name = item[1]
//                     obj[x[0]].subMenu = {}
//                 }
//             }
          

//         }
//     }

//     return result
      
// }



// var menuObject = {
//     "1": {
//         name: "Area1",
//         subMenu: {
//             "3": {
//                 name: "Area1-1"
//             },
//             "4": {
//                 name: "Area1-2",
//                 subMenu: {
    //                     "7": {
    //                         name: "Area1-2-3"
    //                     }
//                 }
//             }
//         }
//     }

//     ……

// }

    //数组转为对象：
    var menuArr = [
        //[key， key.name的值，父级key（如不存在则为-1）]
        [1, "Area1", -1],
        [2, "Area2", -1],
        [3, "Area1-1", 1],
        [4, "Area1-2", 1],
        [5, "Area2-1", 2],
        [6, "Area2-2", 2],
        [7, "Area1-2-3", 4],
        [8, "Area2-2-1", 6],
    ];

    function makeObj(item, arr){
        var objSelf = {};
        // 创建子对象变量便于理解，也可简化
        // var objChild = {}
        objSelf.name = item[1];
        // 判断是否有子集    
        for(let item2 of arr){
            if(item[0] == item2[2]){
               
                objSelf.subMenu = {};
               
                // objChild = makeObj(item2);
                // objSelf.subMenu[String(item2[0])] = objChild;
                objSelf.subMenu[item2[0]] = makeObj(item2, arr);
            }
        }
        return objSelf;
    }
    function arrToObj(arr){
        var obj = {};
        // 创建子集的循环函数
        
        // 判断是否为根元素
        for(let value of arr){
            if(value[2] < 0){  
                obj[value[0]] = makeObj(value, arr);  
            }
        }
        return obj;      
    }
    console.log("数组转为对象：");
    console.log(arrToObj(menuArr));