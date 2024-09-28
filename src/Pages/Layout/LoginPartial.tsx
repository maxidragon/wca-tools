import { Login } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const LoginPartial = () => {
    const userLoggedIn = true;
    const handleLogin = () => {
      
    };
    return (
        <>
          {userLoggedIn ? (
            <>
              <IconButton>
                {/* <AvatarComponent
                  userId={localStorage.getItem("userId") as unknown as number}
                  username={username}
                  size="30px"
                /> */}
              </IconButton>
            </>
          ) : (
            <>
              <IconButton>
                <Login fontSize="large" />
              </IconButton>
            </>
          )}
        </>
      );
};

export default LoginPartial;