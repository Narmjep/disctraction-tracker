import React, { useState } from 'react';
import Counter from './Counter';
import "./CounterData";

type CounterGridProps = {
    counters: Map<string, number>,
    setCounters: (counters: Map<string, number>) => void,
    removeCounter: (label: string) => boolean
}

function CounterGrid({counters, setCounters, removeCounter} : CounterGridProps)  {
    

    const updateValue = (val: number, label: string) => {
        const newCounters = new Map(counters);
        newCounters.set(label, val);
        setCounters(newCounters);
    };

    return (
        <div className="container d-flex flex-wrap align-items-center justify-content-center">
            {Array.from(counters.entries()).map(([label, value]) => ( 
                <Counter key={label} label={label} value={value} updateValue={updateValue} removeCounter={removeCounter} />
            ))}
        </div> 
    );
}


export default CounterGrid;