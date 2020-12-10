const Exercises:any =[];

export interface Exercise{
    userId:string,
    duration:number,
    description:string,
    date:Date

}
const createExercise = (userId:string,description:string,duration:number,date:any)=>{

    if(!date){
        date=new Date().toDateString()
    }
   let newExercise = {
       userId:userId,
       description:description,
       duration:duration,
       date:new Date(date).toDateString(),
       log:{
           description:description,
           duration:duration,
           date:new Date(date),
       }
   }
   Exercises.push(newExercise);
   return newExercise;
}

const findExercisesByUserId = (userId:string)=>{
    const filteredExercise= Exercises.filter((exercise:any)=>exercise.userId===userId)
    return filteredExercise;
}


export {Exercises,createExercise,findExercisesByUserId};