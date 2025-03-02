import { useState } from 'react';

type useCounterType = {
    counters: Map<string, number>,
    loadCounters: () => Promise<boolean>,
    addCounter:  (label: string) => Promise<boolean>,
    setCounters: (counters: Map<string, number>) => void,
    removeCounter: (label: string) => Promise<boolean>
    updateValue: (value: number, label: string) => Promise<boolean>
}

function useCounter() : useCounterType {
    const [counters, setCounters] = useState(new Map());

    const loadCounters = async () => {
        const query : string = `SELECT * FROM counters;`;
        let loadError = false;
        let res = await window.electron.runQuery(query)
        .catch((error : any) => {
            console.log("Failed to load counters: " + error);
            loadError = true;
        });
        if (loadError) {
            return false;
        }
        for (let i = 0; i < res.length; i++) {
            const label = res[i].label;
            const count = res[i].count;
            counters.set(label, count);
        }

        return true;
    }

    const addCounter = async (label : string) => {
        if (label.trim() === "") {
            console.log("Label cannot be empty");
            return false;
        }
        // sql
        const query : string = `
        INSERT INTO counters (label, count) VALUES ('${label}', 0);
        `; 
        let queryError = false;
        await window.electron.runQuery(query)
        .then((result : any) => {})
        .catch((error : any) => {
            console.log("Failed to save new counter");
            queryError = true;
        });

        if (queryError) {
            return false;
        }

        // frontend
        const newCounters = new Map(counters);
        newCounters.set(label, 0);
        setCounters(newCounters);
        return true;
    }

    const removeCounter = async (label : string) => {
        if (!counters.has(label)) {
            console.log("Counter with label " + label + " does not exist");
            return false;
        }
        // sql
        const query : string = `
        DELETE FROM counters WHERE label = '${label}';
        `;
        let queryError = false;
        await window.electron.runQuery(query)
        .then((result : any) => {})
        .catch((error : any) => {
            console.log("Failed to remove counter");
            queryError = true;
        });

        if (queryError) {
            return false;
        }

        // frontend
        const newCounters = new Map(counters);
        newCounters.delete(label);
        setCounters(newCounters);
        return true;
    }

    const updateValue = async (value: number, label: string) => {
        if (!counters.has(label)) {
            console.log("Counter with label " + label + " does not exist");
            return false;
        }
        // sql
        const query : string = `
        UPDATE counters SET count = ${value} WHERE label = '${label}';
        `;
        await window.electron.runQuery(query)
        .then((result : any) => {})
        .catch((error : any) => {
            console.log("Failed to update counter value");
            return false;
        });

        // frontend
        const newCounters = new Map(counters);
        newCounters.set(label, value);
        setCounters(newCounters);
    }

    return{
        counters,
        loadCounters,
        setCounters,
        addCounter,
        removeCounter,
        updateValue
    }
}

export default useCounter;