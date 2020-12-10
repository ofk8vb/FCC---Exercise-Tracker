import { randomBytes } from 'crypto';

const User:any =[];


const createUser = (username:string)=>{
    let newUser={
        username:username,
        _id: randomBytes(8).toString('hex')
    }
    User.push(newUser);
    return newUser;
}

const findUserById = (userId:string)=>{
    return User.find((user:any)=>user._id===userId)
}

export {User,createUser,findUserById};