import InputModal from "./InputModal";
import { useState } from 'react';

type TopMenuProps = {
    addCounter: (label: string) => boolean
}

function TopMenu({addCounter} : TopMenuProps) {

    const OnAddCounterClicked = () => {
        setIsOpen(true);
    }

    //
    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = (label: string) => {
       if (label.trim() !== "") {
            addCounter(label);
       }
    }

    return (
    <>
        <div className="row topMenu">
        <div className="col d-flex align-items-center justify-content-center">
            <button type="button" className="btn btn-primary w-20 add-btn" onClick={OnAddCounterClicked}>
                Add Counter
            </button>
        </div>
        </div>
        <InputModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen}  onInputSubmitted={onSubmit} />
    </>
    );
}

export default TopMenu;