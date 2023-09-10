"use client";
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const page = () => {
  const [key, setKey] = useState("home");
  return (
    <>
      <div className="add_employ">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-2"
        >
          <Tab eventKey="home" title="Home">
            <Form>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>
                      Employee ID <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      In Time <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Surname <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Department <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Location <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      NID <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Register Date <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="date"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Phone <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Employee Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Out Time <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      BOD <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Designation <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Branch <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Address <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Status <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Gender <span className="text-danger">*</span>
                    </Form.Label>

                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Male"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Female"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Form.Group>
                </Col>
              </Row>
              <Button
                type="submit"
                className="rounded-1 mt-2 px-4 add_btn_color border-0"
              >
                + Add
              </Button>
            </Form>
          </Tab>

          <Tab eventKey="profile" title="Profile">
            <Form>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>
                      Employee ID <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      className="rounded-1 form_border_focus"
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload Photo</Form.Label>
                      <Form.Control type="file" className="rounded-1 form_border_focus"/>
                    </Form.Group>
                  </Form.Group>
                </Col>
              </Row>
              <Button
                type="submit"
                className="rounded-1 px-4 mt-2 add_btn_color border-0"
              >
                + Add
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default page;
