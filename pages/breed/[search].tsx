import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import BreedResourceService from "../../core/services/breed-resource-service";
import { IBreedsRetreivalModel } from "../../core/models/breeds-retrieval.model";
import Box from "@mui/material/Box";
import styles from "./breed.module.scss";
import { useRouter } from "next/router";
import SiteLayout from "../../layouts/siteLayout";

const _breedResourceService = BreedResourceService;

const Search = () => {
  const [getBreeds, setBreeds] = useState<Array<IBreedsRetreivalModel>>();
  const router = useRouter();

  useEffect(() => {
    async function getBreedItems(): Promise<void> {
      try {
        const breedData = await _breedResourceService.search(router.query.search.toString());

        setBreeds(breedData);
      } catch (error) {
        console.log("Something went wrong");
      }
    }
    getBreedItems();
  }, []);

  const renderBreeds = getBreeds?.map((item: IBreedsRetreivalModel, index) => {
    return (
      <div key={index} className={styles.gridItem}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://cdn2.thecatapi.com/images/${item.reference_image_id}`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button className={styles.learnMore} size="small">Learn More</Button>
            </CardActions>
          </Card>
      </div>
    );
  });
  return <SiteLayout><div className={styles.gridContainer}>{renderBreeds}</div>;</SiteLayout>;
};


export default Search;
