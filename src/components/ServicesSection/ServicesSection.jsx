import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard, {
  BackendDevelopmentServiceContent,
  BackendServiceServiceContent,
  MobileDevelopmentServiceContent,
  MobileServiceServiceContent,
  WebDevelopmentServiceContent,
  WebServiceServiceContent,
} from "./ServiceCard";
import ServiceGenericCard from "./Components/ServiceGenericCard";
import ServiceImages from "./ServiceImages";
import ServiceWebImages, { ServiceBackendImages } from "./ServiceWebImages";
import { kColors } from "../../constants";
import TitleWithGradient from "../SectionTitle/TitleWithGradient";
import SectionTitleV2 from "../SectionTitle/SectionTitleV2";

function ServicesSection({ test }) {
  const mobileServices = [
    {
      type: "Development",
      content: <MobileDevelopmentServiceContent />,
    },
    {
      type: "Services",
      content: <MobileServiceServiceContent />,
    },
  ];

  const webServices = [
    {
      type: "Development",
      content: <WebDevelopmentServiceContent />,
    },
    {
      type: "Services",
      content: <WebServiceServiceContent />,
    },
  ];

  const backendServices = [
    {
      type: "Development",
      content: <BackendDevelopmentServiceContent />,
    },
    {
      type: "Services",
      content: <BackendServiceServiceContent />,
    },
  ];
  return (
    <div className="mt-20" id="services">

      {/* <TitleWithGradient /> */}
      <SectionTitle
        mainTitle={"Services"}
        title={"What I can do for you"}
        subtitle={"I can help you with the following"}
      />
      <div className="mt-4 mx-4">
        {/* <ServiceCard /> */}
        <ServiceGenericCard
          startColor={kColors.fpurple[400]}
          endColor={kColors.fpurple[700]}
          title={`Mobile App`}
          data={mobileServices}
          secondChild={<ServiceImages />}
        />
      </div>

      <div className="mt-4 mx-4">
        {/* <ServiceCard /> */}
        <ServiceGenericCard
          startColor={kColors.sky[400]}
          endColor={kColors.sky[700]}
          // startColor={kColors.fblue[400]}
          // endColor={kColors.fblue[800]}
          title={`Web`}
          data={webServices}
          secondChild={<ServiceWebImages />}
        />
      </div>

      <div className="mt-4 mx-4">
        {/* <ServiceCard /> */}
        <ServiceGenericCard
          // startColor={'pink-500'}
          // endColor={'pink-800'}
          startColor={kColors.pink[600]}
          endColor={kColors.pink[800]}
          // startColor={kColors.red[400]}
          // endColor={kColors.red[800]}
          title={`Backend`}
          data={backendServices}
          secondChild={<ServiceBackendImages />}
        />
      </div>
    </div>
  );
}

ServicesSection.propTypes = {
  test: PropTypes.bool,
};

export default ServicesSection;
