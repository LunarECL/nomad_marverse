import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar";
import CharacterList from "../components/CharacterList";
import { Box, Container } from "@mui/material";

const Home = () => {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const [orderBy, setOrderBy] = useState("");

  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <SearchBar
          search={search}
          setSearch={setSearch}
          limit={limit}
          setLimit={setLimit}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
        <Box sx={{ my: 2 }}>
          <CharacterList search={search} limit={limit} orderBy={orderBy} />
        </Box>{" "}
      </Box>
    </Container>
  );
};

Home.propTypes = {
  search: PropTypes.string,
  limit: PropTypes.number,
  orderBy: PropTypes.string,
};

Home.defaultProps = {
  search: "",
  limit: 10,
  orderBy: "",
};

export default Home;
