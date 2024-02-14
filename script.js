/* 
async function foo() {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const res = await data.json();
  console.log(res);
}
foo(); 
*/

//---------------------------------------------------------------

// using Try and Catch in Async Await

async function foo() {
  try {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const res = await data.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
foo();

//----------------------------------------------------------------
