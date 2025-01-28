const backendDomain = "http://localhost:8083";

const SummaryApi = {
  contact: {
    url: `${backendDomain}/api/contact`,
    method: "post",
  },
  postUserRecordDetails:{
    url:`${backendDomain}/api/post-userRecord`,
    method: "post",
  },
}

export default SummaryApi;