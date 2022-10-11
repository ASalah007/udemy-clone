import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function CourseContent(props) {
  const [expandAll, setExpandAll] = React.useState(false);
  const [remount, setRemount] = React.useState(0);
  const contentLength = parseFloat(props.content_info_short);
  return (
    <div>
      <h1 className="font-bold text-xl mb-10">Course content</h1>
      <div className="flex justify-between items-baseline mb-2 flex-col md:flex-row gap-3">
        <div>
          <span>
            <span className="text-sm">
              {props.curriculum_context.data.sections.length} Sections
            </span>
            <span
              className="material-symbols-outlined text-[10px] mx-[2px] text-gray-700"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              fiber_manual_record
            </span>
            <span className="text-sm">
              {props.num_published_lectures} lectures
            </span>
            <span
              className="material-symbols-outlined text-[10px] mx-[2px] text-gray-700"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              fiber_manual_record
            </span>
            <span className="text-sm">
              {Math.floor(contentLength)}h{" "}
              {(contentLength - Math.floor(contentLength)) * 60}m total length
            </span>
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
        {props.curriculum_context.data.sections.map((e, i) => {
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
                  {e.items.map((s, i) => {
                    return (
                      <div key={i} className="text-sm">
                        <div className="flex items-center gap-4">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            play_circle
                          </span>
                          <Link
                            to={s.preview_url}
                            className={`${
                              s.can_be_previewed ? "underline text-primary" : ""
                            }`}
                          >
                            {s.title}
                          </Link>
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
