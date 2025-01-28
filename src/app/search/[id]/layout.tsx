import MainHeader from "@/components/layout/MainHeader";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <main>
      <MainHeader />
      {children}
    </main>
  );
}
