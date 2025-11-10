import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ModalCompo({isOpen,setIsOpen,children}){

    const handleClose=()=>{
        setIsOpen(false);
    }

    const customStyles = {
        overlay: {
      padding:'0'
    },
        content:{
            width:'95%',
            maxWidth:'400px',
            top:'50%',
            left:'50%',
            transform:'translateX(-50%) translateY(-50%)',
            height:'fit-content',
            maxHeight:'90vh',
            backgroundColor:'rgba(107, 106, 106, 0.59)',
            border:'none',
            borderRadius:"10px",
           
        }
    }

    return (
        <Modal
        isOpen={isOpen}
        onAfterClose={handleClose}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
        >
            {children}
        </Modal>
    )

} 