import Login from '../components/Login';

export default function Home() {
  return (
    <div className=" pl-14 text-3xl w-full flex flex-col items-center justify-center pt-10 text-gray-200">
      <Login />

      <form action="">
        <input className="text-black" type="text" id="username" />
        <label htmlFor="username">username</label>
      </form>
    </div>
  );
}
