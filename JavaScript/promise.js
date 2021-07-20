

const func = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok');
    }, 2000);
});

func.then(function(ok) {
    console.log(ok);
    
    return new Promise((resolve,reject) => {
       setTimeout(() => {
           resolve('hi');
       }, 3000);
   })
}).then((ok) => {
    console.log(ok);
});