import { createTheme } from '@mui/material/styles';

const violetPalette = {
  name: 'Violet',
  light: ['#FDFCFE', '#FAF8FF', '#F4F0FE', '#EBE4FF', '#E1D9FF', '#D4CAFE', '#C2B5F5', '#AA99EC', '#6E56CF', '#654DC4', '#6550B9', '#2F265F'],
  dark: ['#14121F', '#1B1525', '#291F43', '#33255B', '#3C2E69', '#473876', '#56468B', '#6958AD', '#6E56CF', '#7D66D9', '#BAA7FF', '#E2DDFE']
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: violetPalette.light[8], // '#6E56CF'
      light: violetPalette.light[5], // '#D4CAFE'
      dark: violetPalette.light[10], // '#6550B9'
      contrastText: violetPalette.light[0], // '#FDFCFE'
    },
    secondary: {
      main: violetPalette.light[7], // '#AA99EC'
      light: violetPalette.light[4], // '#E1D9FF'
      dark: violetPalette.light[9], // '#654DC4'
      contrastText: violetPalette.light[0], // '#FDFCFE'
    },
    background: {
      default: violetPalette.light[0], // '#FDFCFE'
      paper: violetPalette.light[1], // '#FAF8FF'
    },
    text: {
      primary: violetPalette.light[11], // '#2F265F'
      secondary: violetPalette.light[8], // '#6E56CF'
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
    divider: violetPalette.light[6], // '#C2B5F5'
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: violetPalette.light[11], // '#2F265F'
    },
    h2: {
      color: violetPalette.light[10], // '#6550B9'
    },
    body1: {
      color: violetPalette.light[11], // '#2F265F'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          backgroundColor: violetPalette.light[8],
          color: violetPalette.light[0],
          '&:hover': {
            backgroundColor: violetPalette.light[9],
          },
        },
        outlined: {
          borderColor: violetPalette.light[8],
          color: violetPalette.light[8],
          '&:hover': {
            backgroundColor: violetPalette.light[2],
            borderColor: violetPalette.light[9],
          },
        },
        text: {
          color: violetPalette.light[8],
          '&:hover': {
            backgroundColor: violetPalette.light[2],
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: violetPalette.light[8],
          color: violetPalette.light[0],
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: violetPalette.light[1],
          borderRadius: 12,
          boxShadow: `0 4px 12px ${violetPalette.light[6]}40`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: violetPalette.light[1],
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: violetPalette.light[0],
          borderRight: `1px solid ${violetPalette.light[5]}`,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: violetPalette.light[3],
            color: violetPalette.light[8],
            '&:hover': {
              backgroundColor: violetPalette.light[4],
            },
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: violetPalette.light[6],
          '&.Mui-checked': {
            color: violetPalette.light[8],
            '& + .MuiSwitch-track': {
              backgroundColor: violetPalette.light[5],
            },
          },
        },
        track: {
          backgroundColor: violetPalette.light[4],
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: violetPalette.light[8],
        },
        track: {
          backgroundColor: violetPalette.light[8],
        },
        rail: {
          backgroundColor: violetPalette.light[5],
        },
        thumb: {
          backgroundColor: violetPalette.light[8],
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: violetPalette.light[2],
          color: violetPalette.light[9],
        },
        deleteIcon: {
          color: violetPalette.light[7],
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: violetPalette.light[2],
          color: violetPalette.light[10],
        },
        standardInfo: {
          backgroundColor: violetPalette.light[3],
          color: violetPalette.light[9],
        },
        standardWarning: {
          backgroundColor: violetPalette.light[4],
          color: violetPalette.light[8],
        },
        standardError: {
          backgroundColor: violetPalette.light[5],
          color: violetPalette.light[11],
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: violetPalette.light[8],
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: violetPalette.light[8],
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: violetPalette.light[6],
          '&.Mui-checked': {
            color: violetPalette.light[8],
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: violetPalette.light[6],
          '&.Mui-checked': {
            color: violetPalette.light[8],
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: violetPalette.light[5],
            },
            '&:hover fieldset': {
              borderColor: violetPalette.light[7],
            },
            '&.Mui-focused fieldset': {
              borderColor: violetPalette.light[8],
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: violetPalette.light[8],
          '&.Mui-focused': {
            color: violetPalette.light[8],
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: violetPalette.dark[8], // '#6E56CF'
      light: violetPalette.dark[5], // '#473876'
      dark: violetPalette.dark[10], // '#BAA7FF'
      contrastText: violetPalette.dark[0], // '#14121F'
    },
    secondary: {
      main: violetPalette.dark[7], // '#6958AD'
      light: violetPalette.dark[4], // '#3C2E69'
      dark: violetPalette.dark[9], // '#7D66D9'
      contrastText: violetPalette.dark[0], // '#14121F'
    },
    background: {
      default: violetPalette.dark[0], // '#14121F'
      paper: violetPalette.dark[1], // '#1B1525'
    },
    text: {
      primary: violetPalette.dark[11], // '#E2DDFE'
      secondary: violetPalette.dark[8], // '#6E56CF'
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#29b6f6',
    },
    success: {
      main: '#66bb6a',
    },
    divider: violetPalette.dark[6], // '#56468B'
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: violetPalette.dark[11], // '#E2DDFE'
    },
    h2: {
      color: violetPalette.dark[10], // '#BAA7FF'
    },
    body1: {
      color: violetPalette.dark[11], // '#E2DDFE'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          backgroundColor: violetPalette.dark[8],
          color: violetPalette.dark[0],
          '&:hover': {
            backgroundColor: violetPalette.dark[9],
          },
        },
        outlined: {
          borderColor: violetPalette.dark[8],
          color: violetPalette.dark[8],
          '&:hover': {
            backgroundColor: violetPalette.dark[2],
            borderColor: violetPalette.dark[9],
          },
        },
        text: {
          color: violetPalette.dark[8],
          '&:hover': {
            backgroundColor: violetPalette.dark[2],
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: violetPalette.dark[8],
          color: violetPalette.dark[0],
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: violetPalette.dark[1],
          borderRadius: 12,
          boxShadow: `0 4px 12px ${violetPalette.dark[6]}80`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: violetPalette.dark[1],
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: violetPalette.dark[0],
          borderRight: `1px solid ${violetPalette.dark[5]}`,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: violetPalette.dark[3],
            color: violetPalette.dark[8],
            '&:hover': {
              backgroundColor: violetPalette.dark[4],
            },
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: violetPalette.dark[6],
          '&.Mui-checked': {
            color: violetPalette.dark[8],
            '& + .MuiSwitch-track': {
              backgroundColor: violetPalette.dark[5],
            },
          },
        },
        track: {
          backgroundColor: violetPalette.dark[4],
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: violetPalette.dark[8],
        },
        track: {
          backgroundColor: violetPalette.dark[8],
        },
        rail: {
          backgroundColor: violetPalette.dark[5],
        },
        thumb: {
          backgroundColor: violetPalette.dark[8],
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: violetPalette.dark[2],
          color: violetPalette.dark[9],
        },
        deleteIcon: {
          color: violetPalette.dark[7],
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: violetPalette.dark[2],
          color: violetPalette.dark[10],
        },
        standardInfo: {
          backgroundColor: violetPalette.dark[3],
          color: violetPalette.dark[9],
        },
        standardWarning: {
          backgroundColor: violetPalette.dark[4],
          color: violetPalette.dark[8],
        },
        standardError: {
          backgroundColor: violetPalette.dark[5],
          color: violetPalette.dark[11],
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: violetPalette.dark[8],
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: violetPalette.dark[8],
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: violetPalette.dark[6],
          '&.Mui-checked': {
            color: violetPalette.dark[8],
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: violetPalette.dark[6],
          '&.Mui-checked': {
            color: violetPalette.dark[8],
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: violetPalette.dark[5],
            },
            '&:hover fieldset': {
              borderColor: violetPalette.dark[7],
            },
            '&.Mui-focused fieldset': {
              borderColor: violetPalette.dark[8],
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: violetPalette.dark[8],
          '&.Mui-focused': {
            color: violetPalette.dark[8],
          },
        },
      },
    },
  },
});