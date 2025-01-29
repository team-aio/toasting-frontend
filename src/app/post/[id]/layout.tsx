import PostHeader from "@/components/layout/PostHeader";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <PostHeader />
      <main className="flex items-center justify-center">{children}</main>
    </>
  );
}
