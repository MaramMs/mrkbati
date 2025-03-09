import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { CiLocationOn } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiUserReceived2Line } from "react-icons/ri";
import { FaLinkedinIn,FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";






const Footer = () => {
  return (
  <footer className='rounded-tl-[40px] rounded-tr-[40px]'  
  
  style={{
    background: "radial-gradient(73.85% 131.13% at 42.85% 164.12%, #71D3FF 0%, #32A8C9 100%)",
  }}
  >
<Container>
<div className=''>
<div className='text-center text-white py-5 flex flex-col gap-[30px]' >
<h2 className='font-normal text-[64px]'>كيفية التواصل معنا</h2>
<p className='text-[24px] font-normal'>لمزيد من المعلومات أو للتواصل معنا، يمكنكم استخدام أحد وسائل التواصل التالية </p>
</div>
 

 <Row >
  <Col>
    <div className='flex flex-col gap-[41px]'>
      <div className='flex items-center  gap-[10px]'>
      <CiLocationOn className='text-[24px] text-[#fff]'/>
      <h3 className='font-semibold !text-[16px] !text-[#fff]'>
      رام الله المنطقة الصناعية  خلف وزارة الخارجية
      </h3>

      

      </div>

      <div className='flex items-center  gap-[10px]'>
      <IoIosPhonePortrait 
      className='text-[24px] text-[#fff]'/>
      <h3 className='font-semibold !text-[20px] !text-[#fff]'>
      +972 566 904 904
      </h3>

      

      </div>
    

    </div>
  </Col>
  <Col>
    <div className='flex flex-col gap-[41px]'>
      <div className='flex items-center  gap-[10px]'>
      <CiLocationOn className='text-[24px] text-[#fff]'/>
      <h3 className='font-semibold !text-[16px] !text-[#fff]'>
      رام الله المنطقة الصناعية  خلف وزارة الخارجية
      </h3>

      

      </div>

      <div className='flex items-center  gap-[10px]'>
      <IoIosPhonePortrait 
      className='text-[24px] text-[#fff]'/>
      <h3 className='font-semibold !text-[20px] !text-[#fff]'>
      +972 566 904 904
      </h3>

      

      </div>
    

    </div>
  </Col>


  <Col>
    <div className='flex flex-col gap-[41px]'>
      <div className='flex items-center  gap-[10px]'>
      <CiLocationOn className='text-[24px] text-[#fff]'/>
      <h3 className='font-semibold !text-[16px] !text-[#fff]'>
      رام الله المنطقة الصناعية  خلف وزارة الخارجية
      </h3>

      

      </div>

      <div className='flex items-center  gap-[10px]'>
      <IoIosPhonePortrait 
      className='text-[24px] text-[#fff]'/>
      <h3 className='font-semibold !text-[20px] !text-[#fff]'>
      +972 566 904 904
      </h3>

      

      </div>
    

    </div>
  </Col>
 

 </Row>
</div>

<hr className="border-t border-transparent" style={{ borderTopColor: "rgba(255, 255, 255, 0.5)" }} />



<div className='mt-[50px]'>


<div className='sm:flex md:flex sm:flex-col md:flex-row  justify-between items-center mb-[45px] '>
  <p className='text-[32px] text-white font-bold'>
  منصة مركبتي لكل فئات المجتمع ! سجل معنا
  </p>

  <Link href='/' className='!no-underline'>
    <div className='flex bg-[#FFFFFF] rounded-[10px] py-[22px]   justify-center items-center gap-[10px] w-[255px]'>
    <RiUserReceived2Line className='text-[30px] text-[#32A8C9]'/>


    <p className='text-[#32A8C9] text-[20px] font-bold !no-underline m-0'>
تسجيل الدخول
    </p>

    </div>

  </Link>

  

</div>

<Row>

<Col>
<ul className='flex flex-col gap-[12px]'>
  <li className='text-[#fff] text-[16px] font-bold'>
  الرئيسي
  </li>
  <li className='text-[#fff] !text-[16px] !font-normal'>
  الرئيسي
  </li>
  <li className='text-[#fff] !text-[16px] !font-normal'>
  ماذا نقدم
  </li>
  <li className='text-[#fff] !text-[16px] !font-normal'>
  الأسئلة الشائعة
  </li>
  <li className='text-[#fff] !text-[16px] !font-normal'>
  
  تواصل معنا
  </li>

</ul>

</Col>

<Col>
<ul className='flex flex-col gap-[12px]'>
  <li className='text-[#fff] text-[16px] !font-bold'>
  روابط سريعة
  </li>
  <li className='text-[#fff] !text-[16px] !font-normal'>
  الرئيسي
  </li>
  <li className='text-[#fff] !text-[16px] !font-normal'>
  ماذا نقدم
  </li>
  <li className='text-[#fff] !text-[16px] !font-normal'>
  الأسئلة الشائعة
  </li>
  <li className='text-[#fff] !text-[16px] !font-normal'>
  
  تواصل معنا
  </li>

</ul>

</Col>

<Col>
<ul className='flex flex-col gap-[12px]'>
  <li className='text-[#fff] text-[16px] !font-bold'>
  روابط سريعة
  </li>
  <li className='text-[#fff] !text-[16px] !font-normal'>
  الرئيسي
  </li>
  <li className='text-[#fff] !text-[16px] !font-normal'>
  ماذا نقدم
  </li>
  <li className='text-[#fff] !text-[16px] !font-normal'>
  الأسئلة الشائعة
  </li>
  <li className='text-[#fff] !text-[16px] !font-normal'>
  
  تواصل معنا
  </li>

</ul>

</Col>
<Col>
  <div className='flex flex-col gap-[20px] mb-[99px]'>
    <p className='!text-[16px] !font-bold text-white'>احصل على التطبيق</p>

     <div className=" flex justify-center items-center gap-[28px]  m-auto">
                <a
                  href="#"
                  className="bg-[#1D1E25] py-[10px] px-[22px] rounded-[8px]  border border-[#808D9E]"
                >
                  <Image
                                      src="/assets/appStore.svg"
                    alt="وصف الصورة"
                    width={155}
                    height={39}
                    layout="intrinsic"
                    objectFit="contain"
                  />
                </a>
                <a
                  href="#"
                  className="bg-[#1D1E25] py-[10px] px-[22px] rounded-[8px]  border border-[#808D9E]"
                >
                  <Image
                    src="/assets/googleStore.svg"
                    alt="وصف الصورة"
                    width={155}
                    height={39}
                    layout="intrinsic"
                    objectFit="contain"
                  />
                </a>
              </div>
  </div>


  <div className='flex items-center  gap-[20px] text-[#E2E8F0]'>
    <p className='text-[#E2E8F0] m-0'>تابعنا</p>
<div className='flex items-center gap-[16px]'>

<FaLinkedinIn  className='text-[24px]'/>
    <FaInstagram className='text-[24px]'/>
    <FaTwitter className='text-[24px]'/>
    <FaFacebookF className='text-[24px]'/>
    <FaYoutube className='text-[24px]'/>
</div>


    {/* #E2E8F0 */}
  </div>

</Col>
</Row>
</div>


<hr className="border-t border-transparent" style={{ borderTopColor: "rgba(255, 255, 255, 0.5)" }} />



<div className='flex sm:flex-col md:flex-row  justify-between items-center'>
  <p className='text-[16px] font-normal text-[#fff]'>مركبتي @ 2025. جميع الحقوق محفوظة. </p>

  <div className='flex sm:flex-col  md:flex-row justify-between items-center gap-[32px]'>
   <Link href='/' className='!text-[#fff] !font-normal !text-[16px] !no-underline'>
   تواصل معنا
   </Link>
   <Link href='/' className='!text-[#fff] !font-normal !text-[16px] !no-underline'>
   
   خصوصية
   </Link>

   <Link href='/' className='!text-[#fff] !font-normal !text-[16px] !no-underline'>
   شروط

   </Link>
  </div>
</div>


</Container>


  </footer>
  )
}

export default Footer
