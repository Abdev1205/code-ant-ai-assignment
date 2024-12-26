import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const RepoCardSkelton = () => {
  return (
    <Card className="flex items-center justify-between p-4 border-b rounded-none sm:p-6">
      <div className="flex flex-col gap-[.5rem] w-full">
        <div className="flex items-center gap-2">
          <Skeleton className="w-[12rem] h-6 rounded-full " />
          <Skeleton className="w-[3rem] h-4 rounded-full" />
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Skeleton className="w-[18rem] h-4 rounded-full " />
        </div>
      </div>
    </Card>
  );
};

export default RepoCardSkelton;
