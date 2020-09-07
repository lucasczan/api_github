import React from "react";

import { Container } from "./style";

function RepositoryCard({ repository }) {
  return (
    <Container>
      <div className="row">
        <div className="col-12 img-container">
          <div className="thumb">
            <img src={repository.owner.avatar_url} alt="" className="w-100" />
          </div>
        </div>
        <div className="col-12 mt-3 text-center">
          <p className="user">{repository.full_name}</p>
        </div>
        <div className="col-12">
          <p className="description max-lines">{repository.description}</p>
        </div>
      </div>
    </Container>
  );
}

export default RepositoryCard;
