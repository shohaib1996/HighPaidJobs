import React from "react";
import { ModeToggle } from "../global/ModeToggle";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <header className="flex justify-between items-center mb-16 pt-3">
        <h1 className="text-2xl font-bold">HighPaidJobs</h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-6">
            Get Started <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
