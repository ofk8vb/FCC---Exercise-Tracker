import express,{Request,Response} from 'express';
import {findUserById} from '../models/user';
import { findExercisesByUserId } from '../models/exercise';



const router = express.Router();

router.get('/api/exercise/log/',(req:Request,res:Response)=>{
    const {userId,from,to,limit} =req.query;
    
    //@ts-ignore
    const user=findUserById(userId);
    if(!user){
        res.send('user not found!');
    }
   
    let count;
    //@ts-ignore
    const exercises = findExercisesByUserId(userId);
    
    count = exercises.length;
    let log=exercises.map((exercise:any)=>exercise.log);
  
    if(from){
        log=log.filter((exercise:any)=>
            //@ts-ignore
            (exercise.date).getTime()>new Date(from).getTime()
        )
    }
   
    if(to){
        //@ts-ignore
        log=log.filter((exercise:any)=>(exercise.date).getTime() < new Date(to).getTime())
    }
   
    if(limit){
        log = log.slice(0,Number(limit) >log.length?log.length:Number(limit))
    }
   
    res.json({_id:user._id,username:user.username,count,log});
    
})

export {router as LogRouter}