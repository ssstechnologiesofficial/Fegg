const backendDomain = "http://localhost:5000";

const SummaryApi = {
  // For Event
  addEvent: {
    url: `${backendDomain}/api/events`,
    method: "post",
  },
  getEvent: {
    url: `${backendDomain}/api/events`,
    method: "get",
  },
  updateEvent: {
    url: `${backendDomain}/api/events/:id`,
    method: "put",
  },
  deleteEvent: {
    url: `${backendDomain}/api/events/:id`,
    method: "delete",
  },
  evenetCount: {
    url: `${backendDomain}/api/events`,
    method: "get",
  },

  // For Courses
  addCourse: {
    url: `${backendDomain}/api/addCourse`,
    method: "post",
  },
  getCourses: {
    url: `${backendDomain}/api/getCourses`,
    method: "get",
  },
  updateCourse: {
    url: `${backendDomain}/api/updateCourse/:id`,
    method: "put",
  },
  deleteCourse: {
    url: `${backendDomain}/api/deleteCourse/:id`,
    method: "delete",
  },
  CourseCount: {
    url: `${backendDomain}/api/events`,
    method: "get",
  },

  // Admin routes
  loginAdmin: {
    url: `${backendDomain}/api/loginAdmin`,
    method: "post",
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
    url: `${backendDomain}/api/mock-tests?mocktype=mock`,
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
};

export default SummaryApi;
