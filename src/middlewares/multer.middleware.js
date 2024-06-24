import multer from "multer";

// creating the storage 
const storage = multer.diskStorage({
    destination :function(req,file,cb){
        // to store the file in temperory
        cb(null,"./public/temp")
    },
    filename :function (req,file,cb){
        cb(null,file.originalname)
    }
})
export const upload = multer({storage,})
