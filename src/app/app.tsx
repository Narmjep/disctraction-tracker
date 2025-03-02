import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import TopMenu from './TopMenu';
import CounterGrid from './counters/CounterGrid';
import Modal from 'react-modal';
import useCounter from './counters/CountersManager';

// Define the enum for managing states
enum DataState {
    Loading = 'LOADING',
    Loaded = 'LOADED',
    Error = 'ERROR'
}

Modal.setAppElement(document.body);

const App = () => {
    const { counters, setCounters, addCounter, removeCounter, updateValue, loadCounters } = useCounter();
    const [dataState, setDataState] = useState<DataState>(DataState.Loading); // Default to loading state

    useEffect(() => {
        const load = async () => {
            try {
                const res = await loadCounters();
                if (!res) {
                    setDataState(DataState.Error);  // Set to error if counters failed to load
                } else {
                    setDataState(DataState.Loaded); // Set to loaded if successful
                }
            } catch (err) {
                setDataState(DataState.Error); // Set to error if there was an exception
            }
        };

        load();
    }, []); // Empty dependency array to run only once when the component mounts

    if (dataState === DataState.Error) {
        return <div>Failed to load counters</div>; // Show error message if loading failed
    }

    if (dataState === DataState.Loading) {
        return <div>Loading...</div>; // Show loading message until data is loaded
    }

    return (
        <>
            <TopMenu addCounter={addCounter} />
            <CounterGrid counters={counters} setCounters={setCounters} removeCounter={removeCounter} updateValue={updateValue} />
        </>
    );
};

const root = createRoot(document.body);
root.render(<App />);
