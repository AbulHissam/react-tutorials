import { Card, CardContent, Typography } from "@mui/material";

import "./infobox.css";

function Infobox({ title, cases, total, className }) {
  return (
    <Card className={className}>
      <CardContent>
        <Typography textAlign="center">{title}</Typography>
        <Typography textAlign="center">Today:&nbsp;{cases}</Typography>
        <Typography textAlign="center">Total:&nbsp;{total}</Typography>
      </CardContent>
    </Card>
  );
}

export default Infobox;
