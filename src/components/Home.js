import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooksDetails } from "../actions/BooksAction";
import { getBooksDetails } from "../reducers/BooksReducer";
import BookCard from "./BookCard";

const Home = () => {
  const dispatch = useDispatch();
  const BooksDetails = useSelector(getBooksDetails);

  console.log(BooksDetails);

  useEffect(() => {
    dispatch(fetchBooksDetails());
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
            <Typography variant="h6">Ice And Fire Books Collection</Typography>
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
            {BooksDetails.map((BookDetails, i) => {
              const { name, authors, country, numberOfPages } = BookDetails;
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
                    <BookCard
                      country={country}
                      name={name}
                      authors={authors}
                      numberOfPages={numberOfPages}
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

export default Home;
