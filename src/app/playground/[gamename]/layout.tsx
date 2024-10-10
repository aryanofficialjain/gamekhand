import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <div>
      <main>{children}</main> {/* This will render the content of page.js */}
    </div>
  );
}

export default Layout;