const backendDomain = "https://feggbackend.onrender.com";

const SummaryApi = {
  contact: {
    url: `${backendDomain}/api/contact`,
    method: "post",
  },
  postUserRecordDetails:{
    url:`${backendDomain}/api/post-userRecord`,
    method: "post",
  },
  getCarouselImage:{
    url:`${backendDomain}/api/carousel-img`,
    method: "get",
  },
  getAnnouncements:{
    url:`${backendDomain}/api/announcements`,
    method: "get",
  },
  getuploadvideo:{
    url:`${backendDomain}/api/getuploadvideo`,
    method: "get",
  },
  Register:{
    url:`${backendDomain}/api/register`,
    method: "post",
  },
  Ebooks:{
    url:`${backendDomain}/api/ebooks`,
    method: "post",
  },
  StoreUserDownload:{
    url:`${backendDomain}/api/storeUserDownload`,
    method: "post",
  },
}

export default SummaryApi;