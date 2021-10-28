import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharactersDetails } from "../actions/CharactersAction";
import { getCharactersDetails } from "../reducers/CharactersReducers";
import CharactersCard from "./CharactersCard";

const Characters = () => {
  const dispatch = useDispatch();
  const CharactersDetails = useSelector(getCharactersDetails);
  console.log(CharactersDetails);

  useEffect(() => {
    dispatch(fetchCharactersDetails());
  }, []);

  return (
    <>
      <Container>
        <Grid
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "2%",
          }}
        >
          <Grid item xs={2} sm={4} md={10}>
            <Typography variant="h6">Ice And Fire Characters</Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={2}>
            <Link to="/">
              <Button
                variant="text"
                style={{ marginTop: "2%" }}
                color="primary"
              >
                Books
              </Button>
            </Link>

            <Link to="/characters">
              <Button
                variant="text"
                style={{ marginTop: "2%" }}
                color="primary"
              >
                Charaters
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Box>
          <Grid container spacing={6}>
            {CharactersDetails.map((CharacterDetails, i) => {
              const { aliases, culture, gender } = CharacterDetails;
              return (
                <>
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    md={3}
                    key={i}
                    spacing={12}
                    style={{ marginTop: "1%" }}
                  >
                    <CharactersCard
                      aliases={aliases}
                      culture={culture}
                      gender={gender}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Characters;
