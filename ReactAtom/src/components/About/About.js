import React, {Component} from "react";
import ReactTable from "react-table";
import data from "../Accordian/json/Data";
import columns from "../Accordian/json/HeaderInfo";


export default class About extends Component {
    render() {
        return (
            <div>
                <h2>What is React JS ?</h2>
                <h4>React JS is a JavaScript library used in web development to build interactive elements on websites. But if you’re not familiar with JavaScript or JavaScript libraries, that’s not a helpful definition. So let’s take a step back and deal with those terms first.</h4>
                <h2>Why Do JavaScript Developers Use React JS?</h2>
                <p>
                    React is a JavaScript library that specializes in helping developers build user interfaces, or UIs. In terms of websites and web applications, UIs are the collection of on-screen menus, search bars, buttons, and anything else someone interacts with to USE a website or app.
                </p>
                <p>
                    Before React JS, developers were stuck building UIs by hand with “vanilla JavaScript” (developer speak for the raw JavaScript language on its own) or with less UI-focused React predecessors like jQuery. That meant longer development times and plenty of opportunities for errors and bugs. So, in 2011, Facebook engineer Jordan Walke created React JS specifically to improve UI development.
                    In addition to providing reusable React library code (saving development time and cutting down on the chance for coding errors), React comes with two key features that add to its appeal for JavaScript developers:
                </p>
                <h2>The React JS Ecosystem</h2>
                <p>
                    It’s common to see React JS described as both a JavaScript library AND a JavaScript framework, so which is it? Or is it both?

                    At Skillcrush, our curriculum team defines React JS as a JavaScript library and not a framework. This is an important distinction.

                    The difference between JavaScript libraries (like React) and JavaScript frameworks (like Angular) lies in the fact that—in the case of a library—the developer applies library code in individual instances that call for it. When it comes to frameworks, however, the framework creates a scaffolding that arranges your website or application and provides dedicated areas for framework code to be plugged-in.

                    To dig into the difference between a library like React JS vs Angular (a framework), you can think of code from a Javascript library in terms of furniture and decorations for a house you’ve already built, while a framework is a model home template you use to build the house.

                    React JS is sometimes mistaken for a full-blown framework since its robust ecosystem and extensibility makes it such a versatile JavaScript library. Remember, when you use React JS to build website and web application UIs, you have access to:

                    React code snippets and components (building blocks of React code used to create specific parts of a user interface)
                    The option to use JSX to directly manipulate your DOM
                    A Virtual DOM to improve your website’s performance
                    But on top of all that, React JS is an open source project, meaning anyone can download and modify its source code for free. This also means that, whatever specific UI function you’re hoping to address with React JS, there’s a React library to meet your needs. Your React library size can grow exponentially with React’s community curated library add-ons, ranging from collections of individual UI features to complete React JS templates for building UI’s from the ground up.
                </p>
            </div>
        )
    }
}
