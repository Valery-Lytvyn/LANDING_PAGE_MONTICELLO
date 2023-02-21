import React, { useContext } from 'react';
import { BackgroundColorContext } from '../../App';
import Description from './description/Description';
import { Container } from 'react-bootstrap';
import ImgComponent from './imgComponent/ImgComponent';
import { projectsTitle, projectsDescriptions, projectPhoto_1, projectPhoto_2 } from '../../constants/projectComponentData';
import './projects.scss';

function Projects() {

   const background = useContext(BackgroundColorContext);

   return (
      <div className='projects'>
         <div className='projectsTitle'>
            {projectsTitle}
         </div>
         <div className='projectPart mt-0 my-0 my-lg-5'>
            <div className=' position-absolute d-none d-lg-flex d-xxl-none'>
               <ImgComponent background={background} />
            </div>
            <Container >
               <div className='row flex-column-reverse flex-lg-row p-o m-0' >
                  <div className='col mt-0 mt-lg-5' >
                     <div className=' projectPhoto position-relative z-100 d-flex justify-content-center'>
                        <ImgComponent background={projectPhoto_1} />
                     </div>
                  </div>
                  <div className='col'>
                     <Description
                        id={0}
                        firstTitle={projectsDescriptions[0].firstTitle}
                        secondTitle={projectsDescriptions[0].secondTitle}
                        descriptionText={projectsDescriptions[0].descriptionText}
                        locationText={projectsDescriptions[0].locationText}
                        collapseText={projectsDescriptions[0].collapseText} />
                  </div>
               </div>
            </Container>
         </div>
         <div className='projectPart my-5'>
            <div className='  position-absolute end-0  d-none d-lg-flex d-xxl-none'>
               <ImgComponent background={background} />
            </div>
            <Container>
               <div className='row flex-column flex-lg-row p-o m-0'>
                  <div className='col'>
                     <Description
                        id={1}
                        firstTitle={projectsDescriptions[1].firstTitle}
                        secondTitle={projectsDescriptions[1].secondTitle}
                        descriptionText={projectsDescriptions[1].descriptionText}
                        locationText={projectsDescriptions[1].locationText}
                        collapseText={projectsDescriptions[1].collapseText} />
                  </div>
                  <div className='col mt-0 mt-lg-5' >
                     <div className=' projectPhoto position-relative z-100 d-flex justify-content-center'>
                        <ImgComponent background={projectPhoto_2} />
                     </div>
                  </div>
               </div>
            </Container>
         </div>
      </div >
   )
}

export default Projects