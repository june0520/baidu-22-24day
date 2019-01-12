window.onload = function(){
    var radioA = document.querySelector('#radio-a')
    var radioB = document.querySelector('#radio-b')
    var textA = document.querySelector('#str-a')
    var textB = document.querySelector('#str-b')
    var numA = document.querySelector('#num-a')
    var numB = document.querySelector('#num-b')
    var p = document.querySelector('#result2')
    var btn = document.querySelector('#textBtn')
    btn.addEventListener('click',function(e){
        var e = e || window.event;
        var target = e.target || e.srcElement;
        var str1 = textA.value;
        var str2 = textB.value;
        var num1 = numA.value;
        var num2 = numB.value;
        if(target.nodeName.toLowerCase()==="button"){
            switch (target.id){

                // 获取当前选中输入的内容长度
                case "btn1":
            
                console.log("btn1")
        
                p.innerHTML = radioA.checked? str1.length : str2.length;
                break;

                // 当前选中输入中的第3个字符
                case "btn2":
                console.log("btn2")
                p.innerHTML = radioA.checked? str1[2] : str2[2];
                break;

                // 把两个输入框的文字连接在一起输出（concat）
                case "btn3":
                console.log("btn3")
                p.innerHTML = str1.concat(str2);
                break;

                // 输入B中的内容，在输入A的内容中第一次出现的位置（indexOf）
                case "btn4":
                console.log("btn4")
                p.innerHTML = str1.indexOf(str2);
                break;

                // 输入A中的内容，在输入B的内容中最后一次出现的位置（lastIndexOf）
                case "btn5":
                console.log("btn5")
                p.innerHTML = str2.lastIndexOf(str1);
                break;

                // 使用slice获取选中输入框内容的部分内容，参数为num-a及num-b
                case "btn6":
                console.log("btn6")
                p.innerHTML = radioA.checked ? str1.slice(num1,num2) :str2.slice(num1,num2) ;
                break;

                // 当前选中输入框的行数
                case "btn7":
                console.log("btn7")
                p.innerHTML = radioA.checked ? str1.split(/\r?\n/).length :str2.split(/\r?\n/).length ;
                break;

                // 使用substr获取选中输入框内容的子字符串，参数为num-a及num-b
                case "btn8":
                console.log("btn8")
                p.innerHTML = radioA.checked ? str1.substr(num1,num2) :str2.substr(num1,num2) ;
                break;

                // 把所选输入框中的内容全部转为大写
                case "btn9":
                console.log("btn9")
                p.innerHTML = radioA.checked ? str1.toUpperCase() :str2.toUpperCase();
                break;

                // 把所选输入框中的内容全部转为小写
                case "btn10":
                console.log("btn10")
                p.innerHTML = radioA.checked ? str1.toLowerCase() :str2.toLowerCase();
                break;

                // 把所选输入框中内容的半角空格全部去除
                case "btn11":
                console.log("btn11")
                p.innerHTML = radioA.checked ? str1.replace(/\s/g,'') :str2.replace(/\s/g,'');
                break;

                // 把所选输入框中内容的a全部替换成另外一个输入框中的内容
                case "btn12":
                console.log("btn12")
                p.innerHTML = radioA.checked ? str1.replace(/a/g,str2): str2.replace(/a/g,str1);
                break;

            }
        }

    })


 






















}