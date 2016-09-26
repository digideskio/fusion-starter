import React, {PropTypes} from 'react';
import {DropdownButton,MenuItem} from 'react-bootstrap';
import EntypoDotsThreeVertical from 'react-entypo/lib/entypo/DotsThreeVertical';


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
  const stopProp = (e) => {
    e.stopPropagation();
  };

  return (
    <span>
    { menuObj.length > 0 ?
      <div className="card__dropdown" onClick={stopProp}>
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
  actionDropdown: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    active: PropTypes.boolean,
    disabled: PropTypes.boolean,
    divider: PropTypes.boolean,
    header: PropTypes.boolean,
    href: PropTypes.string,
    onClick: PropTypes.func,
    onSelect: PropTypes.func
  })).isRequired
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

export default CardDropdownMenu;
