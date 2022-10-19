// const intervalId=setInterval(()=> console.log("this is time interval of 2 sec."),1000)
setTimeout(()=> console.log("timeout of 1.5 sec."),1500);
var flag=0;
const intervalId = setInterval(() => {
    console.log("interval phrase...");
    flag++;
    if (flag === 5) {
        console.log("process completed");
        clearInterval(intervalId);
    }
}, 1000);
