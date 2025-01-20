
function makeid(l) {
    // write your code here
      let result ="";
      let char='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charLength=char.length;
      for(let i=0;i<l;i++)
      {
          let randIndex=Math.floor(Math.random()*charLength);	
          
		  result=result+char[randIndex];
      }
      return result;
  }
  
  // Do not change the code below.
  const l = prompt("Enter a number.");
  alert(makeid(l));

