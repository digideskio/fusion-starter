/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
import { Media, Row, Col, Image, Button, Modal } from 'react-bootstrap';

/*
  Customer Profile component.
  Parameters:
    labels (required)
      - this determines the number of steps, and each item becomes the label of each corresponding step (in order)
      - minimum 3, max 5
    className (options)
      - additional classes to add to <ul class="tracker">
    activeStep (optional)
      - set which step should show active.  Each step to the left (smaller index) of the active item will automatically be set to "completed"
      - a value of '0' will set all to grey/'incomplete'
    id (optional)
      - set the id attribute of the <ul class="tracker">

    photo (string)
      - a URL/path to profile pick.
    firstName (string) - required
      - customer's first name
    lastName (string) - required
      - customer's last name
    phone (string || number)
      - phone number.  Currently accepts strings or numbers, will output exactly as input (no formatting built-in)
    email (string)
      - email address
    address1 (string)
      - street address
    address2 (string)
      - additional street address needs (PO box, apt #, etc.)
    city (string)
    state (string)
    postal (number)
    ebr (bool)
      - CASL, Set up for EBR (yes/no)
    ebrExpressConsent (bool)
      - CASL, customer allows marketing
    memo (string)
      - memo/notes about customer

*/

// const CustomerProfile = (props) => {
//   return (
class CustomerProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameEditShow: false,
      memoEditShow: false,
      memoViewShow: false
    };
  }

  toggleNameEdit = () => {
    this.setState({ nameEditShow: !this.state.nameEditShow });
  }

  toggleMemoEdit = () =>{
    this.setState({ memoEditShow: !this.state.memoEditShow });
  }

  toggleMemoView = () =>{
    this.setState({ memoViewShow: !this.state.memoViewShow });
  }

  render(){
    const {customer} = this.props;
    const address = customer.address;
    return (
        <div className="customerprofile">
          <Media className="customerprofile__media">
            <Media.Left className="customerprofile__photo">
              <Image className="customerprofile__img" src={customer.photo} alt={customer.firstName + " " + customer.lastName} />
            </Media.Left>
            <Media.Body>
              <Media.Heading className="customerprofile__heading">{customer.firstName+' '+customer.lastName} <Button className="customerprofile__edit-link" bsStyle="link" onClick={this.toggleNameEdit}>Edit</Button></Media.Heading>
              <Row className="customerprofile__info">
                <Col lg={3} md={6} sm={6} xs={6} componentClass="ul" className="customerprofile__contactinfo">
                  <li>{customer.phone}</li>
                  <li>{customer.email}</li>
                  <li>{address.street}</li>
                  { address.secondaryAddress && <li>{address.secondaryAddress}</li> }
                  <li>{address.city+', '+address.state+' '+address.postal}</li>
                  <li><small><span>EBR: {(customer.ebr)?'YES':'NO'}</span> <span style={{'marginLeft':'1em'}}>Express Consent: {(customer.ebrExpressConsent)?'YES':'NO'}</span></small></li>
                </Col>
                <Col lg={9} md={6} sm={6} xs={6} className="customerprofile__memo">
                  <h5 className="customerprofile__memo-heading m-t-0">Customer Memo</h5>
                  <div className="customerprofile__memo-content">
                    {/*
                      Convert string to HTML? Store markup in data?
                      Suggest strings, then utility function to convert line breaks (\n) into paragraphs (or line breaks!).
                      Any other formatting issues?
                    */}
                    <p>{customer.memo}</p>
                  </div>
                  {/*
                    <ButtonToolbar>
                      <Button className="customerprofile__edit-link" bsStyle="link" onClick={this.toggleMemoView}>View</Button>
                      <Button className="customerprofile__edit-link" bsStyle="link" onClick={this.toggleMemoEdit}>Edit</Button>
                    </ButtonToolbar>
                  */}
                  <a className="customerprofile__edit-link" onClick={this.toggleMemoView} href="#">View</a>{' '}
                  <a className="customerprofile__edit-link" onClick={this.toggleMemoEdit} href="#">Edit</a>
                </Col>
              </Row>
              <CustomerNameEditModal show={this.state.nameEditShow} onHide={this.toggleNameEdit} content={[customer.firstName, customer.lastName]}/>
              <CustomerMemoEditModal show={this.state.memoEditShow} onHide={this.toggleMemoEdit} content={customer.memo}/>
              <CustomerMemoViewModal show={this.state.memoViewShow} onHide={this.toggleMemoView} content={customer.memo}/>
            </Media.Body>
          </Media>
        </div>
    );
  }
}

CustomerProfile.propTypes = {
  customer: PropTypes.shape({
    photo: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    email: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal: PropTypes.number,
    ebr: PropTypes.bool,
    ebrExpressConsent: PropTypes.bool,
    memo: PropTypes.string
  })
};

// Modals

const CustomerNameEditModal = (props) =>
  <Modal {...props} bsSize="small">
    <Modal.Header closeButton>
      <Modal.Title>Edit Customer Name</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>[editor goes here]</p>
      <p>First Name: {props.content[0]}<br/>
        Last Name: {props.content[1]}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

CustomerNameEditModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  content: PropTypes.array.isRequired
};

const CustomerMemoEditModal = (props) =>
  <Modal {...props} bsSize="small">
    <Modal.Header closeButton>
      <Modal.Title>Edit Customer Memo</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>[editor goes here]</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

CustomerMemoEditModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired
};

const CustomerMemoViewModal = (props) =>
  <Modal {...props} bsSize="small">
    <Modal.Header closeButton>
      <Modal.Title>View Customer Memo</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>{props.content}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

CustomerMemoViewModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired
};


export default CustomerProfile;
/* eslint-enable react/no-multi-comp */
