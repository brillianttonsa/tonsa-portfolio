import { jsPDF } from "jspdf";
import { resumeData } from "../data/resumeData.js";

const FONT_SIZE = {
  small: 9,
  body: 10,
  subheading: 11,
  heading: 14,
  title: 18,
};

const MARGIN = 20;
const LINE_HEIGHT = 5;

const addSection = (doc, title, y) => {
  doc.setFontSize(FONT_SIZE.heading);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 41, 59);
  doc.text(title, MARGIN, y);
  doc.setDrawColor(252, 211, 77);
  doc.setLineWidth(0.5);
  doc.line(MARGIN, y + 2, MARGIN + 40, y + 2);
  return y + 8;
};

const addText = (doc, text, y, opts = {}) => {
  const { maxWidth = 170, fontSize = FONT_SIZE.body, bold = false } = opts;
  doc.setFontSize(fontSize);
  doc.setFont("helvetica", bold ? "bold" : "normal");
  doc.setTextColor(51, 65, 85);
  const lines = doc.splitTextToSize(text, maxWidth);
  lines.forEach((line) => {
    doc.text(line, MARGIN, y);
    y += LINE_HEIGHT;
  });
  return y;
};

const addBulletList = (doc, items, y) => {
  doc.setFontSize(FONT_SIZE.small);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  items.forEach((item) => {
    doc.text("• " + item, MARGIN + 3, y);
    y += LINE_HEIGHT - 1;
  });
  return y;
};

export const generateResumePDF = () => {
  const doc = new jsPDF({ format: "a4", unit: "mm" });
  const data = resumeData;

  let y = MARGIN;

  // Header
  doc.setFontSize(FONT_SIZE.title);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  doc.text(data.name, MARGIN, y);
  y += 8;

  doc.setFontSize(FONT_SIZE.subheading);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 116, 139);
  doc.text(data.title, MARGIN, y);
  y += 8;

  const contactStr = `${data.contact.email} | ${data.contact.phone} | ${data.contact.github} | ${data.contact.linkedin}`;
  doc.setFontSize(FONT_SIZE.small);
  doc.text(contactStr, MARGIN, y);
  y += 12;

  // Summary
  y = addSection(doc, "Summary", y);
  y = addText(doc, data.summary, y) + 4;

  // Education
  y = addSection(doc, "Education", y);
  data.education.forEach((edu) => {
    doc.setFontSize(FONT_SIZE.subheading);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 41, 59);
    doc.text(edu.degree, MARGIN, y);
    y += 5;
    doc.setFontSize(FONT_SIZE.small);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(252, 172, 21);
    doc.text(`${edu.school} • ${edu.years}`, MARGIN, y);
    y += 5;
    doc.setTextColor(71, 85, 105);
    doc.text(edu.desc, MARGIN, y);
    y += 8;
  });
  y += 2;

  // Experience
  y = addSection(doc, "Experience", y);
  data.experience.forEach((exp) => {
    doc.setFontSize(FONT_SIZE.subheading);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 41, 59);
    doc.text(exp.role, MARGIN, y);
    y += 5;
    doc.setFontSize(FONT_SIZE.small);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(252, 172, 21);
    doc.text(`${exp.company} • ${exp.years}`, MARGIN, y);
    y += 5;
    doc.setTextColor(71, 85, 105);
    const lines = doc.splitTextToSize(exp.desc, 170);
    lines.forEach((line) => {
      doc.text(line, MARGIN, y);
      y += LINE_HEIGHT - 1;
    });
    y += 6;
  });
  y += 2;

  // Skills
  y = addSection(doc, "Technical Skills", y);
  data.skills.forEach((group) => {
    doc.setFontSize(FONT_SIZE.small);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 41, 59);
    doc.text(group.category + ":", MARGIN, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(group.items.join(" • "), MARGIN + 25, y);
    y += 6;
  });

  doc.save("Abdullatif-Mnyamisi-CV.pdf");
};
