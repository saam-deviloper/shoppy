import React from 'react'
import { BackDrop,Modali } from './shared/StyledComp';
import  ReactDOM  from 'react-dom';
export default function BasicModal({isVisible,onClose,children}) {
  const portalEl = document.getElementById('modal-box');
  if(isVisible){
  return (
    <div onClick={onClose}>
    {
      ReactDOM.createPortal(
        <BackDrop>
          <Modali>
            {children}
          </Modali>
        </BackDrop>,portalEl
      )
    }
    </div>
  )}
}
