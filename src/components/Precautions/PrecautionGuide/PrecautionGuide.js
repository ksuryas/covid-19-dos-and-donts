import React from 'react';
import PrecautionTable from '../PrecautionTable/PrecautionTable';
import HandWashPrec from '../../../assets/imagePrecs/handwash.png';
import SocialDistancingPrec from '../../../assets/imagePrecs/distancing.png';  
import ElbowCoughPrec from '../../../assets/imagePrecs/elbowcough.png';
import CleanSurfacesPrec from '../../../assets/imagePrecs/cleaning.png';
import StayAtHomePrec from '../../../assets/imagePrecs/stayathome.png';
import NoTouchingFacePrec from '../../../assets/imagePrecs/notouchingface.png';
import './PrecautionGuide.css';

const PrecautionGuide = () => {
        return (
          <article>
            <h2>Precaution Guide (Dos and Don'ts)</h2>
            <PrecautionTable />
            <br />
            <div className="Row">
                  <img src={HandWashPrec} className="Image" alt="Wash your hands" />
                  <img src={SocialDistancingPrec} className="Image" alt="Social Distancing" />
                   <img src={ElbowCoughPrec} className="Image" alt="Cover your coughs" />
                   <img src={CleanSurfacesPrec} className="Image" alt="Clean surfaces" />
                   <img src={StayAtHomePrec} className="Image" alt="Stay at home" />
                  <img src={NoTouchingFacePrec} className="Image" alt="Don't touch your face" />
            </div>
          </article>
        );
};

export default PrecautionGuide;