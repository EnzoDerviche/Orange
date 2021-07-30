import React from 'react';
import "./App.css";
import moon from '../assets/moon.png';
import sun from '../assets/sun.png';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            mode: true
        };
    }



    render() {
        const { mode } = this.state;
        return (
            <div class={mode? 'light-thme' : 'dark-theme'}>
                <section class="container">
                    <div class="title">
                        <h1>Dark Mode Challenge</h1>
                        {mode ? <button onClick={() => this.setState({mode:false})} className="btn"><img className='imgs' src={moon} alt='logoluna'/></button> : <button  onClick={() => this.setState({mode:true})} class='btn'><img className='imgs' src={sun} alt='logosol'/></button>}
                    </div>
                    <div class='texts'>
                        <div class='box1'>
                            <a>
                                Enim aliquet platea primis ligula vulputate fames cras, rutrum massa vestibulum cum parturient sociosqu habitant, malesuada cubilia nisl rhoncus urna ridiculus. Lacus facilisis viverra fusce magna convallis dictum dis vulputate dictumst, penatibus tempor at velit risus pellentesque morbi. Primis vehicula montes hendrerit litora semper faucibus quisque pellentesque in, per duis viverra potenti sociis ultricies aliquam ad.
                            </a>
                        </div>
                        <div class='box1'>
                            <a>
                                Enim aliquet platea primis ligula vulputate fames cras, rutrum massa vestibulum cum parturient sociosqu habitant, malesuada cubilia nisl rhoncus urna ridiculus. Lacus facilisis viverra fusce magna convallis dictum dis vulputate dictumst, penatibus tempor at velit risus pellentesque morbi. Primis vehicula montes hendrerit litora semper faucibus quisque pellentesque in, per duis viverra potenti sociis ultricies aliquam ad.
                            </a>
                        </div>
                    </div>
                    <div>
                        <form>
                            <div>
                                <input class='forms' value='Name'></input>
                            </div>
                            <div>
                                <input class='forms' value='Email'></input>
                            </div>
                        </form>
                    </div>
                    <div class="bottons">
                        <button class='exit'>Exit</button>
                        <button class='save'>Save</button>
                    </div>
                </section> 
            </div>
        )
    }
}