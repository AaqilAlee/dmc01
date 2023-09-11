"use client";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Manage = () => {
  return (
    <>
      <section>
        <Row>
          <Col lg={4}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Enter option
              </label>
              <select class="form-select form_border_focus rounded-1" aria-label="Default select example">
                <option selected> select menu</option>
                <option value="1">Minutes</option>
                <option value="2">Hours</option>
              </select>
            </div>
          </Col>
          <Col lg={4}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Enter value
              </label>
              <input
                type="email"
                class="form-control form_border_focus rounded-1"
                id=""
                placeholder="value"
              />
            </div>
          </Col>
          <Col lg={4}>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                
              </label>
            <div class="mb-3">
              <button className="text-capitalize px-4 py-2 bg-primary text-white border-0 mt-1 float-end rounded-1">Get log Data</button>
            </div>
            </div>
          </Col>
          <h4 className="text-capitalize text-center pt-4">Last Synchronized 12:00PM at 00-00-2023</h4>
        </Row>
      </section>

      {/*  */}
      <section className="mt-5">
        <Row>
          <Col lg={4}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Enter option
              </label>
              <select class="form-select form_border_focus rounded-1" aria-label="Default select example">
                <option selected> select menu</option>
                <option value="1">Minutes</option>
                <option value="2">Hours</option>
              </select>
            </div>
          </Col>
          <Col lg={4}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Enter value
              </label>
              <input
                type="email"
                class="form-control form_border_focus rounded-1"
                id=""
                placeholder="value"
              />
            </div>
          </Col>
          <Col lg={4}>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                
              </label>
            <div class="mb-3">
              <button className="text-capitalize px-4 py-2 bg-primary text-white border-0 mt-1 float-end rounded-1">Sync with MIS</button>
            </div>
            </div>
          </Col>
          <h4 className="text-capitalize text-center pt-4">Last Synchronized 12:00PM at 00-00-2023</h4>
        </Row>
      </section>
    </>
  );
};

export default Manage;
