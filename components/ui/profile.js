const Profile = () => {
  return (
    <div
      className="user-pro mr-4 py-1 items-center rounded-2xl hidden md:flex lg:w-[73%] xl:w-[69%]"
    >
      <div className="user-pic">
        <img
          src="/images/Portrait_Placeholder.png"
          className="rounded-2xl"
          alt="user-picture"
        />
      </div>

      <div className="flex flex-col w-full">
        <span className="special text-right font-bold">کاربر ساده</span>
        <span className="text-left ml-2 mt-2 text-gray-400"
        >09019009001
        </span>
      </div>
    </div>
  );
}

export default Profile;