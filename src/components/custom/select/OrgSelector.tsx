import { useState } from "react";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"; // Assumes you're using a library like Radix-UI or similar for the combobox.

const OrgSelector = () => {
  const [selectedDepartment] = useState("Abhay Mishra Orgs");

  return (
    <div className="w-full mb-[1rem] ">
      <Select
        value={selectedDepartment || undefined}
        // onValueChange={handleSelect}
      >
        <SelectTrigger className="w-full border shadow-sm border-black rounded-[.3rem] font-[500] font-poppins focus:ring-black   ">
          <SelectValue placeholder="Choose a department">
            {selectedDepartment || "Choose a department"}
          </SelectValue>
        </SelectTrigger>
      </Select>
    </div>
  );
};

export default OrgSelector;
