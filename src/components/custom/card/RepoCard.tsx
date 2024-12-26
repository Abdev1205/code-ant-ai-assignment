import { Card } from "@/components/ui/card";
import { Repository } from "@/hooks/useRepo";
import { GoDatabase } from "react-icons/go";

const RepoCard = ({ repo }: { repo: Repository }) => {
  return (
    <Card className="flex items-center justify-between sm:p-6 p-4 border-b rounded-none hover:bg-[#F5F5F5] cursor-pointer ">
      <div className="flex flex-col gap-[.5rem] ">
        <span className="flex items-center gap-2 text-[#181D27] text-[1.1rem] font-medium">
          {repo.name}
          <span
            className={`text-xs px-2 py-1 rounded-full  border border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3] `}
          >
            {repo.visibility}
          </span>
        </span>
        <span className="flex items-center gap-4 text-sm  text-[#181D27]">
          <span className=" font-[400] opacity-80 flex items-center gap-[.2rem] ">
            {repo.language}
            <span className="text-[1.6rem] text-[#1570EF] ">•</span>
          </span>
          <span className="flex items-center gap-[3px] ">
            <GoDatabase /> {repo.size}
          </span>
          <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
        </span>
      </div>
    </Card>
  );
};

export default RepoCard;
