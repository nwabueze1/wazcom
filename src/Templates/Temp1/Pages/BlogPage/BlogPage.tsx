import React from "react";
import { useBlogPageStyles } from "./styles";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";

export const BlogPage = () => {
  const classes = useBlogPageStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img
            src="https://s3.eu-west-2.amazonaws.com/medusa.com/templates/redcharlie-t-7KEq9M0b0-unsplash+1.png"
            alt=""
            className={classes.image}
          />
        </div>
        <div className={classes.contentContainer}>
          <p className={classes.header}>
            Earn Passive Income with your NFTs — NFT DeFi Staking
          </p>
          <p className={classes.content}>
            Building an NFT portfolio filled with many unique items — pixelated,
            animated, zombie-lated or even human-lated — does come with a really
            good feeling of fun and excitement, but can it also come with juicy
            passive income. Amidst the NFT buzz and drops, it is easy to totally
            get immersed in the collectibility value, the art, and the exclusive
            benefits of ownership without considering other utilities for these
            rare coins. However, recently, some unique platforms have increased
            the utility of NFT ownership with staking. NFTs are fundamentally an
            ERC721 token on the blockchain that anyone can mint — rare tokens
            that can be used to represent a digital or physical item of value.
            For each NFT minted on a blockchain, there is an attached scarce
            item. The investment potential for these rare tokens are
            encompassing. Many collectors have realised millions of dollars from
            their resale just a few months after purchasing them. But what if
            you can earn passive income while you hodle your dear pixelized
            NFTs? What if you can make passive income with your Metaverse
            items/assets? One of the many ways to earn more profit with your NFT
            is staking, and this utility is beginning to get more traction,
            especially with game NFT assets which has gained much prominence in
            the last year. This article will explore the possibilities of
            staking your NFTs while holding.
          </p>
        </div>
        <div className={classes.navContainer}>
          <div className={classes.slide}>
            <div className={classes.rightSlide}>
              <ArrowRightAlt className={classes.leftArrow} />
              <div>Check our blog for recipes.....</div>
            </div>
            <div className={classes.rightSlide}>
              <div>Check our blog for recipes.....</div>
              <ArrowRightAlt className={classes.rightArrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
