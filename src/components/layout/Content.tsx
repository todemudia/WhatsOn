import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Content: FC<Props> = ({ children }) => {
  return <main className="container mx-auto my-4 flex-grow">{children}</main>;
};

export default Content;
