import axios from "axios";
import {
  AdminAllUsersListAction, ProfileUpdateAction, addAnalyticsAction, getAnalyticsAction,
} from "../Redux/Slice";
import { ACCESS_TOKEN, base_Url, updateSessionInfo } from "./apiConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const adminUsersList = () => {
  return (dispatch) => {
    axios
      .get(base_Url + "/allusers", {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        dispatch(AdminAllUsersListAction(res?.data));
      })
      .catch((err) => {
      });
  };
};

export const profileUpdate = (value,id) => {
  return (dispatch) => {
    axios.put(base_Url +`/profileUpdate/${id}`,value, {
      headers: {
        "Content-Type": "application/json",
        Authorization: ACCESS_TOKEN() ? `Bearer ${ACCESS_TOKEN()}` : undefined,
      }
    }).then((res) => {
      if (res.status === 200) {
        console.log("ress",res);
        toast.success(res?.data?.message);
        dispatch(ProfileUpdateAction(res))
        updateSessionInfo(res?.data?.adminprofile)
         sessionStorage.setItem("profileStatus", "updated")
       
      }
    }).catch((err) => {
      toast.error(err?.response?.data?.message);
    })
  }
}

export const getAnalyticsAPI = () => {
  return (dispatch) => {
    axios
      .get(base_Url + "/analyticsdata", {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        // console.log('resssanalytics',res);
        dispatch(getAnalyticsAction(res?.data));
      })
      .catch((err) => {
      });
  };
};
export const addAnalyticsAPI = (data) => {
  console.log('data',data);
  return (dispatch) => {
    axios
      .post(base_Url + "/addanalytics",data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        // console.log('analytics',res);
        dispatch(addAnalyticsAction(res?.data));
      })
      .catch((err) => {
        console.log('err',err);
      });
  };
};