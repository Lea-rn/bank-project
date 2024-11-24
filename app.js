"use strict"

const account1 = {
    owner : "Mark Shmedtman" , 
    movements : [200,450,-400,3000,-650,-130,70,1300],
    interestRate  : 1.2  ,   /// %
    pin : 1111
}

const account2 = {
    owner : "jessica davis" , 
    movements : [5000,3400,-150,-790,-3210,-1000,8500,-30],
    interestRate  : 1.5  ,   /// %
    pin : 2222
}

const account3 = {
    owner : "steven Thomas williams" , 
    movements : [200,-200,340,-300,-20,50,400,-460,100,-400],
    interestRate  : 0.7  ,   /// %
    pin : 3333
}

const account4 = {
    owner : "sarah smith" , 
    movements : [430,1000,700,50,90],
    interestRate  : 1  ,   /// %
    pin : 4444
}

const accounts = [account1,account2,account3,account4] ; 

//////import elements :: 
const movementContainer = document.querySelector(".left")
// console.log(movementContainer)
// const html = movementContainer.innerHTML
// console.log("html" , html)
// const text = movementContainer.textContent
// console.log("text : ", text)

const displayMovements = function(movements){

    movementContainer.innerHTML = ""
    
    movements.forEach(function(mov,i){
        let type = mov > 0 ? "deposit" : "withdrow"
     let html = `
               <div class="${type}-info">
            <div class="${type}">
              <span class="${type}-counter">${i+1} ${type}</span>
            </div>
            <p class="${type}-money">
              ${mov} <i class="fa-solid fa-euro-sign"></i>
            </p>
          </div>
     `

     movementContainer.insertAdjacentHTML("afterbegin",html)


    })

}

displayMovements(account3.movements)




const arr = [3,1,4,3,2]
console.log(arr)

const result = arr.map((ele,i)=> ele*2)

console.log(result)


// const result = [] ; 

// for (let i = 0 ; i<arr.length ; i++){
//     result.push(arr[i]*2)
// }
// console.log(result)