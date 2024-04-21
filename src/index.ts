// Middleware is called before or after every request Handler  or an endpoint call
// For Analytics 
// For Redirecting URL 
// FOr Authentication 


import express from "express"
import jwt from "jsonwebtoken"

const app = express()


export default function authMiddleware(req:any, res:any, next:any){
    const token = req.headers.authorization.split(" ");
    const decoded = jwt.verify(token, "secret");
    if(decoded){
        next()
    }
    else{
        res.status(411).send("Unauthorized Access");
    }
}

app.get("/", authMiddleware, (req,res) => {
    res.send("You are logged in");
});

app.listen(3000);

// import express from "express"

// const app = express()
// let requestCount = 0

// export default function(req: any, res:any, next: any){
//     if(req != "favicon.ico"){
//     requestCount++;
//     }
//     next();
// }

// app.get("/", (req,res) => {
//     res.send("Hello World!")
// });

// app.get("/requestCount", (req,res) => {
//     res.json({
//         requestCount
//     })
// })

// app.listen(3000)




