/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import CardDropdownMenu from './CardDropdownMenu';
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

export default Card;
/* eslint-enable react/no-multi-comp */
