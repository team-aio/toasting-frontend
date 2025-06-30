// import FloatingMenu from "@/components/layout/FloatingMenu";
import Header from "@/components/layout/Header";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <main className="h-full bg-white">
      <Header isProfileHeader />
      {children}
      {/* <FloatingMenu /> */}
    </main>
  );
}
