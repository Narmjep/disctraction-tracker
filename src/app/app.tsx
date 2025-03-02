import { createRoot } from 'react-dom/client';
import Title from './title';

const root = createRoot(document.body);
root.render(
    <>
        <h1> Hello World from React! </h1>
        <Title />
    </>
);