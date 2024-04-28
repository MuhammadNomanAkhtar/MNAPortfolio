import React, { useState } from "react";
import PropTypes, { node } from "prop-types";
import {
  android,
  angular,
  apple,
  express,
  flutter,
  reactnativeicon,
  mobileicon,
  nodejs,
  react,
  appStore_icon,
  playStore_icon,
  sonarQube,
} from "../../assets";
import ServiceImages from "./ServiceImages";
import { Tabs } from "flowbite-react";
import "./SectionCard.css";
const types = ["Development", "Services"];

const typeContent = [
  <MobileDevelopmentServiceContent key={0} />,
  <MobileServiceServiceContent key={1} />,
];

export function BackendDevelopmentServiceContent() {
  return (
    <div className="mt-4 flex flex-row gap-3 flex-wrap grow items-center justify-between">
      <div>
        <ServiceType icon={nodejs} title="NodeJs" subtitle="Development" />
      </div>
      <ServiceType icon={express} title="ExpressJs" subtitle="Development" />
      <div></div>
    </div>
  );
}

export function DeploymentServiceContent() {
  return (
    <div className="mt-4 flex flex-row gap-3 flex-wrap grow items-center justify-between">
      <div>
        <ServiceType icon={appStore_icon} title="App Store" subtitle="Deployment" />
        </div>
        {/* <ServiceType icon={nodejs} title="Test Flight" subtitle="Deployment" /> */}
        <ServiceType icon={playStore_icon} title="Play Store" subtitle="Deployment" />
        <div></div>
        {/* <ServiceType icon={express} title="Microsoft App Center" subtitle="Deployment" /> */}
    </div>
  );
}

export function WebDevelopmentServiceContent() {
  return (
    // <div className="mt-4 grid grid-cols-2 w-max content-between justify-items-stretch">
    <div className="mt-4 flex flex-row gap-3 flex-wrap grow items-center justify-between">
      <div className="flex-1 grow">
        <ServiceType icon={react} title="ReactJs" subtitle="Development" />
      </div>
      {/* <div className='flex-1 grow'>
				<ServiceType icon={angular} title='AngularJs' subtitle='Development' />
			</div> */}
      {/* <div className="hidden sm:block"></div> */}
    </div>
  );
}

export function SonarIntegrationServiceContent() {
  return (
    // <div className="mt-4 grid grid-cols-2 w-max content-between justify-items-stretch">
    <div className="mt-4 flex flex-row gap-3 flex-wrap grow items-center justify-between">
      <div className="flex-1 grow">
        <ServiceType icon={sonarQube} title="Sonar Qube" subtitle="Integration" />
      </div>
      {/* <div className='flex-1 grow'>
				<ServiceType icon={angular} title='AngularJs' subtitle='Development' />
			</div> */}
      {/* <div className="hidden sm:block"></div> */}
    </div>
  );
}

export function MobileDevelopmentServiceContent() {
  return (
    <div className="mt-4 flex flex-row gap-3 flex-wrap grow items-center justify-between">
      <ServiceType icon={android} title="Android App" subtitle="Development" />
      <ServiceType icon={apple} title="iOS App" subtitle="Development" />
      <ServiceType
        // icon={reactnativeicon}
        icon={react}
        title="React Native App"
        subtitle="Development"
      />
    </div>
  );
}

export function WebServiceServiceContent() {
  return (
    <div className="mt-4 flex flex-row grow items-center justify-between">
      <ul className="list-disc ml-4">
        {[
          "Responsive Web Design",
          "Single Page Application (SPA) Development",
          "Figma/XD/Sketch UI to Code",
          "E-commerce Website Development",
          "Website Performance Optimization",
          "Website Maintenance and Support",
          "Website Deployment and Hosting",
        ].map((item) => (
          <li className="p-[2px]" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SonarServiceServiceContent() {
  return (
    <div className="mt-4 flex flex-row grow items-center justify-between">
      <ul className="list-disc ml-4">
        {[
          "Comprehensive Code Quality Assurance",
          "Automated Code Inspection",
          "Continuous Integration and Delivery",
        ].map((item) => (
          <li className="p-[2px]" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BackendServiceServiceContent() {
  return (
    <div className="mt-4 flex flex-row grow items-center justify-between">
      <ul className="list-disc ml-4">
        {[
          "RESTful API Development",
          "GraphQL API Development",
          "Real-Time Web Socket Implementation",
          "Database Design and Implementation",
          "User Authentication and Authorization",
          "Secure Payment Gateway Integration",
        ].map((item) => (
          <li className="p-[2px]" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DeploymentServiceServiceContent() {
  return (
    <div className="mt-4 flex flex-row grow items-center justify-between">
      <ul className="list-disc ml-4">
        {[
          "App Store Deployment",
          "Play Store Deployment",
          "Test Flight Release Deployment",
          "Microsoft App Center Release Deployment",
        ].map((item) => (
          <li className="p-[2px]" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MobileServiceServiceContent() {
  return (
    <div className="mt-4 flex flex-row grow items-center justify-between">
      <ul className="list-disc ml-4">
        {[
          "Native Mobile App Development (iOS and Android)",
          "Native mobile app development",
          "Figma/XD/Sketch UI to Code",
          "Third-Party Services and Payment Gateway Integration",
          "Push Notifications and In-App Messaging",
          "Restful API Integration",
        ].map((item) => (
          <li className="p-[2px]" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard(props) {
  const [active, setActive] = useState(types[0]);

  const handleClick = (clickedItem) => {
    setActive(clickedItem);
  };

  return (
    <div className="overflow-clip mx-auto my-4 max-w-5xl max-h-[370px] border-white rounded-3xl flex flex-row bg-gradient-to-r from-fpurple-400 to-fpurple-700">
      <div className="flex flex-col justify-center basis-3/5 m-8">
        <h1 className="font-medium text-2xl">Mobile App</h1>
        <div className="border-t h-1 border-white opacity-30 mt-4"></div>
        <div className="flex flex-row gap-4">
          {types.map((type, index) => (
            <div key={index}>
              <button
                onClick={() => setActive(type)}
                className={`font-[500] text-lg tracking-tight my-4 ${
                  active !== type ? "opacity-50" : ""
                }`}
              >
                {type}
              </button>
            </div>
          ))}
        </div>
        <div className="border-t h-1 border-white opacity-30"></div>
        {/* <div
          className={`type-content-transition ${
            typeContent[types.indexOf(active)]
              ? "opacity-100"
              : "opacity-0 hidden"
          }`}
        >
          
        </div> */}

        {typeContent[types.indexOf(active)]}
      </div>
      <div className="basis-2/5 ">
        <ServiceImages />
      </div>
    </div>
  );
}

ServiceCard.propTypes = {};

function ServiceType({ icon, title, subtitle }) {
  return (
    <div>
      <img src={icon} className="h-12 w-12 aspect-square" alt="icon" />
      <h3 className="mt-3">
        {title}
        <span className="block">{subtitle}</span>
      </h3>
    </div>
  );
}

ServiceType.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ServiceCard;
