/* eslint-disable no-use-before-define */
import React from 'react';
import Creatable from './Creatable';
import './Map.css';

export default class AutoCompletedText extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            suggestions: [],
            text: ''
        }
    }

    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = Creatable.sort().filter(v => regex.test(v))
        }

        this.setState(() => ({
            suggestions,
            text: value
        }))
    }
    handleClick = () => {
        this.setState(() => ({
            text: '',
            suggestions: '',
        }))
    }

    selectedText(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions = () => {
        let { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul >
                {
                    suggestions.map((item, index) => (<li key={index} onClick={() => this.selectedText(item)}>{item}</li>))
                }
            </ul>
        );
    }

    render() {
        const { text, suggestions } = this.state;
        return(
            <div id="search">
                <input id="searchbox" placeholder="choose country" type="search" onChange={this.onTextChange} value={text} />
                {this.renderSuggestions()}
                {/*<span>Suggestions: {suggestions.length}</span>*/}
                <button id="clear" onClick={this.handleClick}>Clear Search</button>

            </div>
        );
    }

}
