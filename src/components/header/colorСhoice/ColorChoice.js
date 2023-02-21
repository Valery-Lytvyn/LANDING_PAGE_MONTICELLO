import { backgroundColorArr } from '../../../constants/appComponentData'
import './colorChoice.scss';

function ColorChoice({ colorOption }) {
   return (
      <div className='colorChoice' onClick={(e) => { colorOption(e.target.id) }}>
         {
            backgroundColorArr.map((backColor, index) => (
               <div className='color mx-2' id={index} key={index}
                  style={{ background: backColor.backgroundColor }}>
               </div>
            ))
         }
      </div>
   )
}

export default ColorChoice;