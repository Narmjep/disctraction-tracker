import { createRoot } from 'react-dom/client';
import TopMenu from './TopMenu';
import CounterGrid from './counters/CounterGrid';
import Modal from 'react-modal'
import useCounter from './counters/CountersManager';

Modal.setAppElement(document.body);

const App = () => {

    const {counters, setCounters, addCounter, removeCounter} = useCounter();

    return(
        <>
            <TopMenu addCounter={addCounter} />
            <CounterGrid counters={counters} setCounters={setCounters} removeCounter={removeCounter}/>
        </>	
    )
}

const root = createRoot(document.body);
root.render(
    <App />
);