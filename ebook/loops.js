var str = 'EVEN NUMBERS'
console.log(str)
for(i=0;i<=100;i++){

    if(i%2==0){
        console.log(i)
    }

}
var str1 = 'ODD NUMBERS'
console.log(str1)

for(j=0;j<=100;j++){
    if(j%2!==0){
        console.log(j)
    }
}

//sum,
let sum = 0
for(k=0;k<=100;k++){
   sum+= k
   
}
    console.log('the sum of all numbers is'  + sum)
 
//sum of even   
 let sum1 =0
 for(a=2;a<=100;a+=2){
    sum1+= a
 }
console.log('the sum of even numbers is'  + sum1)

//sum of odd
let sum2 =0
for(b=1;b<=100;b+=1){
    if(b%2!==0)
    sum2+= b
}
    console.log('the sum of odd numbers is'  +sum2)

//ARRAY
var ar1 = [2550]
var ar2 = [2500]
console.log(ar1.concat(ar2))

//countries
var countries= ["ALBANIA","BOLIVIA",'CANADA',"DENMARK","ETHOPISA","FINLAND","GERMANY","HUNGARY","IRELAND","JAPAN","KENYA"]
var lengthArray = countries.map(str =>str.length)
console.log(lengthArray)


//biggest
var biggest = countries.filter(word =>word.length==8)
console.log(biggest)
var words = countries.filter(words =>words.length == 5)
console.log(words)
 

//reverse
for( let n = countries.length-1;n>=0;n--){
    console.log(countries[n])
}
 
