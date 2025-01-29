import Header from "@/components/layout/Header";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <main className="h-full">
      <Header isProfileHeader />
      {children}
    </main>
  );
}
