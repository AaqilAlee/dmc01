"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { MdDeviceHub } from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div id="navigation_part" className="h-100 side_nav_bg ">
        <div className="p-3">
          <div className="">
            <h3 className="text-white mb-4 border-bothrefm pb-3">
              <Link href="/" className="text-decoration-none text-white">
                DMC-HRM
              </Link>
            </h3>
          </div>
          <div className="accordion_part">
            <div className="pb-2">
              <Accordion>
                {/* manu item 1 */}

                <Accordion.Item eventKey="0" className="pt-0">
                  <Accordion.Header className="p-0 m-0 text-capitalize">
                    <FaUser className="text-light" />
                    <span className="ms-2 text-white text-capitalize">
                      employee
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="text-decoration-none mb-0">
                      <li className="text-capitalize text-white">
                        <Link
                          href="/addemployee"
                          className="text-decoration-none text-white"
                        >
                          add new
                        </Link>
                      </li>
                      <li className="text-capitalize text-white text-decoration-none">
                        <Link
                          href="/manageinfo"
                          className="text-decoration-none text-white"
                        >
                          manage info
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                {/* manu item 2 */}
                <Accordion.Item eventKey="1" className="pt-2">
                  <Accordion.Header className="p-0 m-0 text-capitalize">
                    <BiTargetLock className="text-light" />
                    <span className="ms-2 text-white text-capitalize">
                      Designation
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="text-decoration-none mb-0">
                      <li className="text-capitalize text-white">
                        <Link
                          href="/adddesignation"
                          className="text-decoration-none text-white"
                        >
                          add Designation
                        </Link>
                      </li>
                      <li className="text-capitalize text-white text-decoration-none">
                        <Link
                          href="/designationinfo"
                          className="text-decoration-none text-white"
                        >
                          Manage Designation
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                {/* manu item 2 */}
                <Accordion.Item eventKey="2" className="pt-2">
                  <Accordion.Header className="p-0 m-0 text-capitalize">
                    <MdDeviceHub className="text-light" />
                    <span className="ms-2 text-white text-capitalize">
                      Departments
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="text-decoration-none mb-0">
                      <li className="text-capitalize text-white">
                        <Link
                          href="/adddepartments"
                          className="text-decoration-none text-white"
                        >
                          add Departments
                        </Link>
                      </li>
                      <li className="text-capitalize text-white text-decoration-none">
                        <Link
                          href="/departmentsinfo"
                          className="text-decoration-none text-white"
                        >
                          Manage Departments
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Attendance item 2 */}
                <Accordion.Item eventKey="3" className="pt-2">
                  <Accordion.Header className="p-0 m-0 text-capitalize">
                    <LuNewspaper className="text-light" />
                    <span className="ms-2 text-white text-capitalize">
                      Attendance Reports
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="text-decoration-none mb-0">
                      <li className="text-capitalize text-white text-decoration-none">
                        <Link
                          href="/attendance"
                          className="text-decoration-none text-white"
                        >
                          Manage Attendance
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Settings item 2 */}
                <Accordion.Item eventKey="4" className="pt-2">
                  <Accordion.Header className="p-0 m-0 text-capitalize">
                    <FiSettings className="text-light" />
                    <span className="ms-2 text-white text-capitalize">
                      Settings
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="text-decoration-none mb-0">
                      <li className="text-capitalize text-white text-decoration-none">
                        <Link
                          href="/setting"
                          className="text-decoration-none text-white"
                        >
                          Manage 
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Settings item 2 */}
                <Accordion.Item eventKey="5" className="pt-2">
                  <Accordion.Header className="p-0 m-0 text-capitalize">
                    <FiSettings className="text-light" />
                    <span className="ms-2 text-white text-capitalize">
                      Sync Settings
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="text-decoration-none mb-0">
                      <li className="text-capitalize text-white text-decoration-none">
                        <Link
                          href="/syncSetting"
                          className="text-decoration-none text-white"
                        >
                          Log Data 
                        </Link>
                      </li>
                      
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

               
              </Accordion>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default page;
