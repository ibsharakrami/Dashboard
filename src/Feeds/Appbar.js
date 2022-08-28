import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function ClickableChips() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Stack direction="row" spacing={1} justifyContent="start" alignItems="center" >
      <Typography>Related</Typography>

      <Chip label="worldwide shipping" onClick={handleClick} />
      <Chip label="Under $50"  onClick={handleClick} />
      <Chip label="kitten" onClick={handleClick} />
      <Chip label="plastic plugs"  onClick={handleClick} />
      <Chip label="pucker shoes" onClick={handleClick} />
      <Chip label="vintage typewriter"  onClick={handleClick} />
    </Stack>
  );
}
