import React, { Component } from 'react';
import PrecautionTable from '../PrecautionTable/PrecautionTable';

class PrecautionGuide extends Component {
    render() {
        return (
                <article>
                    <h1>Precaution Guide (Dos and Don'ts)</h1>
                    <PrecautionTable />
                  <p>Still sick?: National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.</p>
                   </article>
        );
    }
};

export default PrecautionGuide;