import { Card } from "@/components/ui/card";
import SearchBar from "../search/SearchBar";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { GoDatabase } from "react-icons/go";
import useRepo from "@/hooks/useRepo";

const RepositoryList = () => {
  const { loading, repos } = useRepo();
  console.log("repository list", repos);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-medium">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-100 ">
      <div className="lg:w-[calc(100%-2rem)] w-full lg:h-[calc(100vh-2rem)] h-[calc(100vh-2rem)]  mx-auto bg-white rounded-[.5rem] border ">
        <div className="flex justify-between lg:h-[8.9rem] h-[11.5rem] lg:mt-0 mt-[2rem]  sm:p-6 p-4  border-b ">
          <div>
            <div className="flex flex-col ">
              <h2 className=" text-[#181D27] text-[1.3rem] font-poppins font-[500]  ">
                Repositories
              </h2>
              <p className=" text-[.8rem] opacity-80 font-openSans font-[500] ">
                {repos.length + " total repositories"}
              </p>
              <div className="lg:hidden flex gap-[1rem] h-fit lg:mt-0 mt-[.3rem]  ">
                <button className="flex items-center justify-center gap-[.2rem] px-[1rem] py-[.3rem] border-2 rounded-[.5rem] ">
                  <HiOutlineRefresh /> Refresh All
                </button>
                <button className="flex items-center justify-center gap-[.2rem] px-[1rem] py-[.3rem] border-2 rounded-[.5rem] bg-[#1570EF] text-white ">
                  <IoMdAdd /> Add Repository
                </button>
              </div>
            </div>

            <div className=" mt-[1rem]  ">
              <SearchBar />
            </div>
          </div>

          <div className=" lg:flex hidden gap-[1rem] h-fit  ">
            <button className="flex items-center justify-center gap-[.2rem] px-[1rem] py-[.3rem] border-2 rounded-[.5rem] ">
              <HiOutlineRefresh /> Refresh All
            </button>
            <button className="flex items-center justify-center gap-[.2rem] px-[1rem] py-[.3rem] border-2 rounded-[.5rem] bg-[#1570EF] text-white ">
              <IoMdAdd /> Add Repository
            </button>
          </div>
        </div>
        <div className=" lg:h-[calc(100vh-11rem)] h-[calc(100vh-15rem)] overflow-y-auto w-full ">
          {repos.map((repo, index) => (
            <Card
              key={index}
              className="flex items-center justify-between sm:p-6 p-4 border-b rounded-none hover:bg-[#F5F5F5] cursor-pointer "
            >
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
                  <span>
                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepositoryList;
