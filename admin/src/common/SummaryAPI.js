const backendDomain = 'https://feggbackend.onrender.com'
// const backendDomain = 'http://localhost:8006'

const SummaryApi = {
  // For Event
  addEvent: {
    url: `${backendDomain}/api/events`,
    method: 'post',
  },
  getEvent: {
    url: `${backendDomain}/api/events`,
    method: 'get',
  },
  updateEvent: {
    url: `${backendDomain}/api/events/:id`,
    method: 'put',
  },
  deleteEvent: {
    url: `${backendDomain}/api/events/:id`,
    method: 'delete',
  },
  evenetCount: {
    url: `${backendDomain}/api/events`,
    method: 'get',
  },

  // For Courses
  addCourse: {
    url: `${backendDomain}/api/addCourse`,
    method: 'post',
  },
  getCourses: {
    url: `${backendDomain}/api/getCourses`,
    method: 'get',
  },
  updateCourse: {
    url: `${backendDomain}/api/updateCourse/:id`,
    method: 'put',
  },
  deleteCourse: {
    url: `${backendDomain}/api/deleteCourse/:id`,
    method: 'delete',
  },
  CourseCount: {
    url: `${backendDomain}/api/events`,
    method: 'get',
  },

  // Admin routes
  loginAdmin: {
    url: `${backendDomain}/api/loginAdmin`,
    method: 'post',
  },
  // mock test
  subjects: {
    url: `${backendDomain}/api/subjects`,
    method: 'get',
  },
  postQuestion: {
    url: `${backendDomain}/api/questions`,
    method: 'post',
  },
  DeleteQuestion: {
    url: `${backendDomain}/api/questions/:questionId`,
    method: 'delete',
  },
  updateQuestion: {
    url: `${backendDomain}/api/questions/:questionId`,
    method: 'put',
  },
  Mocktest: {
    url: `${backendDomain}/api/mock-test`,
    method: 'post',
  },
  GetMocktest: {
    url: `${backendDomain}/api/practice-set`,
    method: 'get',
  },

  GetminiMocktest: {
    url: `${backendDomain}/api/mock-tests?mocktype=miniMock`,
    method: 'get',
  },
  DeleteMock: {
    url: `${backendDomain}/api/mock-tests/:mockTestId`,
    method: 'delete',
  },
  deleteSubject: {
    url: `${backendDomain}/api/subjects/:id`,
    method: 'delete',
  },
  updateSubject: {
    url: `${backendDomain}/api/subjects/:id`,
    method: 'put',
  },

  getALLResult: {
    url: `${backendDomain}/api/result`,
    method: 'get',
  },
  getAnnouncements: {
    url: `${backendDomain}/api/announcements`,
    method: 'get',
  },
  DeleteAnnouncements: {
    url: `${backendDomain}/api/announcements/:id`,
    method: 'delete',
  },
  carouselImg: {
    url: `${backendDomain}/api/carousel-img`,
    method: 'get',
  },
  DeleteCarouselImg: {
    url: `${backendDomain}/api/carousel-img/:id`,
    method: 'delete',
  },
  Ebooks: {
    url: `${backendDomain}/api/ebooks`,
    method: 'get',
  },
  EbooksId: {
    url: `${backendDomain}/api/ebooks/:id`,
    method: 'get',
  },
  Eupload: {
    url: `${backendDomain}/api/eupload`,
    method: 'post',
  },
  getAllDownloads: {
    url: `${backendDomain}/api/getAllDownloads`,
    method: 'get',
  },
  getuploadvideo: {
    url: `${backendDomain}/api/getuploadvideo`,
    method: 'get',
  },
  Ovideoupdate: {
    url: `${backendDomain}/api/Ovideoupdate/:id`,
    method: 'put',
  },
  Uploadvideo: {
    url: `${backendDomain}/api/uploadvideo`,
    method: 'post',
  },
  Ovideodelete: {
    url: `${backendDomain}/api/Ovideodelete/:id`,
    method: 'delete',
  },
  Register: {
    url: `${backendDomain}/api/register`,
    method: 'get',
  },
  deleteRegister: {
    url: `${backendDomain}/api/register/:id`,
    method: 'get',
  },
  PreviousPaperpost: {
    url: `${backendDomain}/api/PreviousPaperpost`,
    method: 'post',
  },
  PreviousPaper: {
    url: `${backendDomain}/api/PreviousPaperget`,
    method: 'get',
  },
  PreviousPaperId: {
    url: `${backendDomain}/api/PreviousPaper/:id`,
    method: 'put',
  },
}

export default SummaryApi
