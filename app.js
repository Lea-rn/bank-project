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
/////////////////////////////////////////////////////////////
//////import elements ::
const movementContainer = document.querySelector(".left");
const balanceAmount = document.querySelector(".amount");
const inn = document.querySelector(".in-value");
const out = document.querySelector(".out-value");
const int = document.querySelector(".interest-value");
const loginUserInput = document.querySelector(".user-input");

const pinUserInput = document.querySelector(".user-pin");

const mainPage = document.querySelector(".app");

const btnLogin = document.querySelector(".arrow");
const welcomeMessage = document.querySelector(".welcome");

////// import transfert element : 
   
const transfertToInput = document.querySelector(".transfer-to-input") ; 
const transfertAmountInput = document.querySelector(".transfer-amount-input") ; 
const transfertButton = document.querySelector(".transfer-btn") ; 

///// import close element :: 
const closeUserInput = document.querySelector(".close-input") ; 
const closePinInput = document.querySelector(".close-pin") ;
const closeButton = document.querySelector(".btn-close") ; 

/// import loan element ::: 


const loanInput = document.querySelector(".loan-input") ; 
const loanButton = document.querySelector(".loan-btn") ; 

////// import sort element :: 
const sortBtn = document.querySelector(".sort") ;









//////////////////////////////////////////////////////////////////////////
// console.log(movementContainer)
// const html = movementContainer.innerHTML
// console.log("html" , html)
// const text = movementContainer.textContent
// console.log("text : ", text)

const displayMovements = function (acc,sort = false) {
  movementContainer.innerHTML = "";
console.log("sort par defaut ," , sort)
  const movs = sort ? acc.movements.slice().sort((a,b)=>a-b) : acc.movements

  movs.forEach(function (mov, i) {
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

// displayMovements(account1.movements);

/////////////// userName new key functionnality :::

const displayUsername = function (accounts) {
  accounts.forEach((acc) => {
    acc.userName = acc.owner ////// SARAH SMITH
      .toLowerCase() //////// sarah smith
      .split(" ") ///// [sarah,smith]
      .map((ele) => ele[0]) //// [s,s]
      .join(""); ////// ss
  });
};

displayUsername(accounts);

// [200, 450, -400, 3000, -650, -130, 70, 1300]

///// alt gr + e  === > €
const displayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  balanceAmount.textContent = `${balance} €`;
  acc.credit = balance ; 
};

// const displayBalance = function (movements){
//   const balance = movements.reduce(function (acc,mov){ return acc + mov  },0)
//   balanceAmount.textContent = `${balance} €`

//  }

// displayBalance(account1.movements);

////// display summary :::

const calcDisplaySummary = function (acc) {
  const inComes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, ele) => acc + ele, 0);
  inn.textContent = `${inComes} €`;

  const outmoney = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, ele) => acc + ele, 0);
  out.textContent = `${Math.abs(outmoney)} €`;

  const intrest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) =>{
      console.log(acc.interestRate)
      return (deposit * acc.interestRate) / 100

    } )
    .filter((ele, i, arr) => {
      // console.log("jey mel map :" , arr)
      return ele > 1;
    })
    .reduce((acc, ele) => acc + ele, 0);
  int.textContent = `${intrest} €`;
};

const updateUi = function (acc){
 displayBalance(acc) ; 
 calcDisplaySummary(acc);
 displayMovements(acc) ; 
}

// calcDisplaySummary(account1.movements);

//////// display login :::
let currentAccount;

btnLogin.addEventListener("click", function () {
  currentAccount = accounts.find(
    (acc) => acc.userName === loginUserInput.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(pinUserInput.value)) {
    welcomeMessage.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    mainPage.style.opacity = 1;
updateUi(currentAccount)
  }
  loginUserInput.value = pinUserInput.value = "" ; 
});


/////// transfert functionnality  :::: 
   
transfertButton.addEventListener("click",function(event){
event.preventDefault(); 
////// balance of current user >= amount to transfert & reciver should be true & 
// reciver should be differnt of current user & amount differnet of 0
const reciever = accounts.find((acc)=>acc.userName === transfertToInput.value)

const amount = Number(transfertAmountInput.value) ;
const balance = currentAccount.credit
if (balance>=amount && reciever && reciever.userName !== currentAccount.userName && amount >0 ){
  currentAccount.movements.push(-amount) ; 
  reciever.movements.push(amount) ; 
updateUi(currentAccount)
}
transfertToInput.value = transfertAmountInput.value = "" ; 


})



