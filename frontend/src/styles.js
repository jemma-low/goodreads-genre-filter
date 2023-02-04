import React from 'react';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const customTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    maxWidth: '30vw',
                    marginTop: '10px'
                },
            },
        },  
    },
});

