/** @format */

import React from "react";
import "./category.css";

import { CategoryCard } from "../../../components";
import { useAxios } from "../../../hooks";
import { Javascript, ReactLogo, CssLogo, HtmlLogo } from "../../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

const categories = [
  {
    categoryName: "React",
    image: ReactLogo,
  },
  {
    categoryName: "Javascript",
    image: Javascript,
  },
  {
    categoryName: "Html",
    image: HtmlLogo,
  },
  {
    categoryName: "Css",
    image: CssLogo,
  },
];

export const Category = () => {
  return (
    <div className='category-wrapper'>
      <div className='category-title'>
        <h2>Categories</h2>
      </div>
      <div className='category-cards'>
        <div className='category-card-wrapper flex flex-gap flex-wrap jc-center'>
          {categories.map((category) => (
            <CategoryCard
              key={category.categoryName}
              img={category.image}
              categoryName={category.categoryName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
