import { createContext } from 'react';


type AddCounterType = (label: string) => boolean;
/**
 * A methdo to add a counter to the list of counters. Returns true if the counter was added successfully, false otherwise.
 */
export const AddCounterContext = createContext<AddCounterType>(() => false);