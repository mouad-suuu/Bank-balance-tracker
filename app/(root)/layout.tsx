import SideBar from "@/components/sideBar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstname: "Mouad", lastname: "Mennioui" };
  return (
    <main className="w-full flex h-screen font-inter ">
      <SideBar user={loggedIn} />
      {children}
    </main>
  );
}
