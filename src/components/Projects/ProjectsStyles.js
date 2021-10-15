import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 35%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 7px 7px 0px 0px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 7px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  font-size: 1.7rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 25px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.7rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #ffffff;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  border-radius: 3px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  &:hover {
    background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 1rem;
`;
export const Tag = styled.li`
  font-size: 1.5rem;
  background: #fff;
  color: #000;
  padding: 1rem;
  border-radius: 5px;
`;
