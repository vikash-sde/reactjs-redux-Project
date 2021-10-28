import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const CharactersCard = (props) => {
  const { aliases, culture, gender } = props;
  return (
    <>
      <Card style={{ height: "100px" }}>
        <CardContent>
          {aliases.map((aliase) => {
            return (
              <>
                <Typography variant="body2" color="text.secondary">
                  Aliases: {aliase}
                </Typography>
              </>
            );
          })}
          <Typography variant="body2" component="div" color="primary">
            Culture: {culture}
          </Typography>

          <Typography variant="body2">Gender: {gender}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CharactersCard;
