import React, { useState } from "react";
import { Camera } from "react-bootstrap-icons";
import styled from "styled-components";
import { Text } from "./Text";
import { Stack } from "../layout/Stack";
import { COLORS } from "../materials/colors";

const StyledUploadWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  height: 130px;
  overflow: hidden;
`;

const StyledInputWrapper = styled(Stack)<{ visibile: boolean }>`
  height: 130px;
  width: 110px;
  margin: 0 auto;
  border: 1px solid ${COLORS.black};
  border-radius: 4px;
  opacity: ${({ visibile }) => (visibile ? "0" : "1")};
`;

const StyledInput = styled.input`
  position: absolute;
  height: 0.1px;
  width: 0.1px;
  z-index: 10;
  opacity: 0;
`;

const StyledLabel = styled.label`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const StyledLabelInner = styled(Stack)`
  height: 100%;
`;

const StyledImg = styled.img`
  margin: 0 auto;
  position: absolute;
  top: 0;
  z-index: -1;
  border: 1px solid ${COLORS.black};
  border-radius: 4px;
`;

type UploadPhotoProps = {
  setPhoto: React.Dispatch<React.SetStateAction<File | undefined>>;
};

export const UploadPhoto: React.FC<UploadPhotoProps> = ({
  children,
  setPhoto,
}) => {
  const [preview, setPreview] = useState("");

  const handleImageAsFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.length) {
      const image = e.target.files[0];
      setPreview(URL.createObjectURL(image));
      setPhoto(image);
    }
  };

  return (
    <StyledUploadWrapper>
      <StyledInputWrapper visibile={!!preview}>
        <StyledLabel htmlFor="file">
          <StyledLabelInner justifyContent="center" alignItems="center">
            <Camera size={38} />
            <Text>Add a picture</Text>
          </StyledLabelInner>
          <StyledInput
            accept="image/*"
            onChange={handleImageAsFile}
            type="file"
            id="file"
          />
        </StyledLabel>
      </StyledInputWrapper>
      {preview && <StyledImg src={preview} width={110} alt="photo of coffee" />}
      {children}
    </StyledUploadWrapper>
  );
};
