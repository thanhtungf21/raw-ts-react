import LoadingSpan from "@/components/loading-span/LoadingSpan";
import { useForm } from "@/hooks/useForm";
import { authenticationServices } from "@/services/authentication.service";
import { LoginForm } from "@/types/authentication.types";
import { displayErrorToast } from "@/utils/errorHandler";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const initialLoginFormState: LoginForm = {
  email: "",
  password: "",
};

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    values: loginForm, // 'values' from the hook is your form state
    handleChange, // The handleChange function from the hook
    // resetForm, // Optional: if you want to reset the form
  } = useForm<LoginForm>(initialLoginFormState);

  const handleLogin = useCallback(async () => {
    try {
      setIsLoading(true);
      console.log({ loginForm });
      const response = await authenticationServices.login(loginForm);

      if (response?.status == 200) {
        toast.success(response?.message);
        navigate("/");
      }
    } catch (error) {
      displayErrorToast(error, "Login failed. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
      // resetForm()
    }
  }, [loginForm]);

  return (
    <div className="h-100 flex justify-center items-center">
      <div className="w-10/12 md:w-1/2 lg:w-1/3 flex flex-col gap-2">
        <input
          type="text"
          name="email"
          className="input w-full"
          placeholder="Enter email"
          onChange={handleChange}
          value={loginForm.email}
          disabled={isLoading}
          required
        />
        <input
          type="password"
          name="password"
          className="input w-full"
          placeholder="Enter password"
          value={loginForm.password}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
        <button
          className="btn btn-primary"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? <LoadingSpan /> : "LOGIN"}
        </button>
      </div>
    </div>
  );
};

export default Login;
