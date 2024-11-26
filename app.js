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

displayMovements(account3.movements);

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

////// matraja3ech array .... 
//// accumulator ===> snowball

// const numbers = [3,1,4,3,2] ; 
// const sum = numbers.reduce(function(acc,ele,i){
//    return acc*ele
// },1)

// ///36
// // //// 0+3 
// // ////3+1 
// // /// 4+4 
// console.log(sum) ; 


////// exemple with forEach

// const numbers = [3,1,4,3,2] ; 

// let sum = 0 ; 
// numbers.forEach(function(ele){
//   sum+= ele
// })

// console.log(sum) ; 
