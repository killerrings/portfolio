import React from "react";
import marked from "marked";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyes";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "../../components/InfoSection/InfoSection.elements";

const Post = ({
  article,
  primary,
  lightBg,
  lightTopLine,
  alt,
  imgStart,
  start,
}) => {
  console.log(article);
  const { name, featuredImage, description, main, tag } = article.fields;
  const postDescription = marked(description);
  return (
    <div>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{tag}</TopLine>
                <Heading lightText="true">{name}</Heading>
                <Subtitle
                  lightTextDesc="true"
                  dangerouslySetInnerHTML={{ __html: postDescription }}
                />
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    Read More
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={featuredImage.fields.file.url} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </div>
  );
};

export default Post;
