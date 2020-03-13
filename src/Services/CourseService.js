import axios from "../Utils/axios";

class CourseService {
  fetchCourseList = (currentPage, pageSize) => {
    return axios.request({
      method: "GET",
      url: `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=${pageSize}&MaNhom=GP01`
    })
    }
    courseDetail = (maKhoaHoc) =>{
      return axios({
        method:"GET",
        url:`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    })
  };
}
export default CourseService;
