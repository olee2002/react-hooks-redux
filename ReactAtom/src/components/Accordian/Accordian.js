import React from 'react';
import Table from './Table';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './accordian-css/accordian-css-file.css';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example() {
    return (
        <Accordion className="accordian">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Mobility Department
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <Table></Table>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Mobility Info
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <span>
                        Atos|Syntel's Mobility Department works on various mobile technologies as well as web technologies.
                  </span>
                    <span>
                        The technologies are categorised as below:
                             <ul>
                            <p>ReactJs</p>
                            <p>AngularJs</p>
                            <p>Android</p>                                 <p>IOS</p>
                        </ul>
                    </span>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}




