import express,{Request,Response} from 'express';
import {createUser} from '../models/user';
const router = express.Router();

router.post('/api/exercise/new-user',
(req:Request,res:Response)=>{
   const userName = req.body.username;
   const newUser=createUser(userName);
   res.json({username:newUser.username,_id:newUser._id});
})

export {router as NewUserRouter};