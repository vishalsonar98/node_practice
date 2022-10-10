const http = require('http');

http.createServer((req,res)=>{
    if (req.url==="/") {
        res.write('hello there');
        res.end();
    }
    else
    {
        res.write("Enter valid url");
        res.end();
    }
}).listen(8085,()=>{
    console.log('listing 8085 port');
});
