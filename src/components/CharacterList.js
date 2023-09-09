import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CharacterItem from "./CharacterItem";
import { CircularProgress, Grid } from "@mui/material";

const CharacterList = ({ search, limit, orderBy }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?${
          search ? `nameStartsWith=${search}&` : ""
        }limit=${limit}&offset=${offset}&orderBy=${orderBy}`,
      );
      if (response.data.data) {
        setCharacters((prevCharacters) =>
          offset === 0
            ? [...response.data.data.results]
            : [...prevCharacters, ...response.data.data.results],
        );
      } else {
        console.error("Unexpected API response", response);
      }
    } catch (error) {
      console.error("Failed to fetch characters", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setOffset(0);
    setCharacters([]);
    fetchCharacters();
  }, [search, limit, orderBy]);

  useEffect(() => {
    fetchCharacters();
  }, [offset]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop <
          document.documentElement.offsetHeight - 500 ||
        loading
      ) {
        return;
      }
      setOffset((prevOffset) => prevOffset + limit);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, limit]);

  return (
    <Grid container spacing={3}>
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
      {loading && (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
};

CharacterList.propTypes = {
  search: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default CharacterList;
