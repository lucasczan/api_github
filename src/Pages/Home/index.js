import React, { useCallback, useState } from "react";
import { Container } from "./style";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Search } from "@material-ui/icons";
import { TextField } from "@material-ui/core";

import RepositoryCard from "./components/RepositoryCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import api from "../../services/api";
import ModalError from "./components/ModalError";

const Home = () => {
  const [fullName, setFullName] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const { data, error, mutate } = useFetch("repositories");

  const handleSearchRepository = useCallback(
    async (fullName) => {
      try {
        const response = await api.get(`repos/${fullName}`);
        const updatedRepository = response.data;
        mutate([updatedRepository], false);
      } catch (error) {
        setErrorMessage({
          title: "Repositório não encontrado :(",
          description: `Não encontramos nenhum repositório com esse nome, tente alguma coisa como "mojombo/grit" `,
        });
        setOpen(true);
      }
    },
    [mutate]
  );

  if (error) {
    return (
      <ModalError
        open={true}
        setOpen={setOpen}
        message={{
          title: "Erro na requisição",
          description:
            "Não conseguimos se conectar com o Github por algum motivo, tente recarregar a página.",
        }}
      />
    );
  }

  return (
    <Container>
      {open && (
        <ModalError setOpen={setOpen} open={open} message={errorMessage} />
      )}

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 search-container">
            <div className="group-items row">
              <div className="col-lg-10 p-0">
                <TextField
                  type="text"
                  data-testid="fullName-input"
                  id="search-repository"
                  label="Pesquisar repositório"
                  variant="filled"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="col-lg-2 mt-2 mt-lg-0 p-0">
                <button
                  data-testid="newRepo-btn"
                  id="search-btn"
                  onClick={() => handleSearchRepository(fullName)}
                >
                  <Search className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          {!data && (
            <div className="col-12 mt-5 pt-5 text-center">
              <CircularProgress data-testid="progress" size={150} />
            </div>
          )}
          {data?.map((repository) => (
            <div key={repository.id} className="col-12 mt-3 col-md-6 col-lg-4">
              <Link to={`/details/${repository.full_name}`}>
                <RepositoryCard repository={repository} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
