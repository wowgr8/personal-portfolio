import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolOutline } from 'react-icons/io5';
import { GiSuitcase } from 'react-icons/gi';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--work" date="02/2019 - 04/2020" iconStyle={{ background: "#e9d35b", color: "#fff" }} icon={<GiSuitcase />}>
          <h3 className='vertical-timeline-element-title'>
            Customer Service Agent - Simple Finance
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Portland, Oregon
          </h4>
          <p>
            <ul>
              <li>Meticulously reviewed photo deposits as well as searched for and identified suspicious deposit-to-withdrawal patterns as part of the Deposit Risk team.</li>
              <li>Supported account holders and applicants via phone and message channels with empathy and high attention to detail.</li>
              <li>Expertise in balancing multiple streams of work across various platforms including Belvedere, Jira, Confluence, and SalesForce.</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="04/2020 - 06/2021" iconStyle={{ background: "#e9d35b", color: "#fff" }} icon={<GiSuitcase />}>
          <h3 className='vertical-timeline-element-title'>
            Senior Customer Service Agent - Simple Finance
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Portland, Oregon
          </h4>
          <p>
            <ul>
              <li>Identify and propose creative solutions for workflow gaps.</li>
              <li>Assisted with new hire training and shadowing sessions.</li>
              <li>Researched and responded to regulatory complaints from the BBB and CFPB.</li>
              <li>Liaised with internal departments to thoroughly research and resolve issues and inquiries.</li>
              <li>Secured and replaced compromised accounts.</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="10/2021 - 08/2022" iconStyle={{ background: "#3e497a", color: "#fff" }} icon={<IoSchoolOutline />} >
          <h3 className='vertical-timeline-element-title'>
            Epicodus - Programming Bootcamp
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Portland, Oregon
          </h4>
          <p> 
            Certificate in Web and Mobile Development, Computer Software Engineering.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="08/2022 - 10/2022" iconStyle={{ background: "#e9d35b", color: "#fff" }} icon={<GiSuitcase />}>
          <h3 className='vertical-timeline-element-title'>
            Internship - Opine School
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Portland, Oregon
          </h4>
          <p> 
            A platform that allows students to have anonymous debates where only the teacher knows who is posting as well as allowing the teacher to assign which students are responding to which Opinions. 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience