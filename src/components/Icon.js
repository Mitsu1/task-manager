import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);

library.add(...iconList);

const Icon = ({icon, text}) => {
    return ( 
        <span>
            <FontAwesomeIcon icon={icon} />{' '} 
            { text }
        </span>
    );
};

export default Icon;