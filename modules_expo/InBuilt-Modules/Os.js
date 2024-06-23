const os = require('os');

// *about current user

//const user = os.userInfo();
//console.log(user);

// *Method returns the system uptime in seconds
//console.log(`The system up time in seconds is ${os.uptime()} seconds`);

const currents = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currents);