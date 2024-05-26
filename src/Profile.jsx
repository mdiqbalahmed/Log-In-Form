import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const value = location.state.user;
  const { id, name, email, phone_number } = value || {};

  return (
    <div>
      <div className="w-full h-screen bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-[20rem] mx-auto flex flex-col gap-2 px-4 shadow-lg border border-gray-300 border-gray-300 rounded-lg bg-white dark:bg-gray-900 hover:shadow-2xl shadow-green-500/40 hover:shadow-green-500">
            <div className="flex items-center justify-center w-full">
              <img
                className="w-[8rem] h-[8rem] rounded-full outline outline-offset-2 outline-1 outline-dashed outline-blue-400 shadow-lg relative -top-[4rem]"
                src="https://i.ibb.co/PtXqpwy/image.png"
                alt="Profile Image"
              />
            </div>

            <div className="relative flex flex-col w-full h-full gap-4 text-center -top-10">
              <h1 className="text-lg font-semibold uppercase dark:text-white">
                ID : {id}
              </h1>

              <h2 className="font-serif text-xl font-semibold text-gray-700 capitalize dark:text-gray-300">
                Name: {name}
              </h2>

              <p className="text-gray-700 dark:text-gray-300">
                Phone Number : {phone_number}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Email : {email}
              </p>

              <button
                onClick={() => {
                  // remove localStorage
                  localStorage.removeItem("login-info");
                  navigate("/");
                }}
                className="w-[60%] mx-auto bg-blue-500 text-white rounded-3xl px-4 py-2"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
