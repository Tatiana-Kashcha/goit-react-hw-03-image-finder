import * as s from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <>
      <s.Button type="button" onClick={onLoadMore}>
        Load more
      </s.Button>
    </>
  );
};
