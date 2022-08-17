//day 1      
console.log("hello raghav tiwari");

//a.)
//basic declaration of variable
//let ,var(never use it), const

let user_name = "Raghav Tiwari"
user_name = "krishna"  //changable as we have used let
//----------------------------------------------------------------------
//b.)
//when to use semi colon when not-->lexicals

let user_mobile = 3535341553
let is_loggedin = true
/*
LEXICAL STRUCTURE:
It consists of elementry rules for language specification
*/

/*

1. TEXT
JS is a case sensitive language
we cannot start variable name with number

2. COMMENTS: ctrl+/, //, /* write here */

// 3. LITERALS
// numbers, decimals, "string type 1", 'string type 2', boolean, null,boolen
// etc

//4. RESERVED
//return enum
// implements
// inteface
// package
// private
//protected
//public
//etc

//5. UNICODE
console.log("\u00E9");
console.log("\u0301");
//unicode character should be used 
//nacked eyes then look differet but they are same(see the photo 1)
//JS assumes our source code is normalized

//6. SEMICOLON: use it or not, when to use it when to not?
// let game_score = 289

// let 
// game_score 
// = 
// 289
// ;
// console.log(game_score);

// (//this
// return
// true;

// //is treated like this)
// return; true;

//......................................................................
//c.)
//difference between var and let
let testmeLet
var testmeVar

console.log(testmeLet);
//console.log(testmeVar);
//both shows undefined in output


//IS JAVASCRIPT A compiled language and INTERPRET LANGUAGE
//softwareengineering stack site?
//JIT-justin time

