import express,{Request,Response} from 'express';
import {User} from '../models/user';
const router = express.Router();

router.get('/api/exercise/users',
(req:Request,res:Response)=>{
  res.send(User);
})

export {router as GetUsersRouter};