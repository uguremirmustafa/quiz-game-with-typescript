import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <div className="grid">
      <main className="main">{children}</main>
      <footer className="footer">
        created by <a href="https://devugur.com">devugur</a>
      </footer>
    </div>
  );
};
export default Layout;
