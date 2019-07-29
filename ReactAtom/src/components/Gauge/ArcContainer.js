
import React from 'react';
import { ArcGauge } from '@progress/kendo-react-gauges';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { NumericTextBox, Switch } from '@progress/kendo-react-inputs';

export default class ArcContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLabels: true,
            showTicks: true,
            ticksColor: '#f44ad2',
            labelsColor: '#0000ff',
            rangeSize: 20,
            rangeLineCap: 'round',
            rangePlaceholderColor: '#e6e5e5',
            startAngle: 0,
            endAngle: 180,
            reverse: false
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

    onRangeLineCapChange = (e) => {
        this.onFieldChange(e, 'rangeLineCap');
    }

    onRangePlaceholderColorChange = (e) => {
        this.onFieldChange(e, 'rangePlaceholderColor');
    }

    onStartAngleChange = (e) => {
        this.onFieldChange(e, 'startAngle', true);
    }

    onEndAngleChange = (e) => {
        this.onFieldChange(e, 'endAngle', true);
    }

    onReverseChange = (e) => {
        this.onFieldChange(e, 'reverse');
    }

    render() {
        const {
            showLabels, showTicks, ticksColor, labelsColor, rangeSize, rangeLineCap,
            rangePlaceholderColor, startAngle, endAngle, reverse
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
                    <div className="col-sm-12 col-md-4">
                        <label>
                            <NumericTextBox
                                width={80}
                                onChange={this.onRangeSizeChange}
                                value={rangeSize}
                                min="1"
                                max="30"
                            />
                            &nbsp;Range Size
                        </label>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <label>
                            <DropDownList
                                style={{ width: 80 }}
                                data={['round', 'butt']}
                                onChange={this.onRangeLineCapChange}
                                value={rangeLineCap}
                            />
                            &nbsp;Range Line
                        </label>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <label>
                            <input
                                type="color"
                                value={rangePlaceholderColor}
                                onChange={this.onRangePlaceholderColorChange}
                            />
                            &nbsp;Range Placeholder Color
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <label>
                            <input
                                type="range"
                                min="-90"
                                max="90"
                                value={startAngle}
                                style={{ verticalAlign: 'middle' }}
                                onChange={this.onStartAngleChange}
                            />
                            &nbsp;Start angle
                        </label>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <label>
                            <input
                                type="range"
                                min="90"
                                max="270"
                                value={endAngle}
                                style={{ verticalAlign: 'middle' }}
                                onChange={this.onEndAngleChange}
                            />
                            &nbsp;End angle
                        </label>
                    </div>
                </div>

                <label>
                    <Switch
                        checked={reverse}
                        onChange={this.onReverseChange}
                    />
                    &nbsp;Reverse
                </label>
            </div>
            <ArcGauge
                value={40}
                transitions={true}
                scale={{
                    labels: { format: '', color: labelsColor, visible: showLabels },
                    majorTicks: { visible: showTicks, color: ticksColor },
                    minorTicks: { visible: showTicks, color: ticksColor },
                    ticksColor,
                    rangeSize,
                    rangeLineCap,
                    rangePlaceholderColor,
                    startAngle,
                    endAngle,
                    reverse
                }} />
        </div >;
    }
}
