import React from 'react';
import {connect} from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css"
import TaskPage from "./components/TaskPage"


function App(props) {
  return (
    <>
      <TaskPage tasks={props.tasks} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks : state.tasks,
  };
};

export default connect(mapStateToProps)(App);
