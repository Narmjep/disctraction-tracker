import usePlaceholder from "react-bootstrap/esm/usePlaceholder";

type CounterProps = {
    label: string,
    value: number,
    updateValue: (value: number, label: string) => Promise<boolean>,
    removeCounter: (label: string) => Promise<boolean>
}

function Counter({label, value , updateValue, removeCounter} : CounterProps) {

    const incrementCounter = () => {
        updateValue(value + 1, label);
    }

    const decrementCounter = () => {
        if (value === 0) {
            return;
        }
        updateValue(value - 1, label);
    }

    const resetCounter = () => {
        updateValue(0, label);
    }

    return(
    <>
        <div className="container mt-3 mb-2 counter rounded d-flex flex-column align-items-center position-relative">
            <button type="button" className="btn btn-danger position-absolute top-0 end-0 m-1" onClick={()=>{removeCounter(label)}}>
                X
            </button>
            <div className="counter-label mt-1 flex-grow-1 mb-5">{label}</div>
            <div className="counter-val flex-grow-1 mb-5">{value}</div>
            <div className="container flex-grow-1 mb 2">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <button type="button" className="increment-btn btn btn-primary w-100" onClick={incrementCounter}> + </button>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <button type="button" className="decrement-btn btn w-100" onClick={decrementCounter}> - </button>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <button type="button" className="reset-btn btn w-100" onClick={resetCounter}> reset </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}


export default Counter;