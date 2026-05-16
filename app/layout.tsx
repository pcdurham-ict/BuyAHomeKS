import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pattie Durham | Kansas & Missouri Mortgage Loan Officer",
  description:
    "Pattie Durham is a Mortgage Loan Officer licensed in Kansas and Missouri, offering VA loans, FHA loans, conventional loans, down payment assistance, DSCR investor loans, and home loan guidance.",
  keywords: [
    "Kansas mortgage lender",
    "Missouri mortgage lender",
    "Wichita mortgage lender",
    "VA loans Kansas",
    "FHA loans Kansas",
    "conventional loans Missouri",
    "down payment assistance Kansas",
    "DSCR loans Missouri",
    "first time home buyer Wichita",
    "Planet Home Lending",
    "Pattie Durham mortgage"
  ],
  openGraph: {
    title: "Pattie Durham | Kansas & Missouri Mortgage Loan Officer",
    description:
      "Modern luxe mortgage guidance for buyers across Kansas and Missouri.",
    type: "website",
    images: ["/images/pattie-headshot.png"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
