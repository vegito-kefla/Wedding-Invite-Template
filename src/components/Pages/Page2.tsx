import React from "react";
import { Page2Wrapper, Page2Container } from "./styled";
import { Typography } from "@mui/material"
export const Page2: React.FC = () => {
  return (
    <Page2Wrapper>
      <Page2Container>
        <Typography fontSize="32px" >
          <Typography color="#DE3163" fontStyle="italic" fontSize="32px" fontWeight="bold" paddingBottom="18px">Joyfully inviting you all to our wedding reception celebration </Typography>🙏🏼
        </Typography >

        <Typography color="#DE3163" fontStyle="italic" fontSize="40px" paddingBottom="18px">
          Reception:
        </Typography>

        <Typography fontStyle="italic" fontSize="25px" paddingBottom="18px">
          Date : Feb 12, 2023
        </Typography >
        <Typography fontStyle="italic" fontSize="25px" paddingBottom="2px">
          Time  11:00 am - 2:00 pm
        </Typography >
      </Page2Container>
    </Page2Wrapper>
  );
};
