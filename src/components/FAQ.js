"use client";
import "./css/FAQ.css";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is Power BI, and how can it benefit my enterprise?",
    answer: "Power BI is a business analytics tool that provides interactive visualizations and business intelligence capabilities. It helps enterprises make data-driven decisions."
  },
  {
    question: "Do you offer a demo product so that we can try before we buy?",
    answer: "Yes, we offer demo products for potential customers to explore our solutions before making a purchase."
  },
  {
    question: "Do you offer Power BI training or just report development?",
    answer: "We provide both Power BI training and report development services to help you maximize your investment."
  },
  {
    question: "What types of Power BI reports do you provide?",
    answer: "We offer a variety of Power BI reports tailored to your business needs, including financial, operational, and sales reports."
  },
  {
    question: "What is your process for developing Power BI dashboards?",
    answer: "Our process includes understanding your requirements, data modeling, dashboard design, and user training."
  },
  {
    question: "Can you integrate data from multiple sources like ERP, CRM, and third-party tools?",
    answer: "Yes, we can integrate data from various sources, including ERP, CRM, and other third-party tools."
  },
  {
    question: "What ERP systems do you work with?",
    answer: "We work with a range of ERP systems, including SAP, Oracle, Microsoft Dynamics, and more."
  },
];

export default function FAQ() {
  return (
    <div className="faq-main">
      <div className="faq-content">
      <div className="faq-top-container">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-bottom-container">
      <Accordion type="single" collapsible>
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="flex justify-between gap-x-4 ">{item.question}</AccordionTrigger>
            <AccordionContent className="flex">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      </div>
      </div>
    </div>
  );
}