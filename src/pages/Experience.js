import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolOutline } from 'react-icons/io5';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="verticle-timeline-element--education" date="2010 - 2014" iconStyle={{ background: "#3e497a", color: "#fff" }} icon={<IoSchoolOutline />}>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience