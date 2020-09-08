import React from "react";
import { Container } from "./style";
import moment from "moment";

const CommentCard = ({ comment }) => {
  return (
    <Container className="col-12 p-3">
      <div className="row">
        <div className="col-12 col-lg-4 p-4 d-flex justify-content-center">
          <img
            src={comment.user?.avatar_url}
            alt="Avatar do comentário"
            className="avatar"
          />
        </div>
        <div className="col-12 col-lg-8">
          <div className="row">
            <div className="col-12">
              <p>
                <strong>{comment.user?.login}</strong>
              </p>
            </div>
            <div className="col-12">
              <p className="max-lines">{comment.body}</p>
            </div>
            <div className="col-12 mt-5 date-container">
              <p>{moment(comment.created_at).format("DD/MM/yyyy")}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CommentCard;
