import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
const NotFound = () => {
  return (
    <Container>
      <p>Página nao encontrada.</p>
      <Link to="/">Voltar para Home</Link>
    </Container>
  );
};

export default NotFound;
