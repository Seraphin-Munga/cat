import React, { useEffect, useState } from "react";
import SiteLayout from "../../layouts/siteLayout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from "./favourite.module.scss";
import FavouriteResourceService from "../../core/services/favourite-resource-services";
import { IfavouriteRetrieval } from "../../core/models/favourite-retrieval.model";

const _favouriteResourceService = FavouriteResourceService;

const Favourities = () => {
  const [getFavourities, setFavourities] =
    useState<Array<IfavouriteRetrieval>>();

  useEffect(() => {
    async function getBreedItems(): Promise<void> {
      try {
        const favouritiesData = await _favouriteResourceService.get()

        setFavourities(favouritiesData);
      } catch (error) {
        console.log(error);
      }
    }
    getBreedItems();
  }, []);

  const renderFavourite = getFavourities?.map(
    (item: IfavouriteRetrieval, index) => {
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
            </CardContent>
            <CardActions>
              {/* <Button className={styles.learnMore} size="small">
                Learn More
              </Button> */}
            </CardActions>
          </Card>
        </div>
      );
    }
  );

  return <SiteLayout><div className={styles.gridContainer}>{renderFavourite}</div>;</SiteLayout>;
};

export default Favourities;
