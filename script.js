
 //function problem 5
 function monthlySavings(arr, livingCost) {
      if(Array.isArray(arr) ===false || typeof livingCost !== "number"){
        return "Invalid input"
      }

      //totalIncome calculate
      let totalIncome = 0;
      for( let payment of arr){
        if(payment >= 3000){
          let tax = payment * 0.2;
          totalIncome += payment - tax; 
        }
        else{
          totalIncome += payment;
        }
      }
      let savings = totalIncome - livingCost;
      if(savings >= 0){
        return savings;
      }
      else{
        return "Earn More"
      }
      //return savings >= 0 ? "Save money" : "Earn more";
  }

 console.log(monthlySavings( [1000, 2000, 3000], 5400))
  // let result = console.log(inputValue);
  
 

