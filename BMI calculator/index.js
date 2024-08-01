




function cal(){
      let high= document.querySelector("#high").value;
      let weight = document.querySelector("#weigh").value;

      let bmi =   ( parseFloat( high) / (parseFloat( weight)  *  parseFloat( weight) ) );

      document.querySelector(".result").innerHTML = " Your BMI is " +bmi;

            


     


}



document.querySelector("button ").addEventListener("click", function(){
    

    cal();
    });






