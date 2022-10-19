const dns = require('dns');

dns.lookup("google.com",(error,value)=>{
    console.log("lookup executing");
    if (error) {
        console.log(error);
    }
    console.log(value);
})

dns.resolve("google.com",(error,value)=>{
    console.log("resolve executing");
    if (error) {
        console.log(error);
    }
    console.log(value);
})

dns.reverse("157.240.237.35",(error,value)=>{
    console.log("reverse executing");
    if (error) {
        console.log(error);
    }
    console.log(value);
})
