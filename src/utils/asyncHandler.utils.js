const asyncHandlers = (requestHandlers)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandlers(req,res,next)).catch((error)=>{next(error)})
    }
}
export {asyncHandlers}