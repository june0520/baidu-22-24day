window.onload = function(){
    var numA = document.querySelector('#num-a');
    var numB = document.querySelector('#num-b');
    var btn = document.querySelector('#btn');
    var result = document.querySelector('#result1');
    var radioA = document.querySelector('#radio-a');
    var radioB = document.querySelector('#radio-b');
    
    btn.addEventListener('click',function(e){
        var e = e || window.event;
        var target = e.target || e.srcElement;
        var val1 = numA.value*1;
        var val2 = numB.value*1;
 
        if(target.nodeName.toLowerCase()==='button'){
            switch (target.id){
                case "btn1":
                console.log("btn1")
                if(radioA.checked){
                    result.innerHTML = isNaN(val1)?"请输入正确的数字1":"乖乖1"
                 
                } else {
                    result.innerHTML = isNaN(val2)?"请输入正确的数字2":"乖乖2"
                }
                break;

                case "btn2":
                console.log("btn2")

                if(isNaN(val1) || isNaN(val2)){
                    result.innerHTML = '请输入正确的数字'
                } else {
                    out = val1.toFixed(val2)
                    result.innerHTML = out
                }
                break;

                case "btn3":
                console.log("btn3")
                if(radioA.checked){
                    result.innerHTML = isNaN(val1)?"请输入正确的数字1": Math.abs(val2)
                 
                } else {
                    result.innerHTML = isNaN(val2)?"请输入正确的数字2": Math.abs(val2)
                }
                break;

                case "btn4":
                console.log("btn4")
                if(radioA.checked){
                    result.innerHTML = isNaN(val1)?"请输入正确的数字1": Math.ceil(val1)
                 
                } else {
                    result.innerHTML = isNaN(val2)?"请输入正确的数字2": Math.ceil(val2)
                }
                break;

                case "btn5":
                console.log("btn5")
                if(radioA.checked){
                    result.innerHTML = isNaN(val1)?"请输入正确的数字1": Math.floor(val1)
                 
                } else {
                    result.innerHTML = isNaN(val2)?"请输入正确的数字2": Math.floor(val2)
                }
                break;

                case "btn6":
                console.log("btn6")
                if(radioA.checked){
                    result.innerHTML = isNaN(val1)?"请输入正确的数字1": Math.round(val1)
                 
                } else {
                    result.innerHTML = isNaN(val2)?"请输入正确的数字2": Math.round(val2)
                }
                break;

                case "btn7":
                if(isNaN(val1) || isNaN(val2)){
                    result.innerHTML = '请输入正确的数字'
                } else {
                    out = Math.max(val1,val2)
                    result.innerHTML = out
                }
                break;
    
                case "btn8":
                if(isNaN(val1) || isNaN(val2)){
                    result.innerHTML = '请输入正确的数字'
                } else {
                    out = Math.min(val1,val2)
                    result.innerHTML = out
                }
                break;



            }
        }        
    })
}