import { useState, Fragment } from 'react';
import { Modal } from '@mui/material';

import cutleryIcon from '../../assets/images/cutlery.png';

const RestaurantFooterSection = ({ menuDetails }) => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const handleMenuItemClick = (title) => {
        const ele = document.getElementById(title);
        handleClose();
        ele.scrollIntoView({ behavior: 'smooth' });
    };

    const renderMenuDetails = menuDetails.map(menuItem => {
        const { title, availableItemsCount } = menuItem || {};
        return (
            <div className='p-1 hover:cursor-pointer grid grid-cols-6' key={`${title}${availableItemsCount}`}
                onClick={() => handleMenuItemClick(title)}>
                <div className='col-span-5'>{title}</div>
                <div className='col-span-1 flex justify-end items-center'>{availableItemsCount}</div>
            </div>
        );
    });

    return (
        <Fragment>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div className='absolute left-[400px] bottom-[35px] w-[450px] bg-white shadow-md py-[20px] px-[30px] rounded-2xl 
                 h-[320px] overflow-y-scroll'>
                    <div>{renderMenuDetails}</div>
                </div>
            </Modal>

            <div className="fixed inset-x-0 bottom-0 z-10 pointer-events-none">
                <div className="h-16 z-[1] relative ">
                    <button className="rounded-3xl bg-purple-800 text-sm absolute top-0 w-[9.375rem] h-10 pointer-events-auto flex left-[550px] items-center justify-center"
                        onClick={handleOpen}>
                        <span>
                            <img src={cutleryIcon} alt='cutlery-Icon' className='h-4 w-4 bg-transparent mr-1' />
                        </span>
                        <span className="text-white font-bold">BROWSE MENU</span>
                    </button>
                </div>
            </div>
        </Fragment>

    );
};

export default RestaurantFooterSection;