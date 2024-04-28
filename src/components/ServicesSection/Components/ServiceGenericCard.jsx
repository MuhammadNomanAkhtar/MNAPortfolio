import React, {useState} from "react";
import PropTypes from "prop-types";
import ServiceImages from "../ServiceImages";
import {kColors} from "../../../constants";
import {motion} from "framer-motion";

const container = {
    hidden: {},
    show: {
        // rotate: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const item = {
    // hidden: { opacity: 0, scale: 0 },
    hidden: {opacity: 0, y: 75},
    show: (index) => ({
        opacity: 1,
        // scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.1
        },
    }),
};

function ServiceGenericCard({title, data, startColor, endColor, secondChild}) {
    console.log(startColor, endColor);

    // const content = [
    //   {
    //     type: 'Type 1',
    //     content: (<div>Type 1</div>)i
    //   },
    //   {
    //     type: 'Type 2',
    //     content: (<div>Type 1</div>)
    //   },
    // ]
    const [active, setActive] = useState(data[0].type);
    // Find the content object that matches the active type
    const activeContent = data.find((item) => item.type === active).content;
    console.log(activeContent);
    return (
        <motion.div
            variants={item}
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true
            }}
            style={{
                background: `linear-gradient(90deg, ${startColor} 0%, ${endColor} 100%)`
                // background: `linear-gradient(90deg, ${kColors.sky[400]} 0%, ${kColors.sky[700]} 100%)`
                // background: `linear-gradient(90deg, theme(${startColor}) 0%, var(--color-${endColor}) 100%)`
            }}
            // className={`overflow-clip mx-auto my-4 max-w-5xl max-h-[370px] border-white rounded-3xl flex flex-row bg-gradient-to-r from-sky-500 to-sky-800`}
            // className={`overflow-clip mx-auto my-4 max-w-5xl max-h-[370px] border-white rounded-3xl flex flex-row bg-gradient-to-r from-${startColor} to-${endColor}`}
            className={`overflow-clip mx-auto my-4 max-w-5xl md:max-h-[370px] border-white rounded-2xl flex flex-row`}
        >
            <div className="flex flex-col justify-center grow md:basis-3/5 m-8">
                <h1 className="font-medium text-2xl">{title}</h1>
                <div className="border-t h-1 border-white opacity-30 mt-4"></div>
                <div className="flex flex-row gap-4">
                    {data.map((dataItem, index) => (
                        <div key={index}>
                            <button
                                onClick={() => setActive(dataItem.type)}
                                className={`font-[500] text-lg tracking-tight my-4 ${
                                    active !== dataItem.type ? "opacity-50" : ""
                                }`}
                            >
                                {dataItem.type}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="border-t h-1 border-white opacity-30"></div>
                {activeContent}
            </div>
            <div className="hidden md:block md:basis-2/5">
                {secondChild}
            </div>
        </motion.div>
    );
}

ServiceGenericCard.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
    startColor: PropTypes.string,
    endColor: PropTypes.string,
    secondChild: PropTypes.element,
};

export default ServiceGenericCard;
