import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Noureddine Trabelsi | AI Engineering Portfolio", description: "Portfolio of Noureddine Trabelsi, AI Engineering Student at Ibn Khaldoun University (UIK). Machine Learning, NLP and Business Intelligence." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
