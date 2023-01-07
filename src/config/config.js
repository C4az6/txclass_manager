const BASE_URL = 'http://localhost:3000/'
export const API = {
  LOGIN: {
    LOGIN_ACTION: BASE_URL + 'admin/login_action',
    LOGIN_CHECK: BASE_URL + 'admin/login_check',
    LOGOUT_ACTION: BASE_URL + 'admin/logout_action'
  },
  COURSE: {
    GET_COURSE_DATA: BASE_URL + 'get_courses',
    GET_COURSE_FIELD_DATA: BASE_URL + 'get_course_fields'
  }
}

export const NAV = [
  {
    field: 'course',
    title: '课程管理',    // 主要用来做课程上下架,课程分类选择
  },
  {
    field: 'recom_course',
    title: '推荐课程',    // 推荐课程的上下架
  },
  {
    field: 'slide',
    title: '轮播图管理'   // 轮播图数据上下线
  },
  {
    field: 'collection',
    title: '课程集合管理'   // 课程集合的上下线
  },
  {
    field: 'teacher',
    title: '老师管理'   // 老师的上下线,明星老师设置
  },
  {
    field: 'student',
    title: '学生管理'   // 学生的上下线
  },
  {
    field: 'crawler',
    title: '数据爬取'   // 爬取各种数据
  }
];