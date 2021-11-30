do {
    
    var a = +prompt('Введите число')

} while (isNaN(a) ||  a == 0 );


var b = +prompt( 'Введите степень');


let w = 1


if (b == 0 || isNaN(b)){
    w = a * a

}else{
     
    for( let i = 1; i <= b ; i++){
       w = w * a
}
}

alert(w)