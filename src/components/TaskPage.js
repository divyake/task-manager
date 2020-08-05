import React, { useState } from 'react';

const TASK_STATUS  = ["Unstarted" , "In Progress", "Completed"]

const TaskPage = () => {
    const [cardForm, showCardForm] = useState(false);
    const [title, setTitle] = useState("Enter Title of Task");
    const [description, setDescription] = useState("Enter Description of Task");

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const formToggler= () =>{
        showCardForm(!cardForm)
    };

    const renderTaskList = () => {
        
    }

    return (
        <div className="container my-5">
            <div className="jumbotron py-3">
                <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-success m-3" onClick={formToggler}>Add</button>
                        </div>
                        <div className="col-md-10">
                            <h2 className="display-4 text-center text-uppercase">Task Manager</h2>
                        </div>
                </div>
                {cardForm && (
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder={title} onChange={onChangeTitle} />
                    </div>
                    <div className="form-group">
                        <textarea type="text" className="form-control" placeholder={description} onChange={onChangeDescription }/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit </button>
                </form>
                )}

            </div>
            
        </div>
    )
}

export default TaskPage
