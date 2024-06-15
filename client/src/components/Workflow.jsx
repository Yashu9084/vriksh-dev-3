import React from "react";
import intro from "../assets/workflow_intro.svg";
import budget from "../assets/workflow_budget.svg";
import goals from "../assets/workflow_goals.svg";
import meeting from "../assets/workflow_meeting.svg";
import sow from "../assets/workflow_sow.svg";
import strategy from "../assets/workflow_strategy.svg";

const Workflow = () => {
  return (
    <div
      id="workflow"
      className="flex flex-col mb-[14vw] md:mb-[8vw] md:flex-row text-white px-[8vw] md:px-[5vw] gap-[4vw] md:gap-[18vw] scroll-smooth"
    >
      <div className="flex-1 pt-[15vw] sticky top-0 h-screen z-10">
        <h2 className="text-[#D9F203] font-neue text-[3vw] md:text-[1.2vw] mb-[1vw] md:mb-[0.5vw]">
          Our Workflow
        </h2>
        <pre className="text-[8vw] md:text-[4vw] leading-[9vw] md:leading-[3.8vw] mb-2 text-[#D9F203] font-neue">
        This is how we approach
        <br/>
        every single project
        </pre>
        <p className="text-[2.5vw] md:text-[1vw] mb-[4vw] text-[#CCCCCC]">
          Every project is carried out through a carefully planned step-by-step
          process which requires brainstorming and formulating insights with
          transparency and efficiency.
        </p>
      </div>
      <div className="flex-2 flex flex-col py-[1vw] md:py-[6vw] -z-8">
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-16 h-6 md:w-20 md:h-14 bg-[#242222] rounded-full flex items-center justify-center mr-5 md:mr-10 my-2">
            <img
              src={intro}
              alt="intro-icon"
              className="bg-[#242222] h-[90%]"
            />
          </div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">
              Introduction
            </h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[80%]">
              We get in touch with the potential client and understand the
              expectations required to be fulfilled while successfully
              completing the project.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[4vw] -z-1 left-[3vw] md:left-[1.6vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[7vw]"></div>
        </div>
        {/* Repeat similar structure for other steps */}
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-16 h-6 md:w-20 md:h-14 bg-[#242222] rounded-full flex items-center justify-center mr-5 md:mr-10 my-2">
            <img
              src={strategy}
              alt="strategy-icon"
              className="bg-[#242222] h-[90%]"
            />
          </div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">
              Strategy & Intake
            </h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[80%]">
              A heavy brainstorming session where we ideate, strategize and
              curate a rough framework as well as accumulate broader insight
              relevant to the job.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[4vw] -z-1 left-[3vw] md:left-[1.6vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[7vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-16 h-6 md:w-20 md:h-14 bg-[#242222] rounded-full flex items-center justify-center mr-5 md:mr-10 my-2">
            <img
              src={meeting}
              alt="meeting-icon"
              className="bg-[#242222] h-[90%]"
            />
          </div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">
              Meeting
            </h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              A meeting is set up to iron out the terms and conditions of the
              project and if both parties reach a consensus on the draft plan,
              an agreement is made.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[4vw] -z-1 left-[3vw] md:left-[1.6vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[7vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-20 h-6 md:w-28 md:h-14 bg-[#242222] rounded-full flex items-center justify-center mr-5 md:mr-10 my-2">
            <img
              src={goals}
              alt="goals-icon"
              className="bg-[#242222] h-[90%]"
            />
          </div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">
              Goals and KPI
            </h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Strategic goals are made that divide the project into a series of
              manageable tasks which are handled efficiently. According to the
              client’s preference, KPIs are agreed upon, thus creating an
              actionable plan. 
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[4vw] -z-1 left-[3vw] md:left-[1.6vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[7vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-20 h-6 md:w-24 md:h-14 bg-[#242222] rounded-full flex items-center justify-center mr-5 md:mr-10 my-2">
            <img src={sow} alt="sow-icon" className="bg-[#242222] h-[90%]" />
          </div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">
              Scope of work
            </h3>
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue"></h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              The plan is put to action, where the technicalities are discussed.
              In this stage, the HOW, WHEN AND WHICH platform are decided upon
              and applied to create a draft version.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[4vw] -z-1 left-[3vw] md:left-[1.6vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[7vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-20 h-6 md:w-28 md:h-14 bg-[#242222] rounded-full flex items-center justify-center mr-5 md:mr-10 my-2">
            <img
              src={budget}
              alt="budget-icon"
              className="bg-[#242222] h-[90%]"
            />
          </div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">
              Budget Outline
            </h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              A reasonable budget is outlined, keeping in mind all the aspects
              of the project. It is then presented along with the draft version
              of the project to the client and the project is finalized through
              a discussion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
