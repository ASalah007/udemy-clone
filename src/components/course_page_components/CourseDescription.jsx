import React from "react";

export default function CourseDescription() {
  const [expandDisc, setExpandDisc] = React.useState(false);
  return (
    <div>
      <h1 className="text-2xl font-bold">Description</h1>

      <div
        className={`${!expandDisc ? "max-h-[450px]" : ""}`}
        style={{
          maskImage:
            !expandDisc && "linear-gradient(black, black, transparent)",
          WebkitMaskImage:
            !expandDisc && "linear-gradient(black, black, transparent)",
        }}
      >
        <p>
          <strong>
            Do you want to become a programmer? Do you want to learn how to
            create games, automate your browser, visualize data, and much more?
          </strong>
        </p>
        <p>
          If you’re looking to learn Python for the very
          <strong>first time</strong>
          or need a <strong>quick brush-up</strong>, this is the course for you!
        </p>
        <p>
          Python has rapidly become one of the
          <strong>most popular programming languages </strong>
          around the world. Compared to other languages such as Java or C++,
          Python consistently outranks and outperforms these languages in demand
          from businesses and job availability. The average Python developer
          makes <strong>over $100,000 </strong>- this number is only going to
          grow in the coming years.
        </p>
        <p>
          The best part? Python is one of the
          <strong>easiest coding languages </strong>
          to learn right now. It doesn’t matter if you have no programming
          experience or are unfamiliar with the syntax of Python. By the time
          you finish this course, you'll be an
          <strong>absolute pro</strong>
          at programming!
        </p>
        <p>
          This course will cover <strong>all the basics</strong>
          and <strong>several advanced concepts</strong>
          of Python. We’ll go over:
        </p>
        <ul className="list-disc px-8">
          <li>
            <p>The fundamentals of Python programming</p>
          </li>
          <li>
            <p>Writing and Reading to Files</p>
          </li>
          <li>
            <p>Automation of Word and Excel Files</p>
          </li>
          <li>
            <p>Web scraping with BeautifulSoup4</p>
          </li>
          <li>
            <p>Browser automation with Selenium</p>
          </li>
          <li>
            <p>Data Analysis and Visualization with MatPlotLib</p>
          </li>
          <li>
            <p>Regex parsing and Task Management</p>
          </li>
          <li>
            <p>GUI and Gaming with Tkinter</p>
          </li>
          <li>
            <p>And much more!</p>
          </li>
        </ul>
        <p>
          If you read the above list and are feeling a bit confused, don’t
          worry! As an instructor and student on Udemy for
          <strong>almost 4 years,</strong>I know what it’s like to be
          overwhelmed with boring and mundane. I promise you’ll have a blast
          learning the ins and outs of python. I’ve successfully taught over
          <strong>200,000+ students </strong>
          from over<strong>200 countries</strong>
          jumpstart their programming journeys through my courses.
        </p>
        <p>Here’s what some of my students have to say:</p>
        <ul className="list-disc px-8 py-1">
          <li>
            <p>
              “I wish I started programming at a younger age like Avi.
              &nbsp;This Python course was excellent for those that cringe at
              the thought of starting over from scratch with attempts to write
              programs once again. Python is a great building language for any
              beginner programmer. Thank you Avi!”
            </p>
            <p>
              <br />
            </p>
          </li>
          <li>
            <p>
              “I had no idea about any programming language. With Avi's
              lectures, I'm now aware of several python concepts and I'm
              beginning to write my own programs. Avi is crisp and clear in his
              lectures and it is easy to catch the concepts and the depth of it
              through his explanations. Thanks, Avi for the wonderful course,
              You're awesome! It's helping me a lot :)”
            </p>
            <p>
              <br />
            </p>
          </li>
          <li>
            <p>
              "Videos are short and concise and well-defined in their title,
              this makes them easy to refer back to when a refresher is needed.
              Explanations aren't convoluted with complicated examples, which
              adds to the quick pace of the videos. I am very pleased with the
              decision to enroll in this course. Not only has it increased the
              pace I'm learning Python but I actively look forward to continuing
              the course, whenever I get the chance. Avi is friendly and
              energetic, absolutely delightful as an instructor.”
            </p>
          </li>
        </ul>
        <p>
          So what are you waiting for?
          <strong>Jumpstart your programming journey</strong>
          and dive into the world of Python by
          <strong>enrolling in this course today!</strong>
        </p>
      </div>

      <button
        className="flex items-center gap-2 text-sm font-bold text-purple-700"
        onClick={() => setExpandDisc((old) => !old)}
      >
        Show {expandDisc ? "less" : "more"}
        <span className="material-symbols-outlined">
          {expandDisc ? "expand_less" : "expand_more"}
        </span>
      </button>
    </div>
  );
}
