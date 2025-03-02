import { createRoot } from 'react-dom/client';
import TopMenu from './TopMenu';
import CounterGrid from './counters/CounterGrid';

const root = createRoot(document.body);
root.render(
    <>
        <TopMenu />
        <CounterGrid />
    </>
);