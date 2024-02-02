//Question No :1
//a)
//Anonymous function : 
var arr=[0,1,2,3,4,5,6,7,8,9];

var odd = function () {
  var odd= arr.filter(num => num %2 ==1)
  console.log(odd)
}
odd()
// Output (5) [1,3,5,7,9]

//IIFE Function

(function(array){
for(var i = 0 ; i< array.length ; i++){
if(array[i]%2!=0){
console.log(array) 
} 
} 
})([1,2,3,4,5,6,7,8,9])

// Output (5) [1,3,5,7,9]

// b)
// Anonymous Function
var str = function () {
    var arr = "have a nice day"
    var titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str()
  
  //OUTPUT: Have A Nice Day
  
// IIFE Function
(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
    return str.join(' ');
    })("have a nice dat");
    
    //OUTOUT: Have A Nice Day

 //c)
// Anonymous Function
var func = function () {
 var arr = [1, 2, 3, 4, 5]
 var sum = arr.reduce(function(a, b){
return a + b;
  });
console.log(sum);
}
 func()

//OUTPUT : 15

 // IIFE Function
 var a=[1,2,3,4,5];
var sum=0;
(function (a)
{
   for(var i=0; i<a.length; i++){
 sum=sum+a[i];
}
 return sum;
})(a);

//OUTPUT : 15

//d)
// Anonymous Function
let prime = function (arr) {
return arr.filter(function(n){
 for (let i = 2; i < n; i++) {
if (n % i === 0) return false;
 } 
 return n > 1;
 });
  };
  console.log(prime([7, 16, 9, 3]));

  //OUTPUT: (2) [7,3]

  // IIFE Function
  (function (){
 var primeNum = [7, 16, 9, 3]
primeNum = primeNum.filter(function(number) {
 for (var i = 2; i <= Math.sqrt(number); i++) {
 if (number % i === 0) return false;
}
 return true;
});
 console.log(primeNum);
 })()
    
//OUTPUT: (2) [7,3]

//e)
//Anonymous Function
var isPalindrome = function () {
    var arr = [ 'tomorrrow','racecar', 'malayalam','kite'];
    var arr1 = arr.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(arr[d]);
      }
    });
  }
  isPalindrome()

  //OUTPUT: racecar malayalam

//IIFE Function
( function () {
    var arr = ['tomorrow', 'racecar', 'kite', 'malayalam'];
    var arr1 = arr.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(arr[d]);
      }
    });
  })()
  
  //OUTPUT: racecar malayalam

  //f)
  //Anonymous Function
  var median = function(a, b) {
    var c = [...a,...b].sort((a, b) => a - b);
     const half = c.length / 2 | 0;
    if (c.length % 2) {
      return c[half];
    } else {
       return (c[half] + c[half - 1]) / 2;
    }
    }
    var arr1 = [1, 12, 15, 26, 38,24];
    var arr2 = [2, 13, 17, 30, 45, 47];
    console.log(median(arr1, arr2));
    
    //OUTPUT: 20.5

 //IIFE Function
     ( function() {
     var arr1 = [1, 12, 15, 26, 38,24];
    var arr2 = [2, 13, 17, 30, 45, 47];
     var c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    const half = c.length / 2 | 0;
    if (c.length % 2) {
     console.log(c[half]);
     } else {
    console.log((c[half] + c[half - 1]) / 2);
     }
     })()
        
  //OUTPUT: 20.5

  //g)

  //Anonymous Function
  var Dup = function () {
var arr = [1, 1, 2, 3, 4, 5, 5]
 var dup = []
var temp = [...arr].sort() 
 for (let i = 0; i < temp.length; i++) {
if (temp[i + 1] === temp[i]) {
  dup.push(temp[i])
   }
  }
 console.log(dup) 
 }
 Dup()

//OUTPUT :  [1, 5]

//IIFE Function
(function () {
 var numbers = [1, 2, 3, 2, 4, 5, 5, 6];
 var dup = numbers.filter((item, index) => index !== numbers.indexOf(item));
 console.log(dup);
  })()
  
  //OUTPUT: [2, 5]

  //h)
  //Anonymous Function
   var rotateArray =function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (var i=0; i<K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  }
  rotateArray([1,2,3,4,5],2)
  
//OUTPUT: (5) [4, 5, 1, 2, 3]

// IIFE Function
(function(A, K) {
    if (A.length === K || K === 0) {
   return A;
   }
  K = K % A.length;
    for (var i = 0; i < K; i++) {
     A.unshift(A.pop());
    }
  console.log(A)
  })([1,2,3,4,5],2)
  
  //OUTPUT: (5)[4, 5, 1, 2, 3]

  
//QUESTION NO : 2
 // Arrow Functions
//a)

  

        
    