import React, { Component } from 'react';
import PrecautionTable from '../PrecautionTable/PrecautionTable';
import HandWashPrec from '../../../assets/imagePrecs/handwash.png';
import SocialDistancingPrec from '../../../assets/imagePrecs/distancing.png';  
import ElbowCoughPrec from '../../../assets/imagePrecs/elbowcough.png';
import CleanSurfacesPrec from '../../../assets/imagePrecs/cleaning.png';
import StayAtHomePrec from '../../../assets/imagePrecs/stayathome.png';
import NoTouchingFacePrec from '../../../assets/imagePrecs/notouchingface.png';
import './PrecautionGuide.css';

class PrecautionGuide extends Component {
    render() {
        return (
          <article>
            <h1>Precaution Guide (Dos and Don'ts)</h1>
      
            <PrecautionTable />

            <br />

            <div className="Row">
                <div className="Column">
                  <img src={HandWashPrec} className="Image" alt="Wash your hands" />
                </div>
                <div className="Column">
                  <img src={SocialDistancingPrec} className="Image" alt="Social Distancing" />
                </div>
                <div className="Column">
                   <img src={ElbowCoughPrec} className="Image" alt="Cover your coughs" />
                </div>
                <div className="Column">
                   <img src={CleanSurfacesPrec} className="Image" alt="Clean surfaces" />
                </div>
                <div className="Column">
                   <img src={StayAtHomePrec} className="Image" alt="Stay at home" />
                </div>
                <div className="Column">
                  <img src={NoTouchingFacePrec} className="Image" alt="Don't touch your face" />
                </div>
            </div>
          </article>
        );
    }
};

export default PrecautionGuide;