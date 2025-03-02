import React, { useState } from 'react';
import Counter from './Counter';
import "./CounterData";

type CounterGridProps = {
    counters: Map<string, number>,
    setCounters: (counters: Map<string, number>) => void,
    removeCounter: (label: string) => Promise<boolean>,
    updateValue: (value: number, label: string) => Promise<boolean>
}

function CounterGrid({counters, setCounters, removeCounter, updateValue} : CounterGridProps)  {
    
    return (
        <div className="container d-flex flex-wrap align-items-center justify-content-center">
            {Array.from(counters.entries()).map(([label, value]) => ( 
                <Counter key={label} label={label} value={value} updateValue={updateValue} removeCounter={removeCounter} />
            ))}
        </div> 
    );
}


export default CounterGrid;