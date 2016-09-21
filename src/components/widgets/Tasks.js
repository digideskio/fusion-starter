/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
import { Button, Modal, Clearfix, Collapse} from 'react-bootstrap';
import EntypoPlus from 'react-entypo/lib/entypo/Plus';
import TaskItem from './TaskItem';
import { EntypoPhone,EntypoReply,EntypoNew} from 'react-entypo';

/*
 Tasks component.
 Parameters:
 className (options)
 - additional classes to add to <ul class="tracker">
 activeStep (optional)
 - set which step should show active.  Each step to the left (smaller index) of the active item will automatically be set to "completed"
 - a value of '0' will set all to grey/'incomplete'
 id (optional)
 - set the id attribute of the <ul class="tracker">

 photo (string)
 - a URL/path to profile pick.

 */

class Tasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addTaskModalVisible: false,
      tasksOpen: false
    };
    this.taskItems = this.taskItems.bind(this);
  }

  toggleAddTaskModalVisibility = () => {
    this.setState({ addTaskModalVisible: !this.state.addTaskModalVisible });
  };

  toggleTasks = () => {
    this.setState({ tasksOpen: !this.state.tasksOpen });
  };

  getTaskIcon(type) {
    switch (type) {
      case 'phone':
        return <EntypoPhone />;
      case 'reply':
        return <EntypoReply />;
      case 'new':
        return <EntypoNew />;
      default:
        throw new Error('Unknown icon type');
    }
  }

  taskItems(startIndex, limit) {
    let counter = 1;
    let index = startIndex;
    let tasks = [];
    limit = limit || this.props.tasks.length;
    while (counter <= limit) {
      const task = this.props.tasks[index];
      if (!task) break;
      tasks.push(<TaskItem
        key={task.id}
        leftIcon={this.getTaskIcon(task.type)}
        primaryText= {task.primaryText}
        secondaryText={task.secondaryText}
        typeText={task.type}
        taskButtonlabel={task.btn}
        alert={task.alert}
      />);
      counter++;
      index++;
    }
    return tasks;
  };

  render(){
    const {className, tasks} = this.props;
    const mergedClasses = className ? 'tasks '+ className : 'tasks';

    return (
      <div className={mergedClasses}>
        <div className="tasks__header">
          <h5 className="tasks__header-title">Tasks <span className="tasks__header-count">({tasks.length})</span></h5>
          <Button className="tasks__header-button tasks__addtask" onClick={this.toggleAddTaskModalVisibility}><EntypoPlus valign/></Button>
          <Clearfix/>
        </div>

        { tasks.length > 0 ?
          <div className="tasks__taskList-container">
            <div className="tasks__taskList">
              <div className="tasks__taskList-initial">
                { this.taskItems(0, 3) }
              </div>
              <Collapse in={this.state.tasksOpen} className="tasks__taskList-overflow">
                <div>
                  { this.taskItems(3) }
                </div>
              </Collapse>
            </div>
            { tasks.length > 3 && <Button block onClick={this.toggleTasks}>{this.state.tasksOpen ? 'Show Less' : 'Show More'}</Button> }
          </div>
          :
          <div className="tasks__taskList-container--notasks">
            <span className="text-muted">You do not have any active tasks.</span>
          </div>
        }

        <AddTaskModal show={this.state.addTaskModalVisible} onHide={this.toggleAddTaskModalVisibility} />
      </div>
    );
  }
}

Tasks.propTypes = {
  className: PropTypes.string,
  tasks: PropTypes.array.isRequired
};

// Modals

const AddTaskModal = (props) =>
  <Modal {...props} bsSize="small">
    <Modal.Header closeButton>
      <Modal.Title>Edit Customer Name</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>[add task dialogue here]</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

AddTaskModal.propTypes = {
  onHide: PropTypes.func.isRequired
};

export default Tasks;
/* eslint-enable react/no-multi-comp */
