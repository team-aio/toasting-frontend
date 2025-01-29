import Header from "@/components/layout/Header";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <Header isPostHeader />
      <main className="flex items-center justify-center">{children}</main>
    </>
  );
}
