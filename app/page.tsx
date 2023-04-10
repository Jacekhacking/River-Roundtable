import Image from 'next/image';

export default function Testing() {
  return (
    <div className="md:pl-14 h-full w-full grid m-10 grid-cols-6 grid-rows-5  ">
      <h1 className=" col-start-2 col-end-5 text-3xl  bg-emerald-700/40 text-zinc-800 rounded-md flex items-center ">
        Welcome to The River Round Table!
      </h1>

      <div className=" col-start-1 col-end-4 row-start-3 row-end-5 rounded-md relative items-center justify-center overflow-hidden z-0">
        <Image
          src={
            'https://images.unsplash.com/photo-1626882167002-b820970ed56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHJpdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
          }
          fill={true}
          alt="river"
          className="object-cover z-0"
        ></Image>
      </div>
    </div>
  );
}
