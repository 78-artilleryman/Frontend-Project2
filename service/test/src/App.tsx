import React from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { vars } from "@byeonghyeon/themes";
import styled from "@emotion/styled";

function App() {
  const theme = {
    colors: vars.colors.$static.light,
  };

  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}

function View() {
  return (
    <div>
      <Text>{vars.colors.$static.light.red[500]}</Text>
    </div>
  );
}

const Text = styled.p`
  color: ${vars.colors.$static.light.red[500]};
`;

export default App;
