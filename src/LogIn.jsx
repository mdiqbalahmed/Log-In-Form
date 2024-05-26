import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LogIn = () => {
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const formValidation = () => {
      let isValid = true;

      if (!email) {
        toast.warn("Username is required");
        isValid = false;
      }

      if (password.length < 8) {
        toast.warn("User password is required");
        isValid = false;
      }

      return isValid;
    };
    try {
      if (formValidation()) {
        const reqBody = {
          email_or_phone: email,
          password: password,
        };
        const response = await axios.post(
          "https://www.minigh.croncoders.com/api/auth/login",
          reqBody
        );
        console.log(response.data.user);

        if (response.status === 200) {
          localStorage.setItem("login-info", JSON.stringify(response.data));
        }

        if (response) {
          navigate("/profile", { state: response.data });
        }
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  return (
    <div className="p-3">
      <div
        className=" mx-auto border-4 border-[#F7E4BC]  mt-10 w-full lg:mt-20 lg:w-1/3 rounded-xl
            "
      >
        <div className="text-center">
          <h1 className="mt-5 text-2xl italic font-bold lg:text-4xl">
            Log In Now
          </h1>
        </div>

        <form onSubmit={handelSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email or Phone</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email or phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label"></label>
          </div>
          <div className="flex justify-center ">
            <div className="w-1/2 mt-6 form-control ">
              <button className="btn bg-[#F7E4BC] hover:bg-[#F7E4BC] text-center">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
