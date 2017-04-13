// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from '../../modals/base/example';
import { ButtonIcon } from '../../button-icons/base/example';
import SvgIcon from '../../../../app_modules/ui/svg-icon';

export default (
  <div className="demo-only" style={{height: '24rem'}}>
    <Modal className="slds-modal--large">
      <ModalHeader>
        <div className="slds-notify_container">
          <div className="slds-notify slds-notify--toast slds-theme--error" role="alert">
            <span className="slds-assistive-text">Error</span>
            <ButtonIcon
              className="slds-notify__close slds-button--icon-inverse"
              iconClassName="slds-button__icon--large"
              symbol="close"
              assistiveText="Close"
              title="Close" />
            <div className="slds-notify__content slds-grid">
              <SvgIcon className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex" sprite="utility" symbol="warning" />
              <div className="slds-col slds-align-middle">
                <h2 className="slds-text-heading--small">You've encountered some errors when trying to save edits to Samuel Smith.</h2>
              </div>
            </div>
          </div>
        </div>
        <h2 className="slds-text-heading--medium">
          Modal Header
        </h2>
      </ModalHeader>

      <ModalContent className="slds-p-around--medium">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
          quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
        <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt
          nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      </ModalContent>

      <ModalFooter>
        <button className="slds-button slds-button--neutral">Cancel</button>
        <button className="slds-button slds-button--brand">Save</button>
      </ModalFooter>
    </Modal>
    <div className="slds-backdrop slds-backdrop--open" />
  </div>
);