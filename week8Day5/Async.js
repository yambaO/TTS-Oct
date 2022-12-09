	
function getRandomNumber() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('48937493');
      }, 5000);
    });
  }
  
  async function asyncCall() {
    console.log('Awaiting for the radom number');
    const result = await getRandomNumber();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
  