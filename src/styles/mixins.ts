import { css } from 'styled-components';

export const backgroundGradient = css`
  background: linear-gradient(
    180deg,
    #f2f3f5 0%,
    #ffffff 49.48%,
    rgba(242, 243, 245, 0.977401) 100%,
    #f2f3f5 100%
  );
`;

export const transparentLabel = css`
  & > label {
    opacity: 0.5;
  }
`;

export const hoverOrange = css`
  &:hover {
    color: #f3643f;
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const inputPadding = css`
  padding: 1.2em 0.5em;
`;

export const inputArea = css`
  font-family: 'Pretendard-Regular';
  width: 100%;
  height: 2em;
  border: none;
  outline: none;
  padding-left: 0.3em;
  border-radius: 0.3em;
  opacity: 0.8;
  box-shadow: rgb(204, 219, 232) 1px 1px 3px 0px inset,
    rgba(255, 255, 255, 0.5) -1px -1px 2px 0.5px inset;
`;

export const placeholders = css`
  &::placeholder {
    font-family: 'Pretendard-Regular';
    opacity: 0.6;
  }
`;

export const posterShadow = css`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const leftSideSiverButton = css`
  background-image: linear-gradient(
    to right,
    #e1e1e1 0%,
    #eef2f3 51%,
    #e1e1e1 100%
  );
  background-size: 200% auto;
  text-shadow: none;
  transition: 0.5s;
  color: #f3643f;
  opacity: 0.8;
  &:hover {
    background-position: right center;
    opacity: 1;
  }
`;

export const rightSideOrangeButton = css`
  margin-left: auto;
  background-image: linear-gradient(
    to right,
    #f3643f 0%,
    #f0cb35 51%,
    #f3643f 100%
  );
  background-size: 200% auto;
  text-shadow: none;
  transition: 0.5s;
  color: white;
  &:hover {
    background-position: right center;
    color: #fff;
  }
`;

export const defaultButton = css`
  ${flexCenter};
  border: none;
  cursor: pointer;
`;

export const gradientBlue = css`
  background-image: linear-gradient(
    to right,
    #345471,
    #3c5e7e,
    #45688b,
    #4e7398,
    #577da5,
    #6186ad,
    #6b8fb5,
    #7598bd,
    #83a2c2,
    #91abc6,
    #9fb5cb,
    #adbfd0
  );
`;

export const greyButton = css`
  ${defaultButton}
  border-radius: 0.3em;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.75);
  background-color: rgba(242, 243, 245, 0.79);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px,
    rgba(0, 0, 0, 0.1) 0px 2px 3px -1px, rgba(0, 0, 0, 0.1) 0px -1px 0px inset;
  color: #e1e1e1;
`;
