import { CSSTransition } from 'react-transition-group';
import Portal from '../portal';

const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
      <CSSTransition in={visible} timeout={250} unmountOnExit classNames="zoom">
        {() => (
          <Portal onClose={onClose} containerClassName="flex items-center justify-center">
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
