import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../constants';
import PropTypes from 'prop-types';

import { Button, Timeline } from 'flowbite-react';

// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '../../../tailwind.config.js'

// const fullConfig = resolveConfig(tailwindConfig)

export default function XpSection() {
	return (
		<div id='experience' className=''>
			<SectionTitle
				mainTitle={'3 Years Experience'}
				title={"What I've been up to"}
				subtitle={
					"I've had the oppurtunity to work across different industries and with different technologies."
				}
			/>
			<div className='mt-8 flex flex-col'>
				<ExperienceTimeline />
				{/* <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline> */}
			</div>
		</div>
	);
}

function ExperienceTimeline() {
	return (
		<div className='max-w-5xl mx-auto'>
			<VerticalTimeline layout={'1-column-left'}>
				{experiences.map((experience, index) => (
					<ExperienceCard key={`experience-${index}`} experience={experience} />
				))}
			</VerticalTimeline>

			{/* <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2022</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              <p>
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </Timeline.Body>
            <Button color="gray">
              <p>Learn More</p>
            
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2022</Timeline.Time>
            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
            <Timeline.Body>
              <p>
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>April 2022</Timeline.Time>
            <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              <p>
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline> */}
		</div>
	);
}

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			// className="bg-primary_blue"
			// contentStyle={{
			//   background:
			// }}
			// contentStyle={`bg-red`}
			contentStyle={{
				// background: "#191836",
				background: '#201F2D',
				borderRadius: '0.75rem',
				// background: fullConfig.theme.colors.primary_blue,
				color: '#fff',
			}}
			contentArrowStyle={{ borderRight: '7px solid  #232631' }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className='flex justify-center items-center w-full h-full'>
					<img
						src={experience.icon}
						alt={experience.company_name}
						className='w-[100%] h-[100%] object-contain rounded-full'
					/>
				</div>
			}>
			<div>
				<h3 className='text-white text-2xl font-bold'>{experience.title}</h3>
				<p
					className='text-secondary text-base font-semibold'
					style={{ margin: 0 }}>
					{experience.company_name}
				</p>
			</div>

			<ul className='mt-5 list-disc ml-5 space-y-2'>
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className='text-white-100 text-[14px] pl-1 tracking-wider'>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

ExperienceCard.propTypes = {
	experience: PropTypes.object,
};
