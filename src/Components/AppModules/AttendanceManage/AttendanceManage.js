"use client";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const AttendanceManage = () => {
  return (
    <>
      <section>
        <div className="form_part">
          <form>
            <Row>
              <Col lg={6}>
                <div>
                  <select
                    class="form-select rounded-1 mb-3 form_border_focus"
                    aria-label="Default select example "
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">Front-end</option>
                    <option value="2">Back-end</option>
                  </select>
                </div>

                <div class="col-auto">
                  <input
                    type="search"
                    id=""
                    placeholder="search"
                    class="form-control form_border_focus rounded-1"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <input
                    type="date"
                    className="form-control rounded-1 mb-3 form_border_focus"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    className="form-control rounded-1 mb-3 form_border_focus"
                  />
                </div>
              </Col>
            </Row>
          </form>
        </div>
        <div className="search_part border mb-3">
          <div className="d-flex justify-content-end p-2">
            <div className="d-flex justify-content-between">
              <div className="me-2">
                <Button
                  type="submit"
                  className="rounded-1 px-4 add_btn_color border-0"
                >
                  PDF
                </Button>
              </div>
              <div className="me-2">
                <Button
                  type="submit"
                  className="rounded-1 px-4 add_btn_color border-0"
                >
                  CSV
                </Button>
              </div>
              <div>
                <Button
                  type="submit"
                  className="rounded-1 px-4 add_btn_color border-0"
                >
                  Excel
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="employee_table table-responsive">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col">SL</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Employee Name</th>
                <th scope="col">In Time</th>
                <th scope="col">Out Time</th>
                <th scope="col">Date</th>
                <th scope="col">Tardiness</th>
                <th scope="col">Minutes</th>
                <th scope="col">Cumulative</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>API00000</td>
                <td>Md Azad </td>
                <td>00:00:00</td>
                <td>00:00:00</td>
                <td>00:00:00</td>
                <td>00:00:00</td>
                <td>00:00:00</td>
                <td>00:00:00</td>
                <td>
                  <button className="add_btn_color border-0 rounded-1 me-2">
                    <FaRegEdit color="white" />
                  </button>
                  <button className="bg-danger border-0 rounded-1">
                    <RiDeleteBin6Line color="white" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AttendanceManage;
