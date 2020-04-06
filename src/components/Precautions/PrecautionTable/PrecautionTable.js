import React, { Component } from 'react';
import './PrecautionTable.css';
import '../../../index.css';

class PrecautionTable extends Component {
    render() {
        let precautionTableEntries = [
            {key: 154843, do: 'Wash your hands regularly with soap & water.', dont: 'Travel anywhere unless it is a MUST!'},
            {key: 164942, do: 'Practice social distancing (atleast 1 meter or 3 feet distance).', dont: 'Avoid touching your face without washing your hands.'},
            {key: 174641, do: 'Cough and sneeze into your elbow.', dont: 'Get tested unless symptoms match!'},
            {key: 154678, do: 'Clean surfaces with disinfectant wipes.', dont: 'Avoid gathering in groups.'},
            {key: 156998, do: 'Be honest if you have COVID-19.', dont: 'Trust everything that you see.'},
            {key: 165677, do: 'Keep your body fit.', dont: 'Panic about this.'},
            {key: 277904, do: 'Drink more water and eat healthy.', dont: 'Shake hands.'}
        ];
        
        let precautionTable = precautionTableEntries.map((precTableEntry) => {
          return (
         <tbody className="TableInfo" key={precTableEntry.key}>
             <tr className="TableInfo">
                 <td className="TableInfo">{precTableEntry.do}</td>
                   <td className="TableInfo">{precTableEntry.dont}</td>
                </tr>
         </tbody>
         );
        });

        return (
            <div className="MainContent">
            <table className="TableInfo" align="center">
                <thead className="TableInfo">
                      <tr className="TableInfo">
                            <th className="TableInfo">Do:</th>
                            <th className="TableInfo">Don't:</th>
                     </tr>
                </thead>
                     {precautionTable}
            </table>
            </div>
        );
    }
};

export default PrecautionTable;