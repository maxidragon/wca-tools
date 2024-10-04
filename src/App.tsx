import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Layout from './Pages/Layout/Layout';
import { SnackbarProvider } from 'notistack';
import Home from './Pages/Home/Home';
import Panel from './Pages/Panel/Panel';
import SignIn from './Pages/SignIn/SignIn';
import AuthenticatedLayout from './Pages/Layout/AuthenticatedLayout';
import MyCompetitions from './Pages/Panel/Panel';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
      ],
    },
    {
      path: "/panel",
      element: <AuthenticatedLayout />,
      children: [
        {
          path: "/panel",
          element: <MyCompetitions />,
        },
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