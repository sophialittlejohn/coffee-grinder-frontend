import React from "react";
import styled from "styled-components";
import NextImage from "next/image";

const StyledImage = styled(NextImage)`
  width: ${(props) => props.width}px !important;
  min-width: unset !important;
`;

interface ImageProps {
  alt: string;
  src: string;
}

export const Image: React.FC<ImageProps> = ({ alt, src }) => {
  return <StyledImage height={200} width={200} priority alt={alt} src={src} />;
};
