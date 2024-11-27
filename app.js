"use strict";

const account1 = {
  owner: "Mark Shmedtman",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, /// %
  pin: 1111,
};

const account2 = {
  owner: "jessica davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5, /// %
  pin: 2222,
};

const account3 = {
  owner: "steven Thomas williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460, 100, -400],
  interestRate: 0.7, /// %
  pin: 3333,
};

const account4 = {
  owner: "sarah smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1, /// %
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//////import elements ::
const movementContainer = document.querySelector(".left");
const balanceAmount = document.querySelector(".amount")
// console.log(movementContainer)
// const html = movementContainer.innerHTML
// console.log("html" , html)
// const text = movementContainer.textContent
// console.log("text : ", text)

const displayMovements = function (movements) {
  movementContainer.innerHTML = "";

  movements.forEach(function (mov, i) {
    let type = mov > 0 ? "deposit" : "withdrow";
    let html = `
               <div class="${type}-info">
            <div class="${type}">
              <span class="${type}-counter">${i + 1} ${type}</span>
            </div>
            <p class="${type}-money">
              ${mov} <i class="fa-solid fa-euro-sign"></i>
            </p>
          </div>
     `;

    movementContainer.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);


// [200, 450, -400, 3000, -650, -130, 70, 1300]

///// alt gr + e  === > €
const displayBalance = function (movements){      
 const balance = movements.reduce((acc,mov)=> acc + mov , 0) 
 balanceAmount.textContent = `${balance} €`  

}

// const displayBalance = function (movements){      
//   const balance = movements.reduce(function (acc,mov){ return acc + mov  },0) 
//   balanceAmount.textContent = `${balance} €`
 
//  }


displayBalance(account1.movements)


















//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////lectures :::::::::::::::///////////////////////////////////////////////////

// const arr = [3, 1, 4, 3, 2];

///// with map (using callback function)::::
// const result = arr.map(function(curr){
// return curr*2
// })

// console.log(arr)
// console.log(result)

///// with map (using arrow function)::::

// const result = arr.map(curr=> curr*2)
// console.log(result)

//// with forEach ::::
// const result =[]
// arr.forEach(function(ele){
//    result.push(ele*2)
// })

// console.log(result)

///// exemple ::
///// with map :::::
// const toDinarTunisien = 3.32 ;
// const euro = [100,50,10,5,25]

// const dinar = euro.map(curr=>curr*toDinarTunisien)

// console.log(euro)
// console.log(dinar)

//// with for ::::
// const toDinarTunisien = 3.32 ;
// const euro = [100,50,10,5,25]
// const dinar = []

// for (const ele of euro) {
//     dinar.push(ele*toDinarTunisien)
// }
// console.log(euro)
//  console.log(dinar)

/////////// second exemple :: :

// const movementss = [100,-50,10,230,-500,40] ;

// const movementsDescription = movementss.map((ele,i)=>{
//     const message = ele>0 ? "deposit" : "withdrow"
//     console.log(`movement${i+1} : you ${message} ${ele}`)
// } )

// const user = "STEVEN THOMAS WILLIAMS"; /// ===>stw
// //// split transformation from string to array
// //// join transformation from an array to string

// const userName = user
//   .toLocaleLowerCase()
//   ///// steven thomas williams
//   .split(" ")
//   ///// ["steven", "thomas", "williams"]
//   .map((name) => name[0])
//   ///// ["s", "t", "w"]
//   .join("");
//    ///// stw
// console.log(userName);


////// filter //////////////////// :::: 


// const numbers = [3,1,4,3,2] ; 

//// with callback function ::: 

// const numbersGreaterThanTwo = numbers.filter(function(ele){
//    return ele > 2 
// })

// console.log(numbers)
// console.log(numbersGreaterThanTwo)

/// with arrow function ::: 
// const numbersGreaterThanTwo = numbers.filter(ele=> ele >2 )
// console.log(numbersGreaterThanTwo)


////// with for loop ::: 
// const numbersGreaterThanTwo = [] ; 

// for (let i = 0 ; i<numbers.length ; i++) {
//      if (numbers[i]>2){
//         numbersGreaterThanTwo.push(numbers[i])
//      }
// }

// console.log(numbersGreaterThanTwo)


///// second exemple (filter) :::: 

// const movementss = [100,-50,10,230,-500,40] 

// const deposit = movementss.filter(ele=>ele>0)
// console.log(deposit)  


// const withdraw = movementss.filter(ele=>ele<0)
// console.log(withdraw)  


///////// reduce ///////////// ::: 

// const numbers = [3,1,4,3,2] ; 

// const result = numbers.reduce(function(acc,ele){
// return acc+ele 
// },0)


// console.log(result) ; 

////// with simple forEach ::: 

//  let sum = 0 ; 
  
// numbers.forEach(function(ele){
// //  sum = sum + ele
// sum+=ele
// })

// console.log(sum)
///// 3 +  0 acc ===> 3 
///// 3 +1 acc ===> 4 ; 
////// 4 + 4 acc ===> 8 ; 
////// 8 + 3 acc ===> 11 ;
////// 11 + 2 acc ===> 13 ;


//////// get max using reduce ::: 

  const numbers = [-10,-50,-300,-50,-1000,-200,-2000] ; 

  const max = numbers.reduce((acc,num)=>{
   console.log(acc)
   if(acc>num) return acc ; 
   else return num ;

  },numbers[0])

///// 10 > 10 ==== > return num ==> 10  ====> acc = 10 ;
///// ===> return 50 ====> acc = 50 ; 
///// acc ===> 300 ; 
///// acc ===> 300
  console.log(max)