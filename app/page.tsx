import Image from 'next/image';

export default function Testing() {
  return (
    <div className="md:pl-14 h-full w-full grid  grid-cols-6 grid-rows-5 p-10 text-zinc-800">
      <h1 className=" col-start-2 col-end-5 text-3xl  bg-emerald-700/40  rounded-md flex items-center ">
        Welcome to The River Round Table!
      </h1>

      <div className=" col-start-1 col-end-4 row-start-3 row-end-5 rounded-md relative items-center justify-center overflow-hidden z-0">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab odit
        tempore nisi necessitatibus non esse unde eveniet officiis, dolores
        asperiores iure sit facilis. Sit asperiores exercitationem at animi
        quisquam iste!
      </div>
    </div>
  );
}
