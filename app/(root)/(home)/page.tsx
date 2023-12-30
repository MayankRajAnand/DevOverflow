import { UserButton } from "@clerk/nextjs";
import { useTheme } from "@/context/ThemeProvider";

export default function Home() {
  const { mode } = useTheme();
  return (
    <div className="flex-center h-screen">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
