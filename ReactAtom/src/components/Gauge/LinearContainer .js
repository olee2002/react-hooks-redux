import React from 'react';
import { LinearGauge } from '@progress/kendo-react-gauges';
import { NumericTextBox, Switch } from '@progress/kendo-react-inputs';
import './Gauge.css';

export default class LinearContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLabels: true,
            showTicks: true,
            ticksColor: '#008000',
            labelsColor: '#0000ff',
            rangeSize: 4,
            rangeColor: '#ff6358',
            lineWidth: 2,
            lineColor: '#656565',
            reverse: false,
            vertical: true
        };
    }

    onFieldChange = (event, fieldName, parse) => {
        this.setState({
            [fieldName]: parse ? parseInt(event.target.value) : event.target.value
        });
    }

    onShowLabelChange = (e) => {
        this.onFieldChange(e, 'showLabels');
    }

    onShowTicksChange = (e) => {
        this.onFieldChange(e, 'showTicks');
    }

    onTicksColorChange = (e) => {
        this.onFieldChange(e, 'ticksColor');
    }

    onLabelsColorChange = (e) => {
        this.onFieldChange(e, 'labelsColor');
    }

    onRangeSizeChange = (e) => {
        this.onFieldChange(e, 'rangeSize', true);
    }

    onRangeColorChange = (e) => {
        this.onFieldChange(e, 'rangeColor');
    }

    onReverseChange = (e) => {
        this.onFieldChange(e, 'reverse');
    }

    onVerticalChange = (e) => {
        this.onFieldChange(e, 'vertical');
    }

    onLineWidthChange = (e) => {
        this.onFieldChange(e, 'lineWidth');
    }

    onLineColorChange = (e) => {
        this.onFieldChange(e, 'lineColor');
    }

    render() {
        const {
            showLabels, showTicks, ticksColor, labelsColor, rangeSize,
            rangeColor, reverse, vertical, lineWidth, lineColor
        } = this.state;

        return <div>
            <div className="example-config">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <label>
                            <Switch
                                checked={showLabels}
                                onChange={this.onShowLabelChange}
                            />
                            &nbsp;ShowLabels
                        </label>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label>
                            <Switch
                                checked={showTicks}
                                onChange={this.onShowTicksChange}
                            />
                            &nbsp;ShowTicks
                        </label>
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <label>
                            <input
                                type="color"
                                value={ticksColor}
                                onChange={this.onTicksColorChange}
                            />
                            &nbsp;Ticks Color
                        </label>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label>
                            <input
                                type="color"
                                value={labelsColor}
                                onChange={this.onLabelsColorChange}
                            />
                            &nbsp;Labels Color
                        </label>
                    </div>
                </div>
            
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <label>
                            <NumericTextBox
                                width={80}
                                onChange={this.onLineWidthChange}
                                value={lineWidth}
                                min="1"
                                max="30"
                            />
                            &nbsp;LineWidth
                        </label>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label>
                            <input
                                type="color"
                                value={lineColor}
                                onChange={this.onLineColorChange}
                            />
                            &nbsp;LineColor
                        </label>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label>
                            <NumericTextBox
                                width={70}
                                onChange={this.onRangeSizeChange}
                                value={rangeSize}
                                min="1"
                                max="30"
                            />
                            &nbsp;RangeSize
                        </label>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label>
                            <input
                                type="color"
                                value={rangeColor}
                                onChange={this.onRangeColorChange}
                            />
                            &nbsp;Range Color
                        </label>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-sm-12 col-md-3" width="200">
                        <label>
                            <Switch
                                checked={vertical}
                                onChange={this.onVerticalChange}
                            />
                            &nbsp;Vertical
                        </label>
                      
                    </div>
                    <div  className="col-sm-12 col-md-3">
                    <label>
                    <Switch
                        checked={reverse}
                        onChange={this.onReverseChange}
                    />
                    &nbsp;Reverse
                </label>
                    </div>
                    
                </div>

            </div>
            <LinearGauge
                pointer={{
                    value: 50
                }}
                transitions={true}
                scale={{
                    labels: { format: '', color: labelsColor, visible: showLabels },
                    majorTicks: { visible: showTicks, color: ticksColor },
                    minorTicks: { visible: showTicks, color: ticksColor },
                    ticksColor,
                    rangeSize,
                    reverse,
                    vertical,
                    ranges: [{
                        from: 0,
                        to: 30,
                        color: rangeColor
                    }],
                    line: {
                        color: lineColor,
                        width: lineWidth
                    }
                }} />
        </div >;
    }
}


