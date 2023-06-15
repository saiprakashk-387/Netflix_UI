import axios from "axios";

export const base_Url = "http://localhost:5001"
export const ACCESS_TOKEN = () => sessionStorage.getItem('userToken');

export function updateSessionInfo(value){
    let prevData = JSON.parse(sessionStorage.getItem('userInfo'));
    Object.keys(value).forEach(function(val, key){
         prevData[val] = value[val];
    })
    sessionStorage.setItem('userInfo', JSON.stringify(prevData));
    // window.location.reload()
}

export const APIService = async (method, url, body,navigate) => {
    
    function userbaseurl() {
      return base_Url;
    }
     return await axios({
      method: method,
      baseURL: userbaseurl(),
      url: url,
      headers: {
        Authorization: ACCESS_TOKEN(),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: body,
    })
      .then((e) => {
        // const { data , status} = e;
        // console.log('data',data);
        if (e.status === 200) {
          return {
            status: "success",
            data: e,
          };
        } else {
          return {
            status: "error",
            message: e.message,
          };
        }
      })
      .catch((e) => {
        if (e.message === "Network Error") {
            alert('error')
            // navigate("/network-issue");
        }
        // const refreshToken =
        //   typeof window !== "undefined"
        //     ? sessionStorage.getItem("refreshToken")
        //     : "";
        // if (e.response.status === 401) {
          
        //   axios
        //     .post(`${baseUrl}/refreshtoken/${refreshToken}`)
        //     .then((token) => {
        //       const { data } = token;
  
        //       sessionStorage.setItem(
        //         "accessToken",
        //         "Bearer " + data.accessToken
        //       );
        //       sessionStorage.setItem("refreshToken", data.refreshToken);
        //       router.reload(window.location.pathname);
        //     });
        // }
        // if (userId === null || undefined || "") {
        //   router.push("/auth/login");
        // }
      });  
  };