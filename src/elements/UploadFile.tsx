import React, { useState } from "react";
import { Camera } from "react-bootstrap-icons";
import styled from "styled-components";
import { Text } from "./Text";
import { Stack } from "../layout/Stack";
import { COLORS } from "../materials/colors";

const StyledInputWrapper = styled(Stack)`
  height: 130px;
  width: 110px;
  margin: 0 auto;
  border: 1px solid ${COLORS.black};
  border-radius: 4px;
`;

const StyledInput = styled.input`
  display: none;
  height: 0.1px;
  width: 0.1px;
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
`;

type UploadFileProps = {
  setPhoto: React.Dispatch<React.SetStateAction<File | undefined>>;
};

export const UploadFile: React.FC<UploadFileProps> = ({
  children,
  setPhoto,
}) => {
  const [preview, setPreview] = useState<string>("");

  const handleImageAsFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const image = e.target.files[0];
      setPreview(URL.createObjectURL(image));
      setPhoto(image);
    }
  };

  return (
    <>
      {preview ? (
        <StyledImg src={preview} height={130} width={110} alt="smt" />
      ) : (
          <StyledInputWrapper>
            <StyledLabel htmlFor="file">
              <StyledLabelInner justifyContent="center" alignItems="center">
                <Camera size={38} />
                <Text>Add a picture</Text>
              </StyledLabelInner>
            </StyledLabel>
          </StyledInputWrapper>
        )}
      <StyledInput accept="image/*" onChange={handleImageAsFile} type="file" id="file" />
      {children}
    </>
  );
};
