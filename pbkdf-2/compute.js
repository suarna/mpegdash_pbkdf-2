/*The browserify npm packet is used to derive a bundle file that contains the current file
and all the required libraries merged into a single file that we can call with the script tag 
directly from the html code, the command used is browserify main.js -o bundle_compute.js*/

var crypto = require('pbkdf2');
var prg = require('crypto');

/*Function to compute the KID and the KEY*/

function compute(){
    
var secret = document.getElementById('password').value;
var salt = document.getElementById('salt').value;
console.log(secret);
console.log(salt);

/*Calling the pbkdf2 function to create a KEY */

crypto.pbkdf2(secret, salt , 10000, 16, 'sha512',(err,derivedKey)=>
{
    if (err) throw err;
    console.log(derivedKey.toString('hex')+'--KEY'); 
    document.getElementById('key').innerHTML = `KEY=0x${derivedKey.toString('hex')}`;
  });

/*Calling randomBytes function to create a rabdon KID */

prg.randomBytes(16, (err, buf) => {
    if (err) throw err;
    console.log(`${buf.toString('hex')}--KID`);
    document.getElementById('kid').innerHTML = `KID=0x${buf.toString('hex')}`;
  });
}

/*Calling the compute function when the compute button is clicked*/

var button = document.getElementById('button'); 
var saltfield = document.getElementById('salt');
button.addEventListener("click", compute, false);

/*Clearing the salt field*/

window.addEventListener('load', (event) => {
  this.value = "";
  console.log('The page is loaded');
  saltfield.value = this.value;
  console.log('Fields cleared');
});