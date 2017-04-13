// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../../app_modules/ui/svg-icon';
import classNames from 'classnames';

export let ButtonIcon = props =>
  <button
    className={classNames('slds-button slds-button--icon', props.className, props.selected ? 'slds-is-selected' : null)}
    disabled={ props.disabled }
    role={ props.role }
    aria-describedby={ props['aria-describedby'] }
    aria-haspopup={ props.hasDropdown ? 'true' : props['aria-haspopup'] }
    aria-expanded={ props['aria-expanded'] }
    aria-controls={ props['aria-controls'] }
    aria-hidden={ props['aria-hidden'] }
    aria-pressed={ props['aria-pressed'] }
    aria-live={ props.assertive ? 'assertive' : props['aria-live'] }
    tabIndex={ props.tabIndex }
    title={ props.title || 'Provide description of action' } >
    <SvgIcon
      className={classNames('slds-button__icon', props.iconClassName)}
      sprite="utility"
      symbol={ props.symbol || 'settings' } />
    { props.hasDropdown ? <SvgIcon className="slds-button__icon slds-button__icon--x-small" sprite="utility" symbol="down" /> : null }
    <span className="slds-assistive-text">{ props.assistiveText || 'Provide description of action' }</span>
  </button>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export const Context = props =>
  <div style={{ padding: '0.5rem' }}>
    {props.children}
  </div>;

export default (
  <ButtonIcon />
);

export let states = [
  {
    id: 'button-icon-error',
    label: 'Error',
    element: <ButtonIcon className="slds-button--icon-error" symbol="warning" title="Warning" assistiveText="Warning" />
  },
  {
    id: 'button-icon-disabled',
    label: 'Disabled',
    element: <ButtonIcon disabled />
  }
];

export let examples = [
  {
    id: 'hint-hover',
    label: 'Hint on hover',
    element:
      <div className="slds-hint-parent">
        <ButtonIcon className="slds-button--icon" iconClassName="slds-button__icon--hint" />
      </div>
  },
  {
    id: 'button-icon-inverse',
    label: 'Inverse',
    element: <ButtonIcon inverse className="slds-button--icon-inverse" />
  },
  {
    id: 'button-icon-inverse-disabled',
    label: 'Inverse disabled',
    element: <ButtonIcon inverse className="slds-button--icon-inverse" disabled />
  }
];