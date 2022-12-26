import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import './landing.css'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import{githubGist} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const Landing = () => {
    return (
        <>
            <div className='landingBG h-[100vh] w-[100%] text-white' >
                <Header />
                <div className="flex container justify-center ">
                    <div className="container flex flex-col py-10">
                        <div className="w-[70%] flex flex-col capitalize">
                            <h5 className='text-xl text-cyan-500 font-semibold '>API for devlopper</h5>
                            <h1 className='text-[70px] font-semibold'>Codex of all xbox game since the first realese</h1>
                            <h5 className='text-lg text-gray-400'>get started in no time, register and start browsing </h5>
                            <Link to={"/register"} className=" capitalize  shadow bg-cyan-600 hover:bg-cyan-800 focus:shadow-outline focus:outline-none text-[#111111] text-lg font-bold py-3 px-7 rounded 
                        w-[35%] mt-5
                        ">Get started <i class="fa-solid fa-arrow-right"></i></Link>
                        </div>

                    </div>
                    <div className="box mt-10 ">
                        <div className="Code-block w-[500px] h-[600px] bg-[#041221] border-2 border-[#27448D]  shadow-xl  shadow-blue-900">
                            <SyntaxHighlighter language="javascript"  customStyle={{ width: "500px", height: "600px",background:"#041221", color:'white'}} showLineNumbers="false" wrapLines="true" style={a11yDark}>
                               { `
import React from 'react';
import axios from 'axios';
export default class PersonList extends

  componentDidMount() {
    axios.get('https://jsonplaceholder.
    typicode.com/users')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })}
render() {
    return (
    <ul>
    {
    this.state.persons
    .map(person =>
    <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )}}
 `}
                                
                            </SyntaxHighlighter>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
