import { useEffect} from "react";
import { useNavigate,Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");
    if (!token && !isAuthenticated) {
      navigate("/login"); 
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
