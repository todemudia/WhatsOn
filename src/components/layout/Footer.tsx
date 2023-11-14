import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <p>
        &copy; {new Date().getFullYear()} WatchOn by @JoshMudia. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
