import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RF To Do",
  description:
    "A basic to do app built to practice React useState and ContextAPI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:dark">
      <body className="bg-background text-mutedForeground px-4 pb-8 text-pretty">
        <div className="max-auto max-w-screen-lg">{children}</div>
      </body>
    </html>
  );
}
