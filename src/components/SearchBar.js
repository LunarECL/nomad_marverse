import React from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
} from "@mui/material";

const SearchBar = ({
  search,
  setSearch,
  limit,
  setLimit,
  orderBy,
  setOrderBy,
}) => (
  <Grid container spacing={2} alignItems="flex-end">
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Grid>
    <Grid item xs={6} sm={3} md={2}>
      <FormControl fullWidth>
        <InputLabel>Limit</InputLabel>
        <Select value={limit} onChange={(e) => setLimit(e.target.value)}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6} sm={3} md={2}>
      <FormControl fullWidth>
        <InputLabel>Order By</InputLabel>
        <Select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="name">Name (A-Z)</MenuItem>
          <MenuItem value="-name">Name (Z-A)</MenuItem>
          <MenuItem value="modified">Modified (Newest)</MenuItem>
          <MenuItem value="-modified">Modified (Oldest)</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  </Grid>
);

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
  setOrderBy: PropTypes.func.isRequired,
};

export default SearchBar;
