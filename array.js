/*基于以上代码，实现如按钮中描述的功能：

*实现如阅读材料中，队列的相关入队、出队、获取队头、判空的操作
*队头对应数组中最后一个元素
*入队和出队操作后，需要在 id 为 queue-cont 的 p 标签中更新显示队列中的内容，队头在最右侧，中间用 -> 连接（练习使用数组的join方法）
*/
window.onload = function(){
    // --------------------------队列变量---------------------------

    var text = document.querySelector('#queue-input')
    var p = document.querySelector('#queue-cont')
    var btn = document.querySelector('#con')
    var queue = ["apple", "pear"];
    var queue2 = ["apple", "pear"];

    
    // --------------------------栈变量---------------------------
    var btn2 = document.querySelector('#con2')
    var text2 = document.querySelector('#stack-input')
    var p2 = document.querySelector('#stack-cont')

    
    // --------------------------队列事件---------------------------
    btn.addEventListener('click',function(e){
        var e = e || window.event
        var target = e.target || e.srcElement;
        var val = text.value
        if(target.nodeName.toLowerCase()==="button"){
            switch (target.id){

                // 入队
                case 'in-btn':
                console.log("btn1")
                queue.push(val)//右侧入队列
                // queue.unshift(val)//左侧入队列


                p.innerHTML = queue.join('->')
                break;

                // 出队
                case 'out-btn':
                console.log("btn2")
                queue.shift()//左侧出队列
                // queue.pop()//右侧出队列
                p.innerHTML = queue.join('->')
                break;

                // 打印队头元素内容
                case 'font-btn':
                console.log("btn3")
                p.innerHTML = queue[queue.length-1]
                break;
                
                // 打印队头元素内容
                case 'empty-btn':
                console.log("btn4")
                p.innerHTML = queue.length ? "继续" : "empty"
                break;

                
            }
        }


    })

    // --------------------------栈事件---------------------------
    btn2.addEventListener('click',function(e){
        var e = e || window.event;
        var target = e.target || e.srcElement;
        var val = text2.value;
        if(target.nodeName.toLowerCase() === ('button')){
            switch (target.id){
                //入栈
                case 'push-btn' :
                console.log('btn11')
                // queue2.push(val)//右侧入栈
                queue2.unshift(val)//左侧入栈
                p2.innerHTML = queue2.join('->')
                break;

                //出栈
                case 'pop-btn' :
                console.log('btn22')
                // queue2.pop()//右侧出栈
                queue2.shift()//左侧入栈
                p2.innerHTML = queue2.join('->')
                break;

                
                //打印栈顶元素内容
                case 'font-btn' :
                console.log('btn33')
                p2.innerHTML = queue2[queue2.length-1]
                break;

                
                //判断栈是否为空
                case 'empty-btn' :
                console.log('btn44')
                p2.innerHTML = queue2.length ? "继续" : 'empty'
                break;


            }

        }

    })

}