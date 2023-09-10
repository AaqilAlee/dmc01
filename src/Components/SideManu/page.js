"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div id="navigation_part" className="h-100 side_nav_bg ">
        <div className="p-3">
          <div className="">
            <h3 className="text-white mb-4 border-bottom pb-3">
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
                        <Link href="/manageinfo" className="text-decoration-none text-white">
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
                        <Link href="/manageinfo" className="text-decoration-none text-white">
                        Manage Designation
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
