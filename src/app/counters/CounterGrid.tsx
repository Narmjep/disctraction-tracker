import React, { useState } from 'react';
import Counter from './Counter';
import "./CounterData";
import "./CountersContext";
import { AddCounterContext } from './CountersContext';

function CounterGrid() {
    const [counters, setCounters] = useState(new Map([
        ["Counter 1", 0],
        ["Counter 2", 0],
        ["Counter 3", 0],
        ["Counter 4", 0],
        ["Counter 5", 0],
    ]));

    const updateValue = (val: number, label: string) => {
        setCounters(prevCounters => {
            const newCounters = new Map(prevCounters); // Clone Map to maintain immutability
            newCounters.set(label, val);
            return newCounters;
        });
    };

    const addCounter = (label : string) => {
        console.log("Adding counter with label: " + label);
        if (counters.has(label)) {
            return false;
        }
        setCounters(prevCounters => {
            const newCounters = new Map(prevCounters); // Clone Map to maintain immutability
            newCounters.set(label, 0);
            return newCounters;
        });
        return true;
    }

    return (
        <AddCounterContext.Provider value={addCounter}>
            <div className="container d-flex flex-wrap align-items-center justify-content-center">
                {Array.from(counters.entries()).map(([label, value]) => ( 
                    <Counter key={label} label={label} value={value} updateValue={updateValue} />
                ))}
            </div> 
        </AddCounterContext.Provider>
    );
}


export default CounterGrid;