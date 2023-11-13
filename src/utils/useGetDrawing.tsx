import { useState, useEffect } from 'react';

export type Drawing = {
    word: string;
    countrycode: string;
    timestamp: string;
    recognized: string;
    key_id: string;
    drawing: Array<Array<Array<number>>>;
};

export const useGetDrawing = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [drawingData, setDrawingData] = useState<Drawing>();
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:8080/drawing', { method: 'GET' })
            .then((response) => response.json())
            .then((data) => setDrawingData(data))
            .catch((err) => setServerError(err))
            .finally(() => setIsLoading(false));
    }, []);

    return { drawingData, serverError, isLoading };
};
