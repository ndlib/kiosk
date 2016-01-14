
import React, { Component, PropTypes } from 'react';

class CallNumbers extends Component {

    constructor(props, content) {
        super(props, content);
    }

    booksBySubject() {
      return (

        <div className='books-by-subject'>
          <ul>
            <li><a href='#' className='l'>Agriculture (S)</a></li>
            <li><a href='#' className='9'>Anthropology (GN)</a></li>
            <li><a href='#' className='2'>Art (N)</a></li>
            <li><a href='#' className='l'>Astronomy &amp; Physics (QB - QC)</a></li>
            <li><a href='#' className='12'>Bible (BS)</a></li>
            <li><a href='#' className='11'>Biography (CT)</a></li>
            <li><a href='#' className='l'>Biology (QH)</a></li>
            <li><a href='#' className='2'>Business (HD - HJ)</a></li>
            <li><a href='#' className='l'>Chemistry (QD)</a></li>
            <li><a href='#' className='13'>Church History (BR)</a></li>
            <li><a href='#' className='9'>Communism, Socialism, Anarchism (HX)</a></li>
            <li><a href='#' className='12'>Denominations (BX1 - BX3999)</a></li>
            <li><a href='#' className='11'>Denominations (BX4000 - BX9999)</a></li>
            <li><a href='#' className='2'>Economics (HB - HC)</a></li>
            <li><a href='#' className='8'>Education (L)</a></li>
            <li><a href='#' className='l'>Engeneering &amp; Technology (T - except TR)</a></li>
            <li><a href='#' className='11'>Geneology (CS)</a></li>
            <li><a href='#' className='l'>General Works (A)</a></li>
            <li><a href='#' className='9'>Geography (G - F)</a></li>
            <li><a href='#' className='11'>History - Eastern Hemisphere (D - DR)</a></li>
            <li><a href='#' className='10'>History - Eastern Hemisphere (DS - DX)</a></li>
            <li><a href='#' className='10'>History - Western Hemisphere (E - F)</a></li>
            <li><a href='#' className='5'>Languages &amp; Literature (P - PM)</a></li>
            <li><a href='#' className='8'>Languages &amp; Literature (PN - PQ)</a></li>
            <li><a href='#' className='8'>Law (K)</a></li>
            <li><a href='#' className='l'>Library Science &amp; Bibliography (Z)</a></li>
            <li><a href='#' className='l'>Mathematics (QA)</a></li>
            <li><a href='#' className='l'>Medicine (R - RZ)</a></li>
            <li><a href='#' className='l'>Military Science (U - V)</a></li>
            <li><a href='#' className='2'>Music (M)</a></li>
            <li><a href='#' className='13'>Philosophy (B - BD &amp; BH - BJ)</a></li>
            <li><a href='#' className='2'>Photography (TR)</a></li>
            <li><a href='#' className='9'>Political Science (J - JQ)</a></li>
            <li><a href='#' className='8'>Political Science (JS - JZ)</a></li>
            <li><a href='#' className='13'>Psychology (BF)</a></li>
            <li><a href='#' className='13'>Religion (BL - BQ)</a></li>
            <li><a href='#' className='l'>Science (Q)</a></li>
            <li><a href='#' className='9'>Social Pathology (HV)</a></li>
            <li><a href='#' className='9'>Sociology (HM - HT)</a></li>
            <li><a href='#' className='9'>Sports (GV)</a></li>
            <li><a href='#' className='2'>Statistics (HA)</a></li>
            <li><a href='#' className='12'>Theology (BT - BV)</a></li>
          </ul>
        </div>
      );
    }

    booksByCallNumber() {
      return (
        <div className='books-by-call-number'>
          <ul>
            <li><a href='#' className='l'>A</a></li>
            <li><a href='#' className='13'>B - BR</a></li>
            <li><a href='#' className='12'>BS - BX3999</a></li>
            <li><a href='#' className='11'>BX4000 - DR</a></li>
            <li><a href='#' className='10'>DS - DX</a></li>
            <li><a href='#' className='10'>E - F</a></li>
            <li><a href='#' className='9'>G</a></li>
            <li><a href='#' className='2'>H - HJ</a></li>
            <li><a href='#' className='9'>HM - HX</a></li>
            <li><a href='#' className='9'>J - JQ</a></li>
            <li><a href='#' className='8'>JS - JZ</a></li>
            <li><a href='#' className='8'>K - L</a></li>
            <li><a href='#' className='2'>M - N</a></li>
            <li><a href='#' className='8'>P - PM</a></li>
            <li><a href='#' className='5'>PN - PQ</a></li>
            <li><a href='#' className='4'>PR - PZ</a></li>
            <li><a href='#' className='1'>Q - R</a></li>
            <li><a href='#' className='l'>T - TQ</a></li>
            <li><a href='#' className='2'>TR</a></li>
            <li><a href='#' className='l'>TS - TX</a></li>
            <li><a href='#' className='l'>U - Z</a></li>
          </ul>
        </div>
      );
    }

    render() {
      return (
        <div className='call-numbers'>
          <div className='title'><h3>Books by Subject</h3></div>
          {this.booksBySubject()}
          <div className='title'><h3>Books by Call #</h3></div>
          {this.booksByCallNumber}
        </div>
      );
    }
}

export default CallNumbers;
