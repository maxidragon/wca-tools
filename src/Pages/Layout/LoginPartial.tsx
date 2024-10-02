import { Login } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { getUserInfo, isUserLoggedIn } from "../../logic/auth";
import AccountMenu from "./AccountMenu";
import { useNavigate } from "react-router-dom";

const LoginPartial = () => {
  const navigate = useNavigate();
  const userLoggedIn = isUserLoggedIn()
  const user = getUserInfo();

  return (
    <>
      {userLoggedIn ? (
        <>
          <AccountMenu user={user} />
        </>
      ) : (
        <>
          <IconButton onClick={() => navigate("/sign-in")}>
            <Login />
          </IconButton>
        </>
      )}
    </>
  );
};

export default LoginPartial;