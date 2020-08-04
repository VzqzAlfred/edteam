//          Uso del FOR

//          Número par e impar 
/*
    for(let i=0; i<101; i++){
        if(i%2 === 0 ){
            console.log(`El número ${i} es par`)
        }else{
            console.log(`El número ${i} es impar`)
        }
    }
*/
//      Múltiplos de 7

    for(let i=1; i<=100; i++){
        if(i%7 === 0){
            console.log(`El número ${i} es múltiplo de 7`)
        }
        else {
            console.log(`El número ${i} no es múltiplo de 7`)
        }
    }





    //  Uso del break y continue

    // 5 primeros multiplos de 7
let n=0    
for (let j=1; j<=100; j++){
    if(j%7 === 0){
        console.log(j)
        n++
    }
    if(n>=5) break
}


