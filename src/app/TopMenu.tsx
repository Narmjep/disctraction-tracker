import InputModal from "./InputModal";
import { useState } from 'react';

type TopMenuProps = {
    addCounter: (label: string) => Promise<boolean>
}

function TopMenu({addCounter} : TopMenuProps) {

    const OnAddCounterClicked = () => {
        setIsOpen(true);
    }

    //
    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = async (label: string) => {
       if (label.trim() !== "") {
            let res : boolean = await addCounter(label);
            //Error effect
            if (!res) {
                let btn = document.getElementById("AddCunterBtn");
                if (!btn){
                    console.log("AddCounterBtn not found");
                    return;
                }
                let txt = btn.innerHTML;
                btn.classList.add("btn-danger");
                btn.setAttribute("disabled", "true");
                btn.innerText = "Error";

                setTimeout(() => {
                    btn.classList.remove("btn-danger");
                    btn.removeAttribute("disabled");
                    btn.innerText = txt;
                }, 1500);
            }
       }
    }

    return (
    <>
        <div className="row topMenu">
        <div className="col d-flex align-items-center justify-content-center">
            <button id="AddCunterBtn" type="button" className="btn btn-primary w-30 add-btn" onClick={OnAddCounterClicked}>
                Add Counter
            </button>
        </div>
        </div>
        <InputModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen}  onInputSubmitted={onSubmit} />
    </>
    );
}

export default TopMenu;