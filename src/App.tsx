import * as React from "react";
import { Page } from "./components/Page/Page";
import { AppStyled } from "./styled";
import { LoadPage } from "./components/LoadPage";

import Image1 from "./images/wedding.jpg";
import Image2 from "./images/image2.png";
import Image3 from "./images/image3.png";


import { Page1, Page2, Page3 } from "./components/Pages";

const pages = [
  {
    img: Image1,
    content: <Page1 />
  },
  {
    img: Image2,
    content: <Page2 />
  },
  {
    img: Image3,
    content: <Page3 />
  },

];

export const App = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <AppStyled>
      {loading && <LoadPage />}
      {pages.map((page, index) => (
        <Page setLoading={setLoading} key={index} index={index} page={page}></Page>
      ))}
    </AppStyled>
  );
};
