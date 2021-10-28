import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

const BookCard = (props) => {
  const { name, authors, country, numberOfPages } = props;
  return (
    <>
      <Card style={{ height: "150px" }}>
        <CardContent>
          <Typography variant="body2" component="div" color="primary">
            Bookname: {name}
          </Typography>
          {authors.map((author) => {
            return (
              <>
                <Typography variant="body2" color="text.secondary">
                  Authors: {author}
                </Typography>
              </>
            );
          })}

          <Typography variant="body2">Country: {country}</Typography>
          <Typography variant="body2" style={{ marginTop: "10%" }}>
            No. of pages: {numberOfPages}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default BookCard;
