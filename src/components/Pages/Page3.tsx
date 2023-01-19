import React from "react";
import { Grid, Typography } from "@mui/material"
import { Page3Wrapper, Page2Container } from "./styled";

export const Page3: React.FC = () => {

  return (
    <Page3Wrapper >
      <Page2Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40%", marginTop: 400 }} >

        <Grid >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.1104977375485!2d75.265683!3d27.959902000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMjfCsDU3JzM1LjciTiA3NcKwMTUnNTYuNSJF!5e0!3m2!1sen!2sin!4v1674149620210!5m2!1sen!2sin" width="auto" height="250" loading="lazy" ></iframe>
        </Grid>

      </Page2Container>
    </Page3Wrapper >
  );
};
