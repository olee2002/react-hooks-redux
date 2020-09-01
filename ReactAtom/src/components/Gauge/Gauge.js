import React, {Component, Fragment} from 'react';
import './Gauge.css'
import Searchopt from './Searchopt';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import ReactBoostrapTable from "../React-Table/components/React_Boostrap_Table";
import ArcContainer from "./ArcContainer";
import LinearContainer from './LinearContainer ';

class Gauge extends Component {
  render() {
    return (
      <div>
          <h2>Guage</h2>
          <hr className="hr"/>
          <Accordion className="accordian" allowZeroExpanded>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        Arc Container
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <ArcContainer/>
                  </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          Linear Container
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <LinearContainer/>
                  </AccordionItemPanel>
              </AccordionItem>
          </Accordion>
      </div>
    );
  }
}

export default Gauge;