///// loan functionnality ::: 
loanButton.addEventListener("click",function(){
const amount = Number(loanInput.value) ; 
 


if (amount > 0  && currentAccount.movements.some((ele)=> ele > 0.1*amount)){

currentAccount.movements.push(amount) ; 
updateUi(currentAccount)
}
loanInput.value = "" ; 
})


////// close functionnality :: 

closeButton.addEventListener("click",function(e){
  e.preventDefault();
 const accountToClose = closeUserInput.value ; 
 const accountPinToClose = Number(closePinInput.value) ; 
 if (currentAccount.userName === accountToClose && currentAccount.pin === accountPinToClose){

  const index = accounts.findIndex((ele)=>ele.userName === accountToClose)

  accounts.splice(index,1)
  mainPage.style.opacity = 0 ; 
  welcomeMessage.textContent = "log in to get started" ; 
 }
  closeUserInput.value = closeUserInput.value = "" ; 

})

///// sort functionnality :: 
let sorted = false ; 

sortBtn.addEventListener("click",function(){
  console.log("sorted value :" ,sorted) ; 
displayMovements(currentAccount, !sorted )
sorted = !sorted ; 
})

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

// const numbers = [-10,-50,-300,-50,-1000,-200,-2000] ;

// const max = numbers.reduce((acc,num)=>{
//  console.log(acc)
//  if(acc>num) return acc ;
//  else return num ;

// },numbers[0])

///// 10 > 10 ==== > return num ==> 10  ====> acc = 10 ;
///// ===> return 50 ====> acc = 50 ;
///// acc ===> 300 ;
///// acc ===> 300
// console.log(max)

////////// chaining -- pipeline

//  const movements = [100,-200,500,-80,600] ;
//   const eurToDinar = 3.3 ;
///// sum of deposit on tunisian dinar

//  const deposit = movements.filter((ele)=>ele>0)
//  console.log(deposit)

/////// [100,500,600]

//  const depositonDinar = deposit.map((ele)=>ele*eurToDinar)
//  console.log(depositonDinar)

//  const sum = depositonDinar.reduce((acc,ele)=>acc+ele,0)
//  console.log(sum)

//////// with chaining :::

//  const sum = movements.filter((ele)=>ele>0)
//  .map((ele,i,arr)=>{
//   console.log("jey mel filter :" , arr)
//   return ele*eurToDinar
// })
//  .reduce((acc,ele,i,arr)=>{
// console.log("jey mel map:" , arr)
//   return acc+ele
// },0)
//  console.log(sum)

////////////// find ///////////////////////

//  const numbers = [10,20,30,40,20]

//  const result = numbers.find(function(ele,i){
// console.log(i)
//   return ele === 20
//  })

//  console.log(result)

// const dataBase = [
//   {
//     userName: "eya",
//     image: "photo1",
//   },
//   {
//     userName: "marwa",
//     image: "photo2",
//   },
//   {
//     userName: "nessrine",
//     image: "photo3",
//   },
// ];

// const userName =  [] ;
// dataBase.forEach((ele)=>{
//   userName.push(ele.userName)
// })

// console.log(userName)

// const result = dataBase.find((ele)=>ele.image === "photo3")
// console.log(result)

//// ? optional chaining ..



/////// indexof () 

// const arr = [1,23,4] ; 
// const index = arr.indexOf(1) ; 
// console.log("index:",index) ; 


// const index = arr.findIndex((ele)=>ele === 23)
// console.log(index) ; 


// const numbers = [10,2,22,50,100,150] ; 

///// includes ::: 

// console.log(numbers.includes(22))   
// console.log(numbers.includes(220))

///// some and every 

//// some :: 
// const resultt = numbers.some((ele)=>ele > 150 )  //// fama chkoun akber men 150 !!  ; 
// console.log("some result : " , resultt)

///// every ::: 
 
// const result = numbers.every((ele)=>ele>3) ;    ///// les elements el kol akber me 3 !!
// console.log("every::" , result) ; 



////////////// sort /// 

// const names = ["nessrine" , "eya" , "marwa" , "achref"]

// console.log(names) 

// names.sort() ; 

// console.log(names) 


// const numbers  = account1.movements ; 
// console.log(numbers)
// numbers.sort((a,b)=>b-a) ; 
// console.log(numbers) ;