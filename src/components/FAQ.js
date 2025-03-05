"use client";
import "./css/FAQ.css";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is Power BI, and how can it benefit my enterprise?",
    answer: "Power BI is a powerful business intelligence tool from Microsoft that enables enterprises to visualise data, generate insightful reports, and make data-driven decisions. At KIS, we connect Power BI directly to your ERP system—such as Odoo, Microsoft Dynamics, SAP, and others—to streamline and automate your reporting processes. By eliminating manual reporting and improving data accuracy, we help your business gain real-time insights, enhance operational efficiency, and drive smarter decision-making."
  },
  {
    question: "Do you offer a demo product so that we can try before we buy?",
    answer: "Yes! We offer a completely free Power BI report tailored to your business needs. First, we'll have an initial consultation to understand your business, data sources, and reporting requirements. From there, we'll create a customized Power BI report for you—no strings attached. If you're not satisfied with our services, you can walk away without paying a penny. It's our way of showing you the value we can bring before you commit."
  },
  {
    question: "Do you offer Power BI training or just report development?",
    answer: "Our primary focus is building Power BI reports tailored to your business needs. However, we also offer paid consultation calls where we can answer any Power BI-related questions, provide guidance on best practices, and help you make the most of your data. Whether you need technical support or strategic advice, we're here to help."
  },
  {
    question: "What types of Power BI reports do you provide?",
    answer: "We have experience building Power BI reports for every part of a business. Whether you need insights into Sales, Marketing, Purchasing, Finance, Operations, or Management, we create customized reports that help you track key metrics, identify trends, and make data-driven decisions. No matter your industry or department, we ensure your reports deliver valuable insights tailored to your business needs."
  },
  {
    question: "What is your process for developing Power BI dashboards?",
    answer: "Our process is simple and efficient.\n\n1. Initial Consultation – We sit down with you to understand your reporting requirements, the ERP system you use, and how to access your data.\n\n2. Report/Dashboard Development – We build your Power BI report or dashboard based on your needs, ensuring it delivers actionable insights.\n\n3. First Draft & Revisions – We provide a first draft for your review, making any necessary changes to ensure it aligns with your expectations.\n\n4. Final Delivery – Once approved, your Power BI dashboard is ready to use—helping you make data-driven decisions with ease.\n\nNo complicated processes, just high-quality reports tailored to your business."
  },
  {
    question: "Can you integrate data from multiple sources like ERP, CRM, and third-party tools?",
    answer: "Yes! One of the great advantages of Power BI is its ability to bring together data from multiple sources into a single, unified dashboard. We can integrate data from ERP systems (e.g., SAP, Microsoft Dynamics, Odoo), CRM platforms (e.g., HubSpot, Salesforce), third-party tools, Excel for budgets, and more. This allows you to get a complete view of your business, making it easier to analyze performance, track key metrics, and make data-driven decisions—all in one place."
  },
  {
    question: "What ERP systems do you work with?",
    answer: "We work with the majority of the leading ERP systems, including SAP, Microsoft Dynamics, Odoo, NetSuite, and more. Our expertise allows us to connect Power BI to these systems seamlessly, enabling automated and insightful reporting. If you're using a different ERP, get in touch with us—we'll be happy to discuss whether we can integrate Power BI with your specific system!"
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
          <AccordionItem className="faq-color-1" key={index} value={`item-${index}`}>
            <AccordionTrigger className="flex justify-between gap-x-4 faq-color-1">{item.question}</AccordionTrigger>
            <AccordionContent className="flex faq-color-2">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      </div>
      </div>
    </div>
  );
}