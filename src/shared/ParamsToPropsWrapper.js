import { useParams } from 'react-router-dom';

const ParamsToPropsWrapper = ({ ComponentToWrap }) => {

    const params = useParams();

    return (
        <ComponentToWrap {...params}/>
    );
};

export default ParamsToPropsWrapper;