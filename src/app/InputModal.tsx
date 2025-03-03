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
            width: '100%',
            height: '100%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: "rgb(0,0,0,0.8)"
        }
    }

    const close = () => {
        setModalIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            style={modalStyles}
            contentLabel="Add a new Counter"
        >
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="row w-50">
                    <div className="col-8">
                        <input type="text" id="ModalTextInput" className="form-control bg-dark text-white" placeholder="Select a name..." />
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary ml-1" onClick={onSubmitButtonClicked}>Add</button>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-danger ml-1" onClick={close}>Cancel</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default InputModal;