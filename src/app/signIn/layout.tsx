import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return <main className="h-full">{children}</main>;
}
