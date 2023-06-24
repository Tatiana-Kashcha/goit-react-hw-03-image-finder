import * as s from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <s.DivButton>
      <s.Button type="button" onClick={onLoadMore}>
        Load more
      </s.Button>
    </s.DivButton>
  );
};
