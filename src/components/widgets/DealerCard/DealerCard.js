import React, {PropTypes, Component} from 'react';
import Card from '../Card/index';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
  ModalFooter,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Checkbox,
  Col,
} from 'react-bootstrap';

class DealerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      activateCheckBox: true,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.createModelManagerList = this.createModelManagerList.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
    this.setState({activateCheckBox: true});
  }

  onChange(){
    this.setState({activateCheckBox: false});
  }

  createModelManagerList() {
    const salesRep = [];
    const splitSalesRep = [];
    const managerList = [];
    const csiAgent = [];
    const serviceRep = [];
    const bdAgent = [];
    const serviceSalesLead = [];
    const partsSalesLead = [];

    for (let i = 0; i < this.props.dealerlist.length; i++) {
      const managerObject = this.props.dealerlist[i];

      if (managerObject.role === "Sales Rep" && managerObject.options !== undefined) {
        for (let j = 0; j < managerObject.options.length; j++) {
          salesRep.push(<option key={j} value={managerObject.options[j]}>{managerObject.options[j]}</option>);
        }
      }
      if (managerObject.role === "Split Sales Rep" && managerObject.options !== undefined) {
        for (let j = 0; j < managerObject.options.length; j++) {
          splitSalesRep.push(<option key={j} value={managerObject.options[j]}>{managerObject.options[j]}</option>);
        }
      }
      if (managerObject.role === "Manager" && managerObject.options !== undefined) {
        for (let j = 0; j < managerObject.options.length; j++) {
          managerList.push(<option key={j} value={managerObject.options[j]}>{managerObject.options[j]}</option>);
        }
      }
      if (managerObject.role === "CSI Agent" && managerObject.options !== undefined) {
        for (let j = 0; j < managerObject.options.length; j++) {
          csiAgent.push(<option key={j} value={managerObject.options[j]}>{managerObject.options[j]}</option>);
        }
      }
      if (managerObject.role === "Service Rep" && managerObject.options !== undefined) {
        for (let j = 0; j < managerObject.options.length; j++) {
          serviceRep.push(<option key={j} value={managerObject.options[j]}>{managerObject.options[j]}</option>);
        }
      }
      if (managerObject.role === "BD Agent" && managerObject.options !== undefined) {
        for (let j = 0; j < managerObject.options.length; j++) {
          bdAgent.push(<option key={j} value={managerObject.options[j]}>{managerObject.options[j]}</option>);
        }
      }
      if (managerObject.role === "Service Sales Lead" && managerObject.options !== undefined) {
        for (let j = 0; j < managerObject.options.length; j++) {
          serviceSalesLead.push(<option key={j} value={managerObject.options[j]}>{managerObject.options[j]}</option>);
        }
      }
      if (managerObject.role === "Parts Sales Lead" && managerObject.options !== undefined) {
        for (let j = 0; j < managerObject.options.length; j++) {
          partsSalesLead.push(<option key={j} value={managerObject.options[j]}>{managerObject.options[j]}</option>);
        }
      }
    }

    return (
      <span>
        <Col xs={6} md={6}>
          <FormGroup controlId="controlsSelectSalesRep" onChange={this.onChange}>
            <ControlLabel>Sales Rep</ControlLabel>
            <FormControl componentClass="select">
              {salesRep}
              </FormControl>
          </FormGroup>
        </Col>
        <Col xs={6} md={6}>
          <FormGroup controlId="controlsSelectSplitSalesRep" onChange={this.onChange}>
            <ControlLabel>Split Sales Rep</ControlLabel>
            <FormControl componentClass="select">
                {splitSalesRep}
                </FormControl>
          </FormGroup>
        </Col>
        <Col xs={6} md={8}>
          <Checkbox disabled={this.state.activateCheckBox}>
            Trigger Sales Rep Changed Process
          </Checkbox>
        </Col>
        <Col xs={6} md={6}>
          <FormGroup controlId="controlsSelectManager">
            <ControlLabel>Manager</ControlLabel>
            <FormControl componentClass="select">
              {managerList}
              </FormControl>
          </FormGroup>
          <FormGroup controlId="controlsSelectCSISgent">
            <ControlLabel>CSI Sgent</ControlLabel>
            <FormControl componentClass="select">
              {csiAgent}
              </FormControl>
          </FormGroup>
          <FormGroup controlId="controlsSelectServiceRep">
            <ControlLabel>Service Rep</ControlLabel>
            <FormControl componentClass="select">
              {serviceRep}
              </FormControl>
          </FormGroup>
        </Col>
        <Col xs={6} md={6}>
          <FormGroup controlId="controlsSelectBDAgent">
            <ControlLabel>BD Agent</ControlLabel>
            <FormControl componentClass="select">
              {bdAgent}
              </FormControl>
          </FormGroup>
          <FormGroup controlId="controlsSelectServiceSalesLead">
            <ControlLabel>Service Sales Lead</ControlLabel>
            <FormControl componentClass="select">
              {serviceSalesLead}
              </FormControl>
          </FormGroup>
          <FormGroup controlId="controlsSelectPartsSalesLead">
            <ControlLabel>Parts Sales Lead</ControlLabel>
            <FormControl componentClass="select">
              {partsSalesLead}
              </FormControl>
          </FormGroup>
        </Col>
      </span>
    );
  }

  createModelTeamList(role, assignment, key,) {
    if (key <= 4)
      return (
        <Col xs={6} md={6} key={key}>
      <span key={key}>
        <div className="dealercard__role">{role}</div>
        <div className="dealercard__spanstyle">{assignment}</div>
      </span>
        </Col>
      );
    if (key > 4) {
      return (
        <Col xs={6} md={6} key={key}>
      <span key={key}>
        <div className="dealercard__role">{role}</div>
        <div className="dealercard__spanstyle">{assignment}</div>
      </span>
        </Col>
      );
    }
  }

  render() {
    const {dealerlist} = this.props;
    const dealerModelList = [];

    const teamdefinedList = dealerlist.map((type, index)=> {
      const modellist = this.createModelTeamList(
        type.role,
        type.assignment,
        index,
      );
      dealerModelList.push(modellist);

      if (index < 3) {
        return (
          <span key={index} className="dealercard">
            <div className="dealercard__role">{type.role}</div>
            <div>{type.assignment}</div>
          </span>
        );
      }
    });
    return (
      <span>
        <Card header={"Dealer Team " + "(" + (dealerlist.length) + ")"}
              onMouseDown={this.open}>
          {teamdefinedList}
          </Card>
        <Modal
          show={this.state.showModal}
          onHide={this.close}
          container={this}
        >
          <ModalHeader closeButton>
            <ModalTitle>Dealer Team</ModalTitle>
          </ModalHeader>
          <ModalBody
            className={(this.props.teamRole === "Manager") ? "dealercard__managermodel" : "dealercard__teammodel"}>
            {this.props.teamRole === "Manager" ? (this.createModelManagerList()) : (dealerModelList)}
            </ModalBody>
          <ModalFooter>
            <Button onClick={this.close}>Cancle</Button>
            <Button bsStyle="primary">Assign</Button>
          </ModalFooter>
        </Modal>
      </span>
    );
  }
}

DealerCard.propTypes = {
  dealerlist: PropTypes.array,
  teamRole: PropTypes.string,
};

export default DealerCard;
