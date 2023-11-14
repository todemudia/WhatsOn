import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Content: FC<Props> = ({ children }) => {
  return <main className=" mx-8 my-8 flex-grow">{children}</main>;
};

export default Content;
