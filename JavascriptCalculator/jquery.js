$(document).ready(function(){
  let expression = "";
  console.clear();
  
  function checkDigitCount(expr) {
    if(expr.length < 15){
      return true;
    } else {
      return false;
    }
  }
  
  function findResult(expr) {
    let numsArr;
    let result = 0;
    let expression = expr;

    // Evaluate multiplication and division
    let regex = /(\-)?(\d+|\d+\.\d+)(\/|\*)(\-)?(\d+(\.\d+)?)/;
    let multDiv = expr.match(regex);
    console.log(multDiv);
    
    while(multDiv != null) {
      numsArr = multDiv[0].split(/(\*|\/)/);
      
      result = eval(multDiv[0]);
      
      // add result back into string
      expression = expression.replace(multDiv[0], result);
      
      // check if more needed
      multDiv = expression.match(regex);
    }
    
    // Evaluate addition and subtraction
    let reg = /^[+-]?(\d+|\d+\.\d+)(\+|\-)[+-]?(\d+(\.\d+)?)/;
    let addSub = expression.match(reg);
    console.log(addSub);

    while(addSub != null) {
      result = eval(addSub[0]);
      
      // add result back into string
      expression = expression.replace(addSub[0], result);
      
      // check if more needed
      addSub = expression.match(reg);
    }

    return expression;
  }
  
  function limitMet(expression) {
    $("#display-value").text("Limit met!");
    setTimeout(function(){ $("#display-value").text(expression);  }, 1000);
  }

  // **** Handle Button Clicks ****
  $("button").click(function(e){
    let btnId = e.target.id;
    expression = $("#display-value").text();
    
    if(expression.length == 1 && expression == "0" && btnId != "decimal")
      $("#display-value").text("");
    
    switch(btnId) {
      case "clear":
        $("#display-value").text("0");
        break;
      case "divide":
        if(checkDigitCount(expression)){
          if(expression !== "0"){
            
            if(isNaN(expression[expression.length-1]) && expression[expression.length-1] !== "-") {
              $("#display-value").text(expression.slice(0,expression.length-1).concat("/"));
            } else if(expression[expression.length-1] === "-"){
                if(expression.length >= 2 && isNaN(expression[expression.length-2]))
                  $("#display-value").text(expression.slice(0,expression.length-2).concat("/"));
                else
                  $("#display-value").text(expression.slice(0,expression.length-1).concat("/"));     
            } else {
              $("#display-value").append("/");
            }
            
          } else {
            $("#display-value").text(expression);
          } 
          
        }else {
          limitMet(expression);       
        }
        break;
      case "multiply":
        if(checkDigitCount(expression)){
          if(expression !== "0"){
            
            if(isNaN(expression[expression.length-1]) && expression[expression.length-1] !== "-") {
              $("#display-value").text(expression.slice(0,expression.length-1).concat("*"));
            } else if(expression[expression.length-1] === "-"){
                if(expression.length >= 2 && isNaN(expression[expression.length-2]))
                  $("#display-value").text(expression.slice(0,expression.length-2).concat("*"));
                else
                  $("#display-value").text(expression.slice(0,expression.length-1).concat("*"));     
            } else {
              $("#display-value").append("*");
            }
            
          } else {
            $("#display-value").text(expression);
          } 
        } else {
          limitMet(expression);
        }
        break;
      case "seven":
        if(checkDigitCount(expression)){
          $("#display-value").append("7");
        } else {
          limitMet(expression);
        }
        break;
      case "eight":
        if(checkDigitCount(expression)){
          $("#display-value").append("8");
        } else {
          limitMet(expression);
        }
        break;
      case "nine":
        if(checkDigitCount(expression)){
          $("#display-value").append("9");
        } else {
          limitMet(expression);
        }
        break;
      case "subtract":
        if(checkDigitCount(expression)){
          if(expression[expression.length-1] !== "-")
            $("#display-value").append("-");
          else
            $("#display-value").text(expression);
        } else {
          limitMet(expression);
        }
        break;
      case "four":
        if(checkDigitCount(expression)){
          $("#display-value").append("4");
        } else {
          limitMet(expression);
        }
        break;
      case "five":
        if(checkDigitCount(expression)){
          $("#display-value").append("5");
        } else {
          limitMet(expression);
        }
        break;
      case "six":
        if(checkDigitCount(expression)){
          $("#display-value").append("6");
        } else {
          limitMet(expression);
        }
        break;
      case "add":
        if(checkDigitCount(expression)){

          if(isNaN(expression[expression.length-1]) && expression[expression.length-1] !== "-") {
              $("#display-value").text(expression.slice(0,expression.length-1).concat("+"));
            } else if(expression[expression.length-1] === "-"){
                if(expression.length >= 2 && isNaN(expression[expression.length-2]))
                  $("#display-value").text(expression.slice(0,expression.length-2).concat("+"));
                else
                  $("#display-value").text(expression.slice(0,expression.length-1).concat("+"));     
            } else {
              $("#display-value").append("+");
            }

        } else {
          limitMet(expression);
        }
        break;
      case "one":
        if(checkDigitCount(expression)){
          $("#display-value").append("1");
        } else {
          limitMet(expression);
        }
        break;
      case "two":
        if(checkDigitCount(expression)){
          $("#display-value").append("2");
        } else {
          limitMet(expression);
        }
        break;
      case "three":
        if(checkDigitCount(expression)){
          $("#display-value").append("3");
        } else {
          limitMet(expression);
        }
        break;
      case "zero":
        if(checkDigitCount(expression)){
          $("#display-value").append("0");
        } else {
          limitMet(expression);
        }
        break;
      case "decimal":
        if(checkDigitCount(expression)){
          let num = expression.match(/(\d+(\.\d+)?)$/);
          if(num !== null && !num[0].includes("."))
            $("#display-value").append(".");
        } else {
          limitMet(expression);
        }
        break;
      case "equals":
        $("#display-value").text(findResult(expression));
        break;
    }
    
  });

});