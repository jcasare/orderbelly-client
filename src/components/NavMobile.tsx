import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const NavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-slate-800" />
      </SheetTrigger>
      <SheetContent className="space-y-4">
        <SheetTitle>
          <span>OrderBelly</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-slate-800">Login</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
