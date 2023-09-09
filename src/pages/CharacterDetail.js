import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Grid,
} from "@mui/material";
import Section from "../components/Section";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [comics, setComics] = useState(null);
  const [events, setEvents] = useState(null);
  const [series, setSeries] = useState(null);
  const [stories, setStories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterResponse = await axios.get(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`,
        );
        setCharacter(characterResponse.data.data.results[0]);

        const comicsResponse = await axios.get(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/comics`,
        );
        setComics(comicsResponse.data.data.results);

        const eventsResponse = await axios.get(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/events`,
        );
        setEvents(eventsResponse.data.data.results);

        const seriesResponse = await axios.get(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/series`,
        );
        setSeries(seriesResponse.data.data.results);

        const storiesResponse = await axios.get(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/stories`,
        );
        setStories(storiesResponse.data.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const isLoading = !character || !comics || !events || !series || !stories;

  return (
    <Container>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ my: 2 }}>
          <Typography variant="h4" component="div" gutterBottom>
            {character.name}
          </Typography>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            style={{ width: "100%" }}
          />
          <Typography variant="body1" gutterBottom>
            {character.description}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Section title="Comics" items={comics} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Section title="Events" items={events} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Section title="Series" items={series} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Section title="Stories" items={stories} />
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default CharacterDetail;
