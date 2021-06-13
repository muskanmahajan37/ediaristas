import React from "react";
import { SafeEnviromentContainer } from "./SafeEnviroment.style";
import { Container } from "@material-ui/core";

const SafeEnviroment = () => {
  return (
    <SafeEnviromentContainer>
      <Container>
        Ambiente 100% Seguro <i className={"twf-lock"}></i>
      </Container>
    </SafeEnviromentContainer>
  );
};

export default SafeEnviroment;
