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
        status : "In Progress"
    }
]

const tasks = (state = {tasks: initialState}, action) => {
    return state
};

export default tasks;