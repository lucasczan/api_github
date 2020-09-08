import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Container } from "./style";
import { Star, BugReport, Restaurant, ArrowBack } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import CommentCard from "./components/CommentCard";
import { Link } from "react-router-dom";

const Details = () => {
  const { full_name } = useParams();
  const { data, error } = useFetch(`repos/${full_name}`);

  const comments = useFetch(`repos/${full_name}/comments`);
  if (error) return <div>failed to load</div>;

  return (
    <Container>
      <div className="bg"></div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="avatar">
              {data && (
                <img src={data?.owner.avatar_url} alt="Avatar de perfil" />
              )}
              {!data && <CircularProgress data-testid="progress" size={150} />}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-12"></div>
              <div className="col-12 text-mobile-center">
                <h2 className="full-name">
                  <Link to="/">
                    <ArrowBack className="back" /> <br />
                  </Link>
                  {data?.full_name}
                </h2>
              </div>
              <div className="col-12 mt-2 text-mobile-center">
                <p>{data?.description}</p>0
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <span className="col-12 col-lg-6" />
          <div className="col-12 col-lg-6 counts">
            <p>
              <span className="number-count" data-testid="stars-count">
                {data?.stargazers_count}
              </span>
              <br />
              <span className="icon-container">
                Stars
                <Star className="icon" />
              </span>
            </p>
            <p>
              <span className="number-count">{data?.forks_count}</span>
              <br />
              <span className="icon-container" data-testid="forks-count">
                Forks
                <Restaurant className="icon" />
              </span>
            </p>
            <p>
              <span className="number-count" data-testid="issues-count">
                {data?.open_issues_count}
              </span>{" "}
              <br />
              <span className="icon-container">
                Issues abertas
                <BugReport className="icon" />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5 p-3">
          {comments.data?.length === 0 && (
            <div className="col-12 text-center">
              <p>Este repositório não tem comentários</p>
            </div>
          )}
          {!comments.data && (
            <div className="col-12 d-flex justify-content-center">
              <CircularProgress size={150} />
            </div>
          )}
          {comments.data &&
            comments.data
              .slice(0, 5)
              .map((comment) => <CommentCard comment={comment} />)}
        </div>
      </div>
    </Container>
  );
};

export default Details;
