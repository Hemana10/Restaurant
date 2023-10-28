import { Fragment } from 'react';

import Accordion from '../../shared/Accordion';
import ItemSection from './ItemSection';

const CategorySection = ({ categoryTitle, categoryList, itemAccordionView }) => {

    const renderCategoryList = categoryList.map((category, index) => {
        const { title, itemCards } = category;
        return (
            <Fragment>
                <Accordion title={`${title} (${itemCards.length})`}
                    open={itemAccordionView ? true : false}
                    titleClass={itemAccordionView ? 'text-purplelake text-lg font-bold' : 'text-purplelake font-semibold'}>
                    <ItemSection itemsList={itemCards}/>
                </Accordion>
                {itemAccordionView ? <hr className="p-1 bg-violet-100 mb-3"/> : (index !== categoryList.length - 1) && <hr className='p-1'/>}
            </Fragment>
        );
    });

    return (
        <div>
            {!itemAccordionView && <div className="text-purplelake text-lg font-bold py-2">
                {categoryTitle}
            </div>}
            {renderCategoryList}
            {!itemAccordionView && <hr className="p-1 bg-violet-100 mb-3"/>}
        </div>
    );
};

export default CategorySection;