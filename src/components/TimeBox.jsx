const TimeBox = ({ value, label }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="relative flex justify-center py-4 lg:px-8 sm:px-7 md:px-8 px-6 bg-Dark-Desaturated-Blue rounded-md box">
        <div className="flex lg:grid justify-center grid-cols-[12px_1fr_12px] items-center absolute mx-auto inset-0 -left-[1px] lg:-left-1 -right-[1px] lg:right-0">
          <div
            className="h-2 w-3 lg:h-3 lg:w-4 bg-Very-Dark-Mostly-Black-Blue rotate-90  
                rounded-tl-full rounded-tr-full"
          ></div>
          <div className="w-[110%] lg:w-[120%] h-[0.5px] bg-Very-Dark-Mostly-Black-Blue/45" />
          <div
            className="h-2 w-3 lg:h-3 lg:w-4 bg-Very-Dark-Mostly-Black-Blue -rotate-90  
                rounded-tl-full rounded-tr-full"
          ></div>
        </div>
        <h2 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] text-Soft-Red ">
          {value.toString().padStart(2, "0")}
        </h2>
      </div>
      <div className="text-Grayish-Blue text-[12px] md:text-sm uppercase lg:tracking-[0.2em]">
        {label}
      </div>
    </div>
  );
};

export default TimeBox;
