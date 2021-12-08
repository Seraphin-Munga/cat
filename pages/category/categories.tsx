import CategoriesResourceService from "../../core/services/categories-resource-service";
import SiteLayout from "../../layouts/siteLayout";
import React, { useEffect, useState } from "react";
import { ICategoriesRetrievalModel } from "../../core/models/categories-retrieval,model";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from "./categories.module.scss";
import Link from "next/link";

const _ategoriesResourceService = CategoriesResourceService;

const Categories = () => {
  const [getCategories, setCategories] =
    useState<Array<ICategoriesRetrievalModel>>();

  useEffect(() => {
    async function getBreedItems(): Promise<void> {
      try {
        const categoriesData = await _ategoriesResourceService.get();

        setCategories(categoriesData);
      } catch (error) {
        console.log("Something went wrong");
      }
    }
    getBreedItems();
  }, []);

  const renderBreeds = getCategories?.map(
    (item: ICategoriesRetrievalModel, index) => {
      return (
        <div key={index} className={styles.gridItem}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
            </CardContent>
            <CardActions>
            <Link  as={`/category/${item.id}`} href={`/category/[category_id]`}> 
              <Button className={styles.learnMore} size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        </div>
      );
    }
  );

  return <SiteLayout><div className={styles.gridContainer}>{renderBreeds}</div>;</SiteLayout>;
};

export default Categories;
