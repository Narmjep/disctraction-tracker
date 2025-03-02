export { }

declare global {
    interface Window {
        electron: {
            /**
             * Runs an sql query
             * @param query 
             * @returns the result of the query
             * @throws an error if the query fails
             */
            runQuery: (query: string) => Promise<any>;
        }
    }
}