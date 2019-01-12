var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(a,node) {
    if(!node){
        return;
    }
    if(node.name===a){
        console.log(node.id)
    } else {
        findIdByName(a,node.left)
        findIdByName(a,node.right)
    }

}
// console.log(findIdByName('Fate',tree) )

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(b,node) {
    if(!node){
        return;
    }
    if(node.id===b){
        console.log(node.name)
    } else {
        findNameById(b,node.left)
        findNameById(b,node.right)
    }
}
// console.log(findNameById(8,tree))


// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR(node) {
    if(!node){
        return;
    }
    console.log(node.name)
    getListWithDLR(node.left)
    getListWithDLR(node.right)
}

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR(node) {
    if(!node){
        return;
    }
    getListWithLDR(node.left)
    console.log(node.name)
    getListWithLDR(node.right)
}



// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD(node) {
    if(!node){
        return;
    }

    getListWithLRD(node.left)
    getListWithLRD(node.right)
    console.log(node.name)
}
// console.log(getListWithDLR(tree))
// console.log(getListWithLDR(tree))
// console.log(getListWithLRD(tree))