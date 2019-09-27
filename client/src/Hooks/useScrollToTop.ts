import { useEffect } from 'react';

export const useScrollToTop = (changeTarget: any) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [changeTarget]);
};
