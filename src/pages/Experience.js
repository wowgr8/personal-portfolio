import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolOutline } from 'react-icons/io5';
import { GiSuitcase } from 'react-icons/gi';

function Experience() {
  return (
    <div className='experience mt-16'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--work" 
          date="02/2019 - 04/2020" 
          contentStyle={{ background: 'rgb(60, 75, 93)', color: '#fff' }} 
          contentArrowStyle={{ borderRight: '7px solid rgb(60, 75, 93)', color: '#fff' }} 
          iconStyle={{ background: "rgb(255, 197, 50)", color: "#fff" }} 
          icon={<GiSuitcase />}
          >
            <h3 className='vertical-timeline-element-title text-lg font-bold text-yellow-400'>
              Customer Service Agent - Simple Finance
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Portland, Oregon
            </h4>
            <p>
              <ul>
                <li>• Meticulously reviewed photo deposits as well as searched for and identified suspicious deposit-to-withdrawal patterns as part of the Deposit Risk team.</li>
                <li>• Supported account holders and applicants via phone and message channels with empathy and high attention to detail.</li>
                <li>• Expertise in balancing multiple streams of work across various platforms including Belvedere, Jira, Confluence, and SalesForce.</li>
              </ul>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" 
          date="04/2020 - 06/2021" 
          contentStyle={{ background: 'rgb(60, 75, 93)', 
          color: '#fff' }} 
          contentArrowStyle={{ borderRight: '7px solid rgb(60, 75, 93)', color: '#fff' }} 
          iconStyle={{ background: "rgb(255, 197, 50)", color: "#fff" }} 
          icon={<GiSuitcase />}
        >
          <h3 className='vertical-timeline-element-title text-lg font-bold text-yellow-400'>
            Senior Customer Service Agent - Simple Finance
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Portland, Oregon
          </h4>
          <p>
            <ul>
              <li>• Identify and propose creative solutions for workflow gaps.</li>
              <li>• Assisted with new hire training and shadowing sessions.</li>
              <li>• Researched and responded to regulatory complaints from the BBB and CFPB.</li>
              <li>• Liaised with internal departments to thoroughly research and resolve issues and inquiries.</li>
              <li>• Secured and replaced compromised accounts.</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education " 
          date="10/2021 - 08/2022" 
          contentStyle={{ background: 'rgb(60, 75, 93)', color: '#fff' }} 
          contentArrowStyle={{ borderRight: '7px solid rgb(60, 75, 93)', color: '#fff' }} 
          iconStyle={{ background: "#3e497a", color: "#fff" }} 
          icon={<IoSchoolOutline />} 
        >
          <h3 className='vertical-timeline-element-title text-lg font-bold text-yellow-400'>
            Epicodus - Programming Bootcamp
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Portland, Oregon
          </h4>
          <p> 
            Certificate in Web and Mobile Development, Computer Software Engineering.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work" 
          date="08/2022 - 10/2022" 
          contentStyle={{ background: 'rgb(60, 75, 93)', color: '#fff' }} 
          contentArrowStyle={{ borderRight: '7px solid rgb(60, 75, 93)', color: '#fff' }} 
          iconStyle={{ background: "rgb(255, 197, 50)", color: "#fff" }} 
          icon={<GiSuitcase />}
        >
          <h3 className='vertical-timeline-element-title text-lg font-bold text-yellow-400'>
            Internship - Opine School
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Portland, Oregon
          </h4>
          <p> 
            An educational software to help facilitate open, honest debates backed by cited evidence.
          </p>
          <p>
            <ul>
              <li>• Created highly reusable UI elements using React and Material-UI.</li>
              <li>• Created admin portal.</li>
              <li>• Pair program with the senior developer to complete daily work tickets & add new features to website.</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
          date="10/2022 - 04/2023" 
          contentStyle={{ background: 'rgb(60, 75, 93)', color: '#fff' }} 
          contentArrowStyle={{ borderRight: '7px solid rgb(60, 75, 93)', color: '#fff' }} 
          iconStyle={{ background: "#3e497a", color: "#fff" }} 
          icon={<IoSchoolOutline />} 
        >
          <h3 className='vertical-timeline-element-title text-lg font-bold text-yellow-400'>
            Code The Dream - Programming Bootcamp
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Portland, Oregon - Remote
          </h4>
          <p>
            <ul>
              <li>• Certificate in Web and Mobile Development, Computer Software Engineering.</li>  
              <li>• Lead student mentor sessions once a week.</li>  
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience