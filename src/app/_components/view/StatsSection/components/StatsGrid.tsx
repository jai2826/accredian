const STATS_DATA = [
  {
    value: "10K+",
    label:
      "Professionals trained for exceptional career success",
    hasBorder: true,
  },
  {
    value: "200+",
    label:
      "Sessions delivered with unmatched learning excellence",
    hasBorder: true,
  },
  {
    value: "5K+",
    label: "Active learners engaged in dynamic courses",
    hasBorder: false,
  },
];

export const StatsGrid = () => {
  return (
    <div className="w-full py-10 max-w-3xl  mx-auto">
      <div className="grid grid-cols-1 w-full  md:flex md:flex-row md:justify-center gap-y-3  md:gap-x-2  md:p-4 lg:p-8 rounded-xl">
        {STATS_DATA.map((stat, index) => (
          <div
            key={index}
            className={`
              flex md:flex-col  w-fit max-w-[400px] mx-auto justify-center items-center gap-x-4 gap-y-1 md:gap-y-2  lg:px-2 
              ${stat.hasBorder ? " border-b md:border-b-0 md:border-r border-gray-200 pb-5 md:pb-0 md:pr-10" : ""}
            `}>
            {}
            <div className="flex items-center justify-center  bg-blue-100 text-blue-600 font-semibold text-lg md:text-2xl rounded-full min-w-24 h-14  md:p-2">
              <h2 className="text-center">{stat.value}</h2>
            </div>

            {}
            <div className=" md:max-w-[250px] md:w-[300px] text-left md:text-center ">
              <p className="text-sm md:text-base font-medium text-gray-700 ">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
