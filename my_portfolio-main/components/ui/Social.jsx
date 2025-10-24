import Link from "next/link"

import {FaGithub,FaLinkedinIn} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>,path:"https://github.com/BelfaidaMedReda"},
    {icon: <FaLinkedinIn/>,path:"https://www.linkedin.com/in/mohammed-reda-belfaida/"}

];




const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        { socials.map((item,index) =>{
            return(
                <a key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </a>
            );
    })}
    </div>
  );
}

export default Social