import { useState, useEffect } from 'react';

export const useGetDrawing = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [drawingData, setDrawingData] = useState(null);
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
