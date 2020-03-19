var p = new Promise(function(resovle, reject){
    setTimeout(function(){
        var val = Math.random();
        if(val > .5){
            resovle(val);
        }
        else{
            reject(val);
        }
    }, 5000);
})

p.then(function(val){
    console.log("success: " + val);
}, function(val){
    console.log("fail: " + val);
})