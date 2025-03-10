"use client";
import Image from "next/image";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="px-[24px] lg:px-[140px] fixed top-0 left-0 w-full bg-white z-50 pb-[0px] "
    >
      <Container className="flex flex-col gap-[10px]">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="w-full flex  justify-between items-center"
        >
          <Nav className="flex gap-6 text-[16px] font-medium text-gray-700 rtl space-x-reverse">
            <Nav.Link href="/" className="item active">
              الرئيسية
            </Nav.Link>
            <Nav.Link href="/pricing" className="item">
              ماذا نقدم
            </Nav.Link>
            <Nav.Link href="/faq" className="item">
              الأسئلة الشائعة
            </Nav.Link>
            <Nav.Link href="/contact" className="item">
              تواصل معنا
            </Nav.Link>
          </Nav>

          <Nav>
            <Button className="login !font-bold hover:bg-[#197A8C] transition-all">
              تسجيل الدخول
            </Button>
          </Nav>
        </Navbar.Collapse>
        <div className="relative w-full flex flex-col items-center">
          <div className="relative w-full flex items-center">
            <div className="h-[2px] bg-gray-200 flex-grow"></div>

            <div className="flex flex-col items-center gap-2">
              <div className="border-gray-200 border-[2px] rounded-full z-[10] w-[80px] h-[80px] flex justify-center items-center bg-white ">
                <Image
                  src="/assets/logo.png"
                  width={51}
                  height={46}
                  alt="Logo"
                />
              </div>

              <div className="absolute bottom-[-46] text-center flex flex-col gap-[5px]">
                <p className="text-[#256296] text-[16px] font-bold m-0">
                  مركبتي
                </p>
                <span className="text-[#256296] text-[12px] font-normal">
                  Mrkabti
                </span>
              </div>
            </div>

            <div className="h-[2px] bg-gray-200 flex-grow"></div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
