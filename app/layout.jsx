import "./globals.css";
import { Rubik } from "next/font/google";

export const dynamic = "force-dynamic";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Helpdesk",
  description: "Welcome to the Helpdesk: Your Next-Gen Support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
