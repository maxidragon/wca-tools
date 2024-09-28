import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Layout from './Pages/Layout/Layout';
import { SnackbarProvider } from 'notistack';
import Home from './Pages/Home/Home';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        }
      ],
    }
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App