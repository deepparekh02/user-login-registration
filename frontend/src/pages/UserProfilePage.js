import UserProfilePageComponent from "./UserProfilePageComponent";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setReduxUserState } from "../redux/userActions";

const updateUserApiRequest = async (
  name,
  lastName,
  phoneNumber,
  address,
  country,
  zipCode,
  city,
  state,
  password
) => {
  const { data } = await axios.put("/api/users/profile", {
    name,
    lastName,
    phoneNumber,
    address,
    country,
    zipCode,
    city,
    state,
    password,
  });
  return data;
};

const fetchUser = async (id) => {
  const { data } = await axios.get("/api/users/profile/" + id);
  return data;
};

const UserProfilePage = () => {
  const reduxDispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userRegisterLogin);

  return (
    <UserProfilePageComponent
      updateUserApiRequest={updateUserApiRequest}
      fetchUser={fetchUser}
      userInfoFromRedux={userInfo}
      setReduxUserState={setReduxUserState}
      reduxDispatch={reduxDispatch}
      localStorage={window.localStorage}
      sessionStorage={window.sessionStorage}
    />
  );
};

export default UserProfilePage;
