import { Login } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { WCA_ORIGIN } from "../../logic/request";
import { WCA_CLIENT_ID, getUserInfo, isUserLoggedIn } from "../../logic/auth";
import AccountMenu from "./AccountMenu";
import { useEffect, useState } from "react";

const LoginPartial = () => {
  const [userLoggedIn, setLoggedIn] = useState(isUserLoggedIn());
  const [user, setUser] = useState(getUserInfo());

  useEffect(() => {
    const handleStorage = () => {
        setUser(getUserInfo());
        setLoggedIn(isUserLoggedIn());
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
}, []);

  const handleLogin = () => {
    const queryParams = new URLSearchParams({
      redirect_uri: `${window.location.origin}`,
      scope: "public manage_competitions",
      response_type: "token",
      client_id: WCA_CLIENT_ID,
    });
    window.location.href = `${WCA_ORIGIN}/oauth/authorize?${queryParams.toString()}`;
  };

  return (
    <>
      {userLoggedIn ? (
        <>
          <AccountMenu user={user} />
        </>
      ) : (
        <>
          <IconButton onClick={handleLogin}>
            <Login />
          </IconButton>
        </>
      )}
    </>
  );
};

export default LoginPartial;