fetch("data.txt").then(response =>response.text()).then(result =>console.log(result)).catch(err => console.log(err));
    
// promises for success and error

let complete = true;
let prom = new Promise(function(resolve,reject){
  if(complete){
    resolve("task was successful.");
  }else{
    reject("task wasnt successful.");
  }
});


function successPromise(result){
    console.log(result);
}


function errorPromise(err){
    console.log(err);
}

prom.then(successPromise).catch(errorPromise);

