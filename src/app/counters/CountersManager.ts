import { useState } from 'react';

type useCounterType = {
    counters: Map<string, number>,
    addCounter: (label: string) => boolean,
    setCounters: (counters: Map<string, number>) => void,
    removeCounter: (label: string) => boolean
}

function useCounter(){
    const [counters, setCounters] = useState(new Map([
        ["Counter 1", 0],
        ["Counter 2", 0],
        ["Counter 3", 0],
        ["Counter 4", 0],
        ["Counter 5", 0],
    ]));

    const addCounter = (label : string) => {
        console.log("Adding counter with label: " + label);
        if (label.trim() === "") {
            console.log("Label cannot be empty");
            return false;
        }
        const newCounters = new Map(counters);
        newCounters.set(label, 0);
        setCounters(newCounters);
    }

    const removeCounter = (label : string) => {
        if (!counters.has(label)) {
            console.log("Counter with label " + label + " does not exist");
            return false;
        }
        const newCounters = new Map(counters);
        newCounters.delete(label);
        setCounters(newCounters);
        return true;
    }

    return{
        counters,
        setCounters,
        addCounter,
        removeCounter
    }
}

export default useCounter;