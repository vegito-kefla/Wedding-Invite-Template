import React from "react";
import { Grid } from "@mui/material";
import { Page2Wrapper, Page2Container, Page1Container, Title, } from "./styled";
import { Typography } from "@mui/material"
export const Page2: React.FC = () => {
  return (
    <Page2Wrapper >

      <Page2Container>
        <Title style={{ color: "green" }} >
          Prasob 💘 Rewatee
        </Title>
        <Typography fontSize="32px" >

          <Typography color="#DE3163" fontStyle="normal" fontSize="16px" fontWeight="bold" paddingBottom="18px">We are expecting your presence with your family & our friends 🙏🏼.</Typography>
        </Typography >

        <Typography color="green" fontStyle="normal" fontSize="25px" paddingBottom="10px" textAlign={"start"}>
          Wedding:
        </Typography>
        <Typography fontStyle="normal" fontSize="20px" paddingBottom="5px" textAlign={"start"}>
          Date : Feb 10, 2023
        </Typography >
        <Typography fontStyle="normal" fontSize="20px" paddingBottom="5px" textAlign={"start"}>
          Time : 6:00 pm
        </Typography >
        <Typography fontStyle="normal" fontSize="20px" paddingBottom="5px" textAlign={"start"}>
          Location : Ajeetpura,Rajastan.
        </Typography >
        <Typography color="green" fontStyle="normal" fontSize="25px" paddingBottom="10px" textAlign={"start"}>
          Reception:
        </Typography>
        <Typography fontStyle="normal" fontSize="20px" paddingBottom="5px" textAlign={"start"}>
          Date : Feb 12, 2023
        </Typography >
        <Typography fontStyle="normal" fontSize="20px" paddingBottom="5px" textAlign={"start"}>
          Time : 11:00 am - 8:00 pm
        </Typography >

      </Page2Container>
    </Page2Wrapper>
  );
};
