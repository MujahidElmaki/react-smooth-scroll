import React from 'react';
import { Button } from '../ButtonElements';
import {
  RoadmapContainer,
  RoadmapWrapper,
  RoadmapRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './RoadmapElements';
function Roadmap({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) {
  return (
    <>
      <RoadmapContainer lightBg={lightBg} id={id}>
        <RoadmapWrapper>
          <RoadmapRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src="svg-1.svg" alt={alt} />
              </ImgWrap>
            </Column2>
          </RoadmapRow>
        </RoadmapWrapper>
      </RoadmapContainer>
    </>
  );
}

export default Roadmap;
