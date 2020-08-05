import {EDIT_TASK} from '../actions/types'
const initialState = [
    {
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
    }
]

const tasks = (state = {tasks: initialState}, action) => {
    if (action.type === EDIT_TASK) {
        const {payload} = action;
        return {
            tasks : state.tasks.map(task => {
                if(task.id === payload.id) {
                    return Object.assign({}, task, payload.params)
                }
                return task;
            }),
        };
    }
    return state
};

export default tasks;