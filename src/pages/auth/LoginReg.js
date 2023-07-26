import { Grid, Card, Box, Tabs, Tab } from "@mui/material"
import { useState } from "react";

import UserLogin from "./UserLogin";
import Registration from "./Regestration";
import Homepic from '../../assets/Image/image4.png'
import Logo from '../../assets/Image/logo.png'
import './_auth.scss'


const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};


const LoginReg = () => {

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container sx={{ height: '100vh' }}>
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          className="home_grid"
          sx={{
            backgroundImage: `url(${Homepic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { xs: "none", sm: "block" },
          }}
        >
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}
        >
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ mx: 5, height: 505 }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  textColor="primary"
                  indicatorColor="primary"
                  onChange={handleChange}
                >
                  <Tab
                    label="Login"
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      color: "#6d1b7b",
                    }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      color: "#6d1b7b",
                    }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box>
            <Box textAlign="center">
              <img src={Logo} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default LoginReg