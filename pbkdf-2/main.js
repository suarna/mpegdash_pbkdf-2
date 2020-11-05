
var crypto = require('pbkdf2');


/*Function to compute the key from the password */

function compute(){

  var secret = document.getElementById('password').value;
  var salt = "MiguelAngel";
  console.log(secret);
  console.log(salt);

  /*Calling the pbkdf2 function to derive the KEY from the password */
  
  crypto.pbkdf2(secret, salt , 10000, 16, 'sha512',(err,derivedKey)=>
    {
      if (err) throw err;
      console.log(derivedKey.toString('hex')+'--KEY'); 
      document.getElementById('key').value = `${derivedKey.toString('hex')}`;
    });
}


/*Calling the compute function when the compute button is clicked*/

var button = document.getElementById('loadButton');
var key = button.addEventListener("click", compute, false);
console.log(key);

