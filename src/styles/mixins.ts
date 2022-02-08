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

export const defaultButton = css`
  padding: 0.3em;
  border: none;
  cursor: pointer;
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

export const hoverOrange = css`
  &:hover {
    color: #ff6e00;
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const inputArea = css`
  width: 100%;
  height: 2em;
  border: none;
  outline: none;
  padding-left: 0.3em;
  border-radius: 0.3em;
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

export const rightSideOrangeButton = css`
  margin-left: auto;
  background-color: #ff6e00;
  text-shadow: none;
  color: white;
`;
