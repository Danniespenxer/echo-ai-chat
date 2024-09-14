import { ReactNode } from 'react';
import Sidebar from './Sidebar'; // Example: Sidebar component
import Header from './Header';   // Example: Header component
import Footer from './Footer';   // Example: Footer component
import { useSession } from 'next-auth/react';


interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  const { data: session } = useSession();


  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header session={session} />


      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />


        {/* Main Content */}
        <main className="flex-grow p-6">
          {children}
        </main>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};


export default Layout;
```
