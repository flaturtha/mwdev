import Header from "./Header";

interface RootLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

export default function RootLayout({ children, showHeader = true }: RootLayoutProps) {
  console.log("RootLayout rendering, showHeader:", showHeader);
  return (
    <div className="min-h-screen bg-white">
      {showHeader && <Header />}
      {children}
    </div>
  );
} 