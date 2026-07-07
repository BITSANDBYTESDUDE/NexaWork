import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "NexaWork",
  description: "Employee productivity and company reporting platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
