import express,{Request,Response} from 'express';
import {findUserById} from '../models/user';
import {createExercise} from '../models/exercise';
const router = express.Router();

router.post('/api/exercise/add',
(req:Request,res:Response)=>{

    let {userId,description,duration,date}=createExercise(req.body.userId,req.body.description,req.body.duration,req.body.date);
    let user = findUserById(req.body.userId);
    res.json({_id:userId,username:user.username,date,duration:Number(duration),description});
   

   
})

export {router as AddExerciseRouter};