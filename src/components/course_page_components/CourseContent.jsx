import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CourseContent() {
  const [expandAll, setExpandAll] = React.useState(false);
  const [remount, setRemount] = React.useState(0);
  return (
    <div>
      <h1 className="font-bold text-xl mb-10">Course content</h1>
      <div className="flex justify-between items-baseline mb-2 flex-col md:flex-row gap-3">
        <div>
          <span>
            <span className="text-sm">15 Sections</span>
            <span
              className="material-symbols-outlined text-[10px] mx-[2px] text-gray-700"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              fiber_manual_record
            </span>
            <span className="text-sm">146 lectures</span>
            <span
              className="material-symbols-outlined text-[10px] mx-[2px] text-gray-700"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              fiber_manual_record
            </span>
            <span className="text-sm">14h 42m total length</span>
          </span>
        </div>

        <button
          className="text-purple-700 font-bold text-sm"
          onClick={() => {
            setExpandAll((old) => !old);
            setRemount((o) => o + 100);
          }}
        >
          {expandAll ? "Collapse all sections" : "Expand all sections"}
        </button>
      </div>

      <div>
        {sections.map((e, i) => {
          return (
            <Accordion
              key={i + remount}
              disableGutters={true}
              square={true}
              defaultExpanded={expandAll}
              variant="outlined"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="content"
                sx={{ backgroundColor: "#f5f5f5", padding: ".3rem 2rem" }}
              >
                <h1 className="font-bold">{e.title}</h1>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: ".5rem 3rem" }}>
                <div className="flex flex-col gap-3">
                  {e.subtitles.map((s, i) => {
                    return (
                      <div key={i} className="text-sm">
                        <div className="flex items-center gap-4">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            play_circle
                          </span>
                          <span>{s}</span>
                        </div>
                        <div></div>
                      </div>
                    );
                  })}
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
const sections = [
  {
    title: "Up and Running With Python",
    subtitles: ["Installing Python", "Hello World"],
  },
  {
    title: "The Basics (Data types)",
    subtitles: [
      "Variable",
      "multiple Assignment",
      "Data Types and Ints",
      "Strings",
      "Placeholders",
      "List/Arrays",
      "List Functions",
    ],
  },
  {
    title: "Conditions and Loops",
    subtitles: ["Installing Python", "Hello World"],
  },
  {
    title: "Functions",
    subtitles: ["Installing Python", "Hello World"],
  },
  {
    title: "Classes! (Object Oriented Programming)",
    subtitles: ["Installing Python", "Hello World"],
  },
  {
    title: "File Input/Output",
    subtitles: ["Installing Python", "Hello World"],
  },
  {
    title: "Using Python Modules",
    subtitles: ["Installing Python", "Hello World"],
  },
  {
    title: "Crawling the Web",
    subtitles: ["Installing Python", "Hello World"],
  },
  {
    title: "Beautiful Soup HTML Parsing",
    subtitles: ["Installing Python", "Hello World"],
  },
];
