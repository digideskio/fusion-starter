/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
import {Panel,DropdownButton,MenuItem} from 'react-bootstrap';
import EntypoDotsThreeVertical from 'react-entypo/lib/entypo/DotsThreeVertical';
// import styles from './styles.scss';

/*
  Card component.
    Currently, <Card /> is an alias for <Panel/> but with specific settings and use cases.

  Requires: React, React-Bootstrap, React-Entypo

  Parameters:
    header :: node
      - The heading for <Card/> per <Panel/> settings.

    actionDropdown :: formatted Array
      - An array of objects to be used as the settings for the Action Dropdown in a <Card/>
      - Should be an array of properties that get directly converted to <MenuItem/>s, per <MenuItem> prop specs.  If an option isn't used, there's no need to pass it.
        [
          {
            "label":    string (required),
            "active":   boolean,
            "disabled": boolean,
            "divider":  boolean,
            "header":   boolean,
            "href":     string,
            "onClick":  func,
            "onSelect": func
           },
           ...
        ]

        sample of a dropdown with a single menu item:
          [{
           label: 'External Link Example',
           active: '',
           disabled: false,
           divider: false,
           header: false,
           href: 'http://google.com',
           onClick: '',
           onSelect: ''
          }]


    children
      - this property is how the content between <Card> </Card> is passed via React.

    className
      - additional classes if needed.

    id
      - set the id
*/

const Card = (props) => {
  const {
    header,
    className,
    actionDropdown,
    children,
    ...other
  } = props;
  const panelHeader = <div className="card__title">{header}</div>;

  return (
    <Panel className={'card'+((className) ? ' '+className : '')} header={panelHeader} {...other}>
      { actionDropdown ?
        <CardDropdownMenu actionDropdown={actionDropdown}/>
        :
        null
      }
      {children}
    </Panel>
  );
};
Card.propTypes = {
  header: PropTypes.node,
  className: PropTypes.string,
  actionDropdown: React.PropTypes.arrayOf(PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    active: React.PropTypes.boolean,
    disabled: React.PropTypes.boolean,
    divider: React.PropTypes.boolean,
    header: React.PropTypes.boolean,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func,
    onSelect: React.PropTypes.func
  })),
  children: React.PropTypes.node
};

const CardDropdownMenu = (props) => {
  const menuObj = props.actionDropdown || [];
  const menuItems = menuObj.map(function(v, key){
    return(
      <MenuItem
        className="card__dropdown-item"
        key={key}
        eventKey={key}
        active={v.active}
        disabled={v.disabled}
        divider={v.divider}
        header={v.header}
        href={v.href}
        onClick={v.onClick}
        onSelect={v.onSelect}
      >{v.label}</MenuItem>
    );
  });

  return (
    <span>
    { menuObj.length > 0 ?
      <div className="card__dropdown">
        <DropdownButton
          className="card__dropdown-button"
          bsStyle="link"
          title={<EntypoDotsThreeVertical valign/>}
          noCaret
          pullRight
          id="dropdown-card-button"
        >
          {menuItems}
        </DropdownButton>
      </div>
      :
      null
    }
    </span>
  );
};
CardDropdownMenu.propTypes = {
  actionDropdown: PropTypes.array.isRequired
};

/*
const CardDropdownMenuWItems = (props) => {
  return (
    <div className="card__dropdown pull-right">
      <DropdownButton id="card__drop" className="card__dropdown-button" bsStyle="link" title={<EntypoDotsThreeVertical valign />} noCaret pullRight>
        {props.children}
      </DropdownButton>
    </div>
  );
};
CardDropdownMenuWItems.propTypes = {
  children: PropTypes.element
};
const CardMenuItem = (props) => {
  return (
    <MenuItem {...props}>{props.children}</MenuItem>
  );
};
CardMenuItem.propTypes = {
  children: React.PropTypes.node
};

Card.Dropdown = CardDropdownMenuWItems;
Card.MenuItem = CardMenuItem;
*/

export default Card;
/* eslint-enable react/no-multi-comp */
