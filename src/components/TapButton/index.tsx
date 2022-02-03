import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  tapMenu: string;
  to: string;
}

function TapButton({ tapMenu, to }: Props) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <TapButtonLink>{tapMenu}</TapButtonLink>
    </Link>
  );
}

export default TapButton;

const TapButtonLink = styled.span`
  display: inline-block;
  width: 154px;
  height: 40px;
  background: #f2f3f5;
  box-shadow: -4px -4px 16px rgba(255, 255, 255, 0.25),
    4px 4px 16px rgba(218, 218, 218, 0.75);
  border-radius: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
  color: #e1e1e1;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.75);
`;
