const isR18Plus = (age) => {
    
    const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
        // resolutionFunc(777);
        if(age>18) {
            setTimeout(() => {
                resolutionFunc("anda sudah dewasa");    
            }, 1000);
            
        }
        else if(age<18) {
            setTimeout(() => {
                resolutionFunc("anda masih dibawah umur");    
            }, 1000);
        }
    });

// console.log(promiseA);
return promiseA;
}

const printR18Plus = async () => {
  const underAge = await isR18Plus(10);
  const properAge = await isR18Plus(19);

  console.log(underAge);
  console.log(properAge);
}

printR18Plus();