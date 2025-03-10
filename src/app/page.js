import Image from "next/image";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import AccordionCustom from "./components/AccordionCustom";
import { FaPlay } from "react-icons/fa";
import SwiperCustom from "./components/SwiperCustom";


export default function Home() {
  return (
    <>
   

      <section className="bg-[#F7FDFF] pb-[114px] ">
       <Container>

       <Row>
        



<Col xs={12} md={6} className="relative w-full h-full">
  <div className="absolute inset-0 bg-white opacity-50 z-0"></div>
  
  <Image
    src="/assets/g12.png"
    width={786}
    height={728}
    alt="image not found"
    className="absolute inset-0 w-full h-full object-cover z-1"
  />

  <Image
    src="/assets/sol.png"
    width={584}
    height={671}
    alt="image not found"
    className="relative z-2"
  />
</Col>


          <Col xs={12} md={6}>
            <h2 className="!text-[#1D1E25] !text-[20px] md:!text-[35px] !font-bold !mb-[10px]">
              حلول مبتكرة عبر منصة مركبتي
            </h2>
            <p className="text-[#1D1E25] font-normal md:text-[19px] text-[12px] ">
              منصة مركبتي تقدم حلولاً مبتكرة وفعالة تعالج مشاكل النقل والمواصلات
              عبر تقديم خدمات إلكترونية سهلة الوصول
            </p>

            <ul className="flex flex-col gap-[20px] md:gap-[35px] !mt-[45px]">
              <li className="flex  gap-[15px]">
                <div className="bg-[rgba(50,168,201,0.21)] md:w-[45px] md:h-[45px] w-[40px] h-[40px] flex justify-center items-center rounded-[10px]">
                  <Image
                    src="/assets/icons/user.svg"
                    alt="user"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="flex flex-col  gap-[10px]">
                  <h3 className=" text-[14px] md:!text-[20px] !font-bold !text-[#192252]">
                    رخصة القيادة الإلكترونية
                  </h3>
                  <p className="text-[#848FAC] text-[12px] md:text-[16px] !font-medium">
                    تحسين كفاءة النقل والمواصلات عبر تقديم خدمات تقنية متطورة
                  </p>
                </div>
              </li>

              <li className="flex  gap-[15px]">
                <div className="bg-[rgba(50,168,201,0.21)] md:w-[45px] md:h-[45px] w-[40px] h-[40px] flex justify-center items-center  md:rounded-[10px]">
                  <Image
                    src="/assets/icons/user.svg"
                    alt="user"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="flex flex-col  gap-[10px]">
                  <h3 className="!text-[20px] !font-bold !text-[#192252]">
                    رخصة القيادة الإلكترونية
                  </h3>
                  <p className="text-[#848FAC] text-[16px] !font-medium">
                    تحسين كفاءة النقل والمواصلات عبر تقديم خدمات تقنية متطورة
                  </p>
                </div>
              </li>

              <li className="flex  gap-[15px]">
                <div className="bg-[rgba(50,168,201,0.21)] w-[45px] h-[45px] flex justify-center items-center rounded-[10px]">
                  <Image
                    src="/assets/icons/user.svg"
                    alt="user"
                    width={31}
                    height={31}
                  />
                </div>

                <div className="flex flex-col  gap-[10px]">
                  <h3 className="!text-[20px] !font-bold !text-[#192252]">
                    رخصة القيادة الإلكترونية
                  </h3>
                  <p className="text-[#848FAC] text-[16px] !font-medium">
                    تحسين كفاءة النقل والمواصلات عبر تقديم خدمات تقنية متطورة
                  </p>
                </div>
              </li>
              <li className="flex  gap-[15px]">
                <div className="bg-[rgba(50,168,201,0.21)] w-[45px] h-[45px] flex justify-center items-center rounded-[10px]">
                  <Image
                    src="/assets/icons/user.svg"
                    alt="user"
                    width={31}
                    height={31}
                  />
                </div>

                <div className="flex flex-col  gap-[10px]">
                  <h3 className="!text-[20px] !font-bold !text-[#192252]">
                    رخصة القيادة الإلكترونية
                  </h3>
                  <p className="text-[#848FAC] text-[16px] !font-medium">
                    تحسين كفاءة النقل والمواصلات عبر تقديم خدمات تقنية متطورة
                  </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
       </Container>
      </section>

      <section className=" md:px-[121px] mt-[50px]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <h2 className="text-[30px] md:!text-[50px] !font-bold !text-[#1F1F39]">
            مزايا استخدام منصة <span className="text-[#32A8C9] !text-[50px] !font-bold"> مركبتي</span>
          </h2>
          <p className="text-[#1F1F39] font-normal text-[14px] md:text-[20px] opacity-[50%] text-center m-auto  md:w-[58%]">
            منصة مركبتي تتميز بسهولة الاستخدام وتوفير الوقت للسائقين، مع تقديم
            أعلى درجات الشفافية في المعلومات، وتعزيزز السلامة على الطرقات.
          </p>
        </div>

        <Container className="py-[30px] bg-[#F7FDFF] mt-[50px] ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
            <div className="md:text-left">
            <div className="bg-[rgba(50,168,201,0.21)] mb-[20px] md:mr-auto w-[71px] h-[71px] flex justify-center items-center rounded-[50%]">

              <img
                src="/assets/icons/hand.svg"
                alt="Icon 1"
                className="mb-2"
                style={{ width: "39px", height: "39px" }}
              />

              </div>
              <h3 className="!mb-[10px] !text-[#1F1F39] !text-[20px] !font-bold">سهولة الاستخدام</h3>
              <p className="text-[#1F1F3980] text-opacity-[50%] text-[16px] leading-[36px]">
                يمكنك استخدام منصة مركبتي بكل سهولة وراحة والاستمتاع بكل
                الخدمات.
              </p>
            </div>
            <div className="hidden  text-center row-span-2 md:flex items-center justify-center ">
            <div className="relative w-[430px] h-[430px] bg-[rgba(208,245,255,0.49)] rounded-[50%] z-[1]">
            <img src="/assets/phone.png" alt="Phone" className=" z-2 absolute lg:top-[5%] xl:top-[-19%]" />
              </div>
        </div>
            <div className="text-right">
            <div className="bg-[rgba(50,168,201,0.21)] mb-[20px]  w-[71px] h-[71px] flex justify-center items-center rounded-[50%]">

              <img
                src="/assets/icons/search.svg"
                alt="Icon 2"
                className="mb-2"
                style={{ width: "39px", height: "39px" }}
              />

              </div>
              <h3 className="!mb-[10px] !text-[#1F1F39] !text-[20px] !font-bold">تعزيز الشفافية</h3>
              <p className="text-[#1F1F3980] text-opacity-[50%] text-[16px] leading-[36px]">
                من خلال منصة مركبتي يمكنك توفير الوقت والجهد وسهولة الوصول لجميع
                الخدمات.
              </p>
            </div>
            <div className="md:text-left">
            <div className="bg-[rgba(50,168,201,0.21)] mb-[20px] md:mr-auto w-[71px] h-[71px] flex justify-center items-center rounded-[50%]">

              <img
                src="/assets/icons/time.svg"
                alt="Icon 3"
                className="mb-2"
                style={{ width: "39px", height: "39px" }}
              />

              </div>
              <h3 className="!mb-[10px] !text-[#1F1F39] !text-[20px] !font-bold">توفير الوقت والجهد</h3>
              <p className="text-[#1F1F3980] text-opacity-[50%] text-[16px] leading-[36px]">
                توفر منصتنا نظام متكامل وشفاف يتيح للسائقين متابعة معلوماتهم
                بسهولة وثقة.
              </p>
            </div>
            <div className="text-right">
            <div className="bg-[rgba(50,168,201,0.21)] mb-[20px]  w-[71px] h-[71px] flex justify-center items-center rounded-[50%]">

              <img
                src="/assets/icons/peace.svg"
                alt="Icon 4"
                className="mb-2"
                style={{ width: "39px", height: "39px" }}
              />
              </div>
              <h3 className="!mb-[10px] !text-[#1F1F39] !text-[20px] !font-bold">تحسين السلامة المرورية</h3>
              <p className="text-[#1F1F3980] text-opacity-[50%] text-[16px] leading-[36px]">
                تساعد منصتنا في تحسين السلامة المرورية من خلال توفير إشعارات
                فورية للسائقين.
              </p>
            </div>
          </div>
        </Container>

        <div className="text-center  flex flex-col !gap-[15px] mt-[30px] border-b border-b-[1px] border-b-[rgba(31,31,57,0.1)] pb-2">
          <h2 className="text-[#1F1F39] !font-bold !text-[16px]">استمتع بمزايا مركبتي</h2>

          <p className="text-[14px] font-normal text-[rgba(31,31,57,0.5)] m-0">
            من خلال منصة مركبتي يمكنك التمتع بجميع المزايا التي نقدمها من خلال
            التطبيق الخاص فينا
          </p>
        </div>
      </section>









      <section className="md:px-[121px] mt-[50px] ">

        <div className="flex flex-col items-center justify-center gap-[10px]">
          <h2 className="!text-[#1D1E25] tex-[40px] md:!text-[60px] !font-bold text-center">
      منصة <span className="text-[#32A8C9] text-[50px] !font-bold"> مركبتي</span>    لكل فئات المجتمع
          </h2>


          <p className="text-[#1F1F3980] opacity-[50%] text-[14px] md:text-[20px] font-normal text-center md:w-[50%] mx-auto !mb-[25px]">
          منصة مركبتي مصممة لخدمة جميع فئات المجتمع من السائقين المحترفين الى طلاب الجامعات لتسهيل الوصول الى خدمات النقل بكفاءة وراحة
          </p>
        </div>


        <div className="flex justify-center items-center gap-[7px]">

          <div className="bg-[#32A8C9] w-[32px] h-[32px] !rounded-full text-white flex justify-center items-center">

        <FaPlay />
          </div>


          <p className="text-[#1F1F39] text-[12px] !font-bold m-0">شاهد الفيديو</p>
        </div>

 <div className="mt-[30px]">

        <SwiperCustom />
 </div>
        </section>



      <section className=" md:py-[115px] md:px-[121px] mt-[50px] bg-[#F7FDFF]">
        <h2 className="!text-[#1D1E25] text-[30px] md:!text-[60px] !font-bold text-center md:!mb-[60px]">الاسئلة الشائعة</h2>

       <AccordionCustom />
      </section>
    </>
  );
}
