import axios from "../Utils/axios";

class CourseService {
  fetchCourseList = () => {
    return axios.request({
      method: "GET",
      url: "QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
    });
  };
  fetchCourseCategory = () => {
    return axios.request({
      method: "GET",
      url: "QuanLyKhoaHoc/LayDanhMucKhoaHoc"
    });
  };
  fetchCourseByCategory = maDanhMuc => {
    return axios.request({
      method: "GET",
      url: `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`
    });
  };
  fetchCourseRevise = (currentPage, pageSize) => {
    return axios.request({
      method: "GET",
      url: `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=${pageSize}&MaNhom=GP01`
    });
  };
}
export default CourseService;
