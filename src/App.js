import React from 'react';
import {connect} from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css"
import TaskPage from "./components/TaskPage";
import {editTask} from './actions';


function App(props) {

  const onStatuschange = (id, status) => {
    props.dispatch(editTask(id,{status}))
  }

  return (
    <>
      <TaskPage tasks={props.tasks} onStatuschange={onStatuschange} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks : state.tasks,
  };
};

export default connect(mapStateToProps)(App);
