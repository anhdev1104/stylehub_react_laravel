import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function createPortalWrapper() {
  const element = document.createElement('div');
  element.id = 'portal-wrapper';
  return element;
}

const portalWrapperElement = createPortalWrapper();

const Portal = ({ containerClassName = '', bodyClassName = '', onClose = () => {}, children }) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElement);
  }, []);

  const renderContent = (
    <div className={`fixed inset-0 z-[9999] ${containerClassName}`}>
      <div className="overlay absolute inset-0 bg-black bg-opacity-20" onClick={onClose}></div>
      <div className={`content relative transition-all duration-300 z-10 ${bodyClassName}`}>{children}</div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElement);
};

export default Portal;
