import { Fragment, useState } from "react";

import upArrow from '../assets/images/up-arrow.png';

const Accordion = ({ children, open, title, titleClass }) => {

    const [openState, setOpenState] = useState(open);

    const toggleAccordion = () => {
        setOpenState(!openState);
    };

    return (
        <Fragment>
            <div id="accordionTitle" className="grid grid-cols-2 hover:cursor-pointer" onClick={toggleAccordion}>
                <div className={titleClass}>
                    {title}
                </div>
                <div className="justify-end flex items-center pr-6">
                    {openState ?
                     <img src={upArrow} alt='accordion close' className="h-4 w-4"/> :
                     <img src={upArrow} alt='accordion open' className="h-4 w-4 rotate-180"/>}
                </div>
            </div>
            <div id="accordionContent" className="py-2 pl-1">{openState && children}</div>
        </Fragment>
    );
};

export default Accordion;