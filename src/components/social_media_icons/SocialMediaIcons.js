import React from 'react';
import { socialMediaIconsArr } from '../../constants/socialMediaIconsData';
import './socialMediaIcons.scss';

function SocialMediaIcons() {
   return (
      <div>
         <ul className='socialList p-0 m-0 h-100 w-100
               d-flex justify-content-start justify-content-md-end  align-items-center'>
            {socialMediaIconsArr.map((item, index) => (
               <li className='socialItem mx-2' key={index} onClick={() => { window.open(`http://www.${item.socialName}.com`) }} >
                  {item.icon}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default SocialMediaIcons