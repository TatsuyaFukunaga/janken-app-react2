import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export const Title = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AppBar position="static" color="primary" elevation={10}>
          <Toolbar>
            <AvatarGroup max={3} spacing={24}>
              <Avatar alt="ぐー" src="/img/00.jpg" />
              <Avatar alt="ちょき" src="/img/01.jpg" />
              <Avatar alt="ぱー" src="/img/02.jpg" />
            </AvatarGroup>

            <Typography
              variant="h4"
              component="div"
              sx={{ display: "flex", margin: "auto", fontWeight: "bold" }}
            >
              じゃんけんApp
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
