//this function checks if the input field are empty, if so an error will appear

const checkInputs = () =>{
    if(budgetStart.value === ''){
        window.alert('Please fill out all inputs')
    } else if(itemPrice.value === ''){
        window.alert('Please fill out all inputs')
    } else if(itemDescription.value === ''){
        window.alert('Please fill out all inputs')
    }
}

// id for the h4, h5 item price and desscription
const descriptionHeading = document.getElementById('item-description');
const priceHeading = document.getElementById('item-price');


//access input for inputs values, and button for respective input
//id for input
const budgetStart =  document.getElementById('set-budget');

//id for for set budget button
const setButton = document.getElementById('starting-budget');

//id for div for the initial budget
const initalBudget = document.getElementById('inital-budget');
  //id for list
 let listDisplay = document.getElementById('list-item');




//get id for the input for item description and price, as well as the add button
const itemDescription = document.getElementById('description');

const itemPrice = document.getElementById('price');

const addButton = document.getElementById('add-btn');


//id for expense heading
const currentExpense = document.getElementById('expenses-heading');


//id for remaining balance
const remainingBalance = document.getElementById('remaining-budget')


//this line is used to reset all values
const resetAll = document.getElementById('reset-btn');
resetAll.addEventListener('click',function(){
    currentExpense.innerHTML = '';
    initalBudget.innerHTML = '';
    remainingBalance.innerHTML = '';
    budgetStart.value = '';
    itemPrice.value = '';
    itemDescription.value = '';
    descriptionHeading.innerHTML = ''
    priceHeading.innerHTML = ''

})




//array that hold the values expenses and descriptions

let expenseList = [];


//append the starting budget and current expense to inner html
addButton.addEventListener('click', function(){
    checkInputs()
   currentExpense.innerHTML -= parseInt(itemPrice.value);
   initalBudget.innerText = Number(budgetStart.value);



      //add input items into array
      expenseList.push({
        description:  descriptionHeading.innerHTML = itemDescription.value,
        price:  priceHeading.innerHTML = itemPrice.value
    })
})
   

//this object contains the fucntion that will calculate the  inital budget value and current expenses
const calcBudget = {
   calculate : function (budgetStart,itemPrice){
    let budget = parseFloat(budgetStart);
    let expense = parseFloat(itemPrice);
    return budget - expense;
   },
   //update balance function
   updateBalance : function(budgetStart,expenseList){
       let remaining = parseFloat(budgetStart);
       expenseList.forEach(expense => {
        remaining -= parseFloat(expense.price)
       });

   

       return remaining
   }
     }


//this line will set the budget and make the calculations and update the balance
setButton.addEventListener('click',function(){
    let difference = calcBudget.calculate(budgetStart.value, itemPrice.value);
    remainingBalance.innerHTML = difference;


    remainingBalance.innerHTML = calcBudget.updateBalance(budgetStart.value, expenseList);

  
     
})



