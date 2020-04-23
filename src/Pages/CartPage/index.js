import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const CartPage = () => {
  const prefix = "cart-page";
  const state = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const [course, setCourse] = useState([
    {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      hinhAnh: "",
      maNhom: "",
      ngayTao: "",
      soLuongHocVien: 0,
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: "",
        tenDanhMucKhoaHoc: "",
      },
    },
  ]);
  let cart = state.cart;
  const deleteCourse = (i) => {
    console.log(i);
    cart.slice(0,i);
  };
  const Subtotal = () => {
    let i=0;
    course.reduce((total, e) => {
      if (e.luotXem) {
        total += e.luotXem;
      }
      i=total;
      return total;
    }, 0);
    setTotal(i);
  };
  useEffect(() => {
    if (state.cart) {
      setCourse(state.cart);
    }
  }, [state]);
  useEffect(() => {
    Subtotal();
  });
  return (
    <div className={prefix}>
      <div className="px-4 px-lg-0">
        {/* For demo purpose */}
        <div className="container text-white py-5 text-center">
          <h1 className="display-4">Your Cart</h1>
        </div>
        {/* End */}
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                {/* Shopping cart table */}
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">Course</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Quantity</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.map((course, key) => (
                        <tr key={key}>
                          <th scope="row" className="border-0">
                            <div className="p-2">
                              <img
                                src={course.hinhAnh}
                                width={70}
                                className="img-fluid rounded shadow-sm"
                              />
                              <div className="ml-3 d-inline-block align-middle">
                                <h5 className="mb-0">
                                  {" "}
                                  <a
                                    href="#"
                                    className="text-dark d-inline-block align-middle"
                                  >
                                    {course.tenKhoaHoc}
                                  </a>
                                </h5>
                                <span className="text-muted font-weight-normal font-italic d-block">
                                  Category:{" "}
                                  {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                                </span>
                              </div>
                            </div>
                          </th>
                          <td className="border-0 align-middle">
                            <strong>${course.luotXem}</strong>
                          </td>
                          <td className="border-0 align-middle">
                            <strong>1</strong>
                          </td>
                          <td className="border-0 align-middle">
                            <a
                              href="#"
                              className="text-dark"
                              onClick={() => deleteCourse(key)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* End */}
              </div>
            </div>
            <div className="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Coupon code
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    If you have a coupon code, please enter it in the box below
                  </p>
                  <div className="input-group mb-4 border rounded-pill p-2">
                    <input
                      type="text"
                      placeholder="Apply coupon"
                      aria-describedby="button-addon3"
                      className="form-control border-0"
                    />
                    <div className="input-group-append border-0">
                      <button
                        id="button-addon3"
                        type="button"
                        className="btn btn-dark px-4 rounded-pill"
                      >
                        <i className="fa fa-gift mr-2" />
                        Apply coupon
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Instructions for seller
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    If you have some information for the seller you can leave
                    them in the box below
                  </p>
                  <textarea
                    cols={30}
                    rows={2}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Order summary{" "}
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    Shipping and additional costs are calculated based on values
                    you have entered.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Order Subtotal </strong>
                      <strong>${total}</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Tax</strong>
                      <strong>$0.00</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Total</strong>
                      <h5 className="font-weight-bold">${total}</h5>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-dark rounded-pill py-2 btn-block"
                  >
                    Procceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
