import {EDIT_TASK, CREATE_TASK} from '../actions/types'
const initialState = [
   /* {
        id : 1,
        title : "learn ReactJS",
        description : "Let's learn ReactJS today",
        status : "In Progress"
    },
    {
        id : 2,
        title : "learn Redux",
        description : "Let's learn Redux  today",
        status : "Completed"
    } */
]

const tasks = (state = {tasks: initialState}, action) => {
    const {payload} = action;
    switch(action.type) {
        case EDIT_TASK : {
                return {
                    tasks: state.tasks.map((task) => {
                        if (task.id === payload.id){
                            return Object.assign({}, task, payload.params);
                        }
                        return task;
                    }),
                };
        }

        case CREATE_TASK : {
            return {
            tasks: state.tasks.concat(action.payload),
        };
    }
    
    
    default : 
    return state;
    }
};


export default tasks;