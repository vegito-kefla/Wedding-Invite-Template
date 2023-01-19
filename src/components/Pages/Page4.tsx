import React from "react";
import { Grid, Typography } from "@mui/material"
import { Page3Wrapper, Page2Container } from "./styled";

export const Page4: React.FC = () => {

    return (
        <Page3Wrapper>
            <Page2Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40%", marginTop: 400 }}>
                <Grid  >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.3368652611753!2d76.810054!3d8.754341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zOMKwNDUnMTUuNiJOIDc2wrA0OCczNi4yIkU!5e0!3m2!1sen!2sin!4v1674149383994!5m2!1sen!2sin" width="auto" height="250" loading="lazy" ></iframe>
                </Grid>
            </Page2Container>
        </Page3Wrapper >
    );
};
