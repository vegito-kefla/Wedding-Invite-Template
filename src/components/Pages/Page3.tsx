import React from "react";
import { Grid, Typography } from "@mui/material"
import { Page3Wrapper, Page2Container } from "./styled";

export const Page3: React.FC = () => {

  return (
    <Page3Wrapper>
      <Page2Container>
        <Grid style={{
          width: "100%",
          backgroundColor: "transparent",
          margin: 10,
          justifyContent: "flex-start"

        }}>
          <Typography style={{ fontSize: "25px", fontStyle: "normal", fontWeight: "bold", color: "green" }} textAlign={"start"}>
            Reception Location
          </Typography>

        </Grid>
        <Grid >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.3590207053635!2d76.81432579999999!3d8.7522503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e8216d1d96ad%3A0xefbffee302245ad6!2sKallambalam%20-%20Nagaroor%20Rd%2C%20Kallambalam%2C%20Kerala%20695605!5e0!3m2!1sen!2sin!4v1673078126770!5m2!1sen!2sin" title="myframe" loading="lazy" width="auto" height="450" />
        </Grid>
        <Grid style={{
          width: "100%",
          backgroundColor: "transparent",
          margin: 10,
          justifyContent: "flex-start"

        }}>
          <Typography style={{ fontSize: "25px", fontStyle: "normal", fontWeight: "bold", color: "green" }} textAlign={"start"}>
            Address :
          </Typography>
          <Typography style={{ fontSize: "22px", fontStyle: "normal", fontWeight: "bold" }} textAlign={"start"}>
            Girijalayam, Karavaram P.O., {"\n"}
            Thiruvananthapuram District, Kerala {"\n"}
          </Typography>
          <Typography style={{ fontSize: "25px", fontStyle: "normal", fontWeight: "bold", color: "green" }} textAlign={"start"}>
            Phone number: <Typography style={{ fontSize: "22px", fontWeight: "bold", color: "#000" }} textAlign={"start"}>9495073883</Typography>
          </Typography>
        </Grid>
      </Page2Container>


    </Page3Wrapper >
  );
};
