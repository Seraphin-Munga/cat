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
import Link from "next/link";
import FavouriteResourceService from "../../core/services/favourite-resource-services";
import { IFavouriteCreationModel } from "../../core/models/favourite-creation.model";

const _breedResourceService = BreedResourceService;
const _favouriteResourceService = FavouriteResourceService;

const Breeds = () => {
  const [getBreeds, setBreeds] = useState<Array<IBreedsRetreivalModel>>();
  let [favouriteCreationModel, setFavouriteCreationModel] =
    useState<IFavouriteCreationModel>();

  async function handleFavourite(imgId: string): Promise<void> {
    try {
      favouriteCreationModel = {
        image_id: imgId,
        sub_id: "your-user-1234",
      };

      await _favouriteResourceService.favourite(favouriteCreationModel);
      alert("This image has been saved as favourite");
    } catch (error) {
      alert("Something went wrong");
    }
  }

  useEffect(() => {
    async function getBreedItems(): Promise<void> {
      try {
        const breedData = await _breedResourceService.get();

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
            image={`${item.image?.url}`}
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
            <Link as={`/breed/${item.name}`} href={`/breed/[search]`}>
              <Button className={styles.learnMore} size="small">
                Learn More
              </Button>
            </Link>
            <Button
              onClick={() => handleFavourite(item.image.id)}
              className={styles.favourite}
              size="small"
            >
              Favourite
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  });

  return <div className={styles.gridContainer}>{renderBreeds}</div>;
};

export default Breeds;
