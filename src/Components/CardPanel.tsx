
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { ArrowForward as ArrowIcon } from "@mui/icons-material";
import InfiniteCards from "./InfiniteCards";
/*
const categories = [
  { title: "Auto", image: "path-to-image", description: "Auto description" },
  { title: "The Arts", image: "path-to-image", description: "The Arts description" },
  { title: "Trades", image: "path-to-image", description: "Trades description" },
  { title: "Remedial", image: "path-to-image", description: "Remedial description" },
  { title: "Technology", image: "path-to-image", description: "Technology description" },
  { title: "Academics", image: "path-to-image", description: "Academics description" },
];
*/

export function CardPanel (){
  const categories = InfiniteCards;
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardMedia
                component="img"
                alt={category.title}
                height="140"
                image={category.img}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{category.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {category.title}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                sx={{
                  marginTop: "auto",
                  backgroundColor: "#9c27b0", 
                  "&:hover": { backgroundColor: "#7b1fa2" },
                }}
                endIcon={<ArrowIcon />}
              >
                Teach
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardPanel;