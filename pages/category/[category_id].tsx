import CategoriesResourceService from "../../core/services/categories-resource-service";
import SiteLayout from "../../layouts/siteLayout";
import React, { useEffect, useState } from "react";
import { ICategoriesRetrievalModel } from "../../core/models/categories-retrieval,model";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from "./categories.module.scss";
import { useRouter } from "next/router";
import { IBreedCategoryRetrievalModel } from "../../core/models/breed-category-retrieval.model";

const _ategoriesResourceService = CategoriesResourceService;

const CategoriesId = () => {
  const [getCategories, setCategories] =
    useState<Array<IBreedCategoryRetrievalModel>>();
  const router = useRouter();
  useEffect(() => {
    async function getBreedItems(): Promise<void> {
      try {
        const categoriesData = await _ategoriesResourceService.search(
          router.query.category_id.toString()
        );

        setCategories(categoriesData);
      } catch (error) {
        console.log("Something went wrong");
      }
    }
    getBreedItems();
  }, []);

  const renderBreeds = getCategories?.map(
    (item: IBreedCategoryRetrievalModel, index) => {
      return (
        <div key={index} className={styles.gridItem}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={`${item?.url}`}
              alt="green iguana"
            />
            <CardActions>
              <Button className={styles.learnMore} size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    }
  );

  return (
    <SiteLayout>
      <div className={styles.gridContainer}>{renderBreeds}</div>;
    </SiteLayout>
  );
};

export default CategoriesId;
