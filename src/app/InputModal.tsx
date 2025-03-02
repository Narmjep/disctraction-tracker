import Modal from 'react-modal';

type InputModalProps = {
    modalIsOpen: boolean;
    setModalIsOpen: (value: React.SetStateAction<boolean>) => void;
    onInputSubmitted: (val: string) => void;
}

function InputModal({ modalIsOpen, setModalIsOpen, onInputSubmitted }: InputModalProps) {

    const onSubmitButtonClicked = () => {
        const val = (document.getElementById("ModalTextInput") as HTMLInputElement).value;
        onInputSubmitted(val);
        close();
    }

    const modalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    const close = () => {
        setModalIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            style={modalStyles}
            contentLabel="Adda new Counter"
        >
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Add Counter</h3>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col">
                        <input type="text" id="ModalTextInput" className="form-control" placeholder="Counter Label" />
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-end">
                        <button type="button" className="btn btn-primary" onClick={onSubmitButtonClicked}>Add</button>
                        <button type="button" className="btn btn-secondary"onClick={close}>Cancel</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default InputModal;