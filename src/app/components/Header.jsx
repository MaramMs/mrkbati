'use client'
import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/header.css'
import Image from 'next/image';
function Header() {
  return (
<>
      <Navbar collapseOnSelect expand="lg" className="px-[24px] lg:px-[135px] lg:h-[111px] fixed top-0 left-0 w-full bg-white z-50 ">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="w-full flex justify-between items-center">
            
            {/* القوائم */}
            <Nav className="flex gap-6 text-[16px] font-medium text-gray-700 rtl space-x-reverse">
              <Nav.Link href="/" className="item active">الرئيسية</Nav.Link>
              <Nav.Link href="/pricing" className="item">ماذا نقدم</Nav.Link>
              <Nav.Link href="/faq" className="item">الأسئلة الشائعة</Nav.Link>
              <Nav.Link href="/contact" className="item">تواصل معنا</Nav.Link>
            </Nav>

            {/* زر تسجيل الدخول */}
            <Nav>
              <Button className="login !font-bold hover:bg-[#197A8C] transition-all">
                تسجيل الدخول
              </Button>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

     
      <div className="relative w-full flex flex-col items-center ">
        <Container className="relative w-full flex justify-center items-center">
        
          <hr className="w-full border-t border-gray-[#E9ECF2] h-[2px]" />

        
          <div className="absolute px-2 border-[#E9ECF2] border-[2px] rounded-full z-[999] w-[50px] h-[50px] flex justify-center items-center ">
            <Image src="/assets/logo.png" width={51} height={46} alt="Logo" />
          </div>
        </Container>
      </div>
    </>
  )
}

export default Header
