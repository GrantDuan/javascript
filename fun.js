//10 以下3的倍数和5的倍数 求和

//500 以下3的倍数和5的倍数 

function SumOfTimes3And5(n){
    let result = 0;
    for(let i = 1; i < n ; i++){
        if(i%3 == 0|| i%5 == 0){
            result += i;
        }
    }
    return result;
}

function SumOfTimes3And5V2(n){
    let result = 0;
    for(let i = n/5; i < n/3 ; i++){    
        result += i * 3;  
    }

    for(let i = n/15; i < n/5 ; i++){    
        result += i * 5;  
        result += i * 3;  
    }

    for(let i = 1; i < n/15 ; i++){    
        result -= i * 15; 
        result += i * 3;   
        result += i * 5;  
    }

    return result;
}