import React from "react";
import { Grid, Typography } from "@mui/material"
import { Page3Wrapper, Page2Container } from "./styled";

export const Page4: React.FC = () => {

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
                        Wedding Location
                    </Typography>

                </Grid>
                <Grid >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.142558374678!2d75.26603899999999!3d27.95892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMjfCsDU3JzMyLjEiTiA3NcKwMTUnNTcuNyJF!5e0!3m2!1sen!2sin!4v1673321827595!5m2!1sen!2sin" title="myframe" loading="lazy" width="auto" height="450" />
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
                        Ajeetpura, Rajasthan
                    </Typography>

                </Grid>
            </Page2Container>


        </Page3Wrapper >
    );
};
