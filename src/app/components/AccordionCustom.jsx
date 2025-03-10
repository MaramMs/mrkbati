"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CustomAccordion() {
  const [activeKey, setActiveKey] = useState(null);

  const toggleIcon = (key) => (activeKey === key ? "-" : "+");

  return (
    <div className="md:container md:mx-auto max-w-[800px] w-full p-4 sm:p-6">
    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
      {["1", "2", "3", "4"].map((item, index) => (
        <Accordion.Item
          key={index}
          eventKey={index.toString()}
          className="border-[1px] border-[#E5E5E5] rounded-[8px] mb-4"
        >
          <Accordion.Header className="!text-[#1D1E25] flex justify-between !text-[24px] !font-bold md:text-base">
            {item}- كيف يمكنني تقديم طلب للحصول على رخصة قيادة عبر المنصة؟
            <span
              className="me-2 inline-flex w-[40px] h-[40px] text-[#1D1E25] text-[12px] bg-[rgba(50, 168, 201, 0.2)] rounded-[4px] items-center justify-center"
              style={{ backgroundColor: "rgba(50, 168, 201, 0.2)" }}
            >
              {toggleIcon(index.toString())}
            </span>
          </Accordion.Header>
          <Accordion.Body className="text-[18px] md:text-base text-[#1D1E25] md:w-[80%]">
            من خلال تقديم طلب في تطبيق مركبتي والذهاب إلى شاشة إنشاء الحساب وإدخال المعلومات الخاصة بك والتي يطلبها التطبيق،
            ومن ثم الانتقال إلى شاشة المعلومات الشخصية واستكمال باقي المعلومات حتى يتم إرسال الطلب إلى الجهات المعنية،
            وبعد الموافقة على طلبك يمكنك التمتع بالخدمات التي يوفرها نظام مركبتي.
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  </div>
  
  );
}
