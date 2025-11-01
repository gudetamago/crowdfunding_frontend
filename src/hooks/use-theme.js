import { useEffect } from 'react';
import { useAuth } from './use-auth';

export function useTheme() {
    const { auth } = useAuth();

    useEffect(() => {
        const root = document.documentElement;
        if (auth.token) {
            root.style.setProperty('--theme-primary', 'var(--primary-color)');
            root.style.setProperty('--theme-secondary', 'var(--secondary-color)');
            root.style.setProperty('--theme-tertiary', 'var(--tertiary-color)');
        } else {
            root.style.setProperty('--theme-primary', 'var(--alt-primary-color)');
            root.style.setProperty('--theme-secondary', 'var(--alt-secondary-color)');
            root.style.setProperty('--theme-tertiary', 'var(--alt-tertiary-color)');
        }
    }, [auth.token]);
}