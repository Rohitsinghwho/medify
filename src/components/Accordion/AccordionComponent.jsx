import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Add from "@mui/icons-material/Add";
import "./AccordionComp.css"
export default function AccordionComponent() {
  const AccordItems = [
    {
      question: "Why choose our medical for your family?",
      answer:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    },
    {
      question: "Why we are different from others?",
      answer:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    },
    {
      question: "Trusted & experience senior care & love",
      answer:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    },
    {
      question: "How to get appointment for emergency",
      answer:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    },
  ];
  return (
    <div>
      {AccordItems.map((item)=>(
      <Accordion className="A">
        <AccordionSummary
          expandIcon={<Add />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className="ATitle">{item.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="ADesc">
            {item.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
  );
}
