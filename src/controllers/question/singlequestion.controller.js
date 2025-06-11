import { asyncHandlers } from "../../utils/asyncHandler.utils.js";
import { Question } from "../../models/question.model.js";

const singleQuestion = asyncHandlers( async (req ,res)=>{

    const question = await Question.find().sort({ createdAt: -1 });
    const index = req.params.index;
    res.json(question[index]);
})
export {singleQuestion}