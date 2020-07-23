import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

interface IImageProps {
    fluid: FluidObject;
    alt?: string;
    style?: object;
}

export const Image = ({ fluid, alt, style }: IImageProps) => (
    <Img className="image" fluid={fluid} alt={alt} style={style} />
);
