"use client";

import Header from "./Header";
import Footer from "./Footer";
import NextTopLoader from "nextjs-toploader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextTopLoader color="#285F9D" showSpinner={false} />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
