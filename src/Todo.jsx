//  export default function Todo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
      
//     )
// }
// Conditional rendering option1
// export default function Todo({task, isDone}){
//      if(isDone=== true){
//         return <li>Finished: {task}</li>
//      }
//      else{
//         return <li>Work on: {task}</li>
//      }
// }
//  conditional rendering option 2
// export default function Todo({task, isDone}){
//         if(isDone){
//             return <li>Finished: {task}</li>
//         }
//         return <li>Work on: {task}</li>
//     }

// Conditional rendering 3 : trernery operator
// export default function Todo({task, isDone}){
//     return (
//         <li>{isDone? "Finished" : "Work on"}: {task} </li>
//     )
// }

//  Conditional Rendering option 4 : &&

// export default function Todo({task, isDone}){
//         return(
//             <li> {task} {isDone && ': Done'}</li>
          
//         )
//     }

    // Conditional Rendering option 5 : ||

    // export default function Todo({task, isDone}){
    //     return(
    //         <li> {task} {isDone || ': Do it'}</li>
          
    //     )
    // }


    export default function Todo({task, isDone}){
                if(isDone){
                    return <li>Finished: {task}</li>
                }
                return <li>Work on: {task}</li>
            }
        