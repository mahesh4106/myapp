import React from 'react';
import './TimeSheet.scss';
import axios from 'axios';
import Popup from "reactjs-popup";


const initialstate = {
    
        project: "",
        date:"",
        time:"",
        desc:"",
        projecterror:"",
        dateerror:"",
        descerror:""


    
}

export default class Timesheet extends React.Component{
    state = initialstate;

        

        handleproject = event =>{
            this.setState({project: event.target.value});
        };

        handledate = event =>{
            this.setState({date: event.target.value});
        };

        handletime = event =>{
            this.setState({time: event.target.value},() => {console.log( "test" + this.state.time)});
        };

        handledesc = event =>{
            this.setState({desc: event.target.value});
        };

       

        validate = () =>{
            //let projecterror="";
            let dateerror="";
            let descerror="";

            if(!this.state.desc){
                descerror = "invalid description";
            }
            if(!this.state.date){
                dateerror = "please select date";
            }
            
            if(descerror || dateerror){
                this.setState({descerror,dateerror});
                return false;
            }

            return true;
        };


        handlesubmit = async(event) =>{
            event.preventDefault();

           // const resp2 = await axios.get(`https://api.github.com/users/${this.state.date}`);
            const resp = await axios.get(`https://api.github.com/users/${this.state.desc}`);
            const resp1 = await axios.get(`https://api.github.com/users/${this.state.time}`);
            // console.log(resp);

            
            this.props.onSubmit(resp.data);
            this.props.onSubmit(resp1.data);
           // this.props.onSubmit(resp2.data);

            const isvalid = this.validate();
            if(isvalid){
            console.log(this.state);
            this.setState(initialstate);
            }
        };
    
    render(){
        return(
            <div className = "popwidow">
                <h6 class = "Addtime">Add Time</h6>
            <Popup 
            trigger={<button className="poupcls"> + </button>}
            position= "left top"
            >

            <div className = "tsh">
                
               <header className = "App-header">TimeSheet</header>
                <form>
                     
               

                    <select className = "project"  value = {this.state.project} onChange={this.handleproject}>
                        <option>project</option>
                        <option>project1</option>
                        <option>project2</option>
                        <option>test</option>
                    </select>
                   
                     


                    <div className = "date"> 
                        
                        <input
                        type="date"  
                        name="date"
                        placeholder="Date"
                        value={this.state.date}
                        onChange={this.handledate}
                        />
                    </div>
                    <div style={{color:"red" ,fontSize:12}}>{this.state.dateerror}</div>

                    <div className = "time">
                        <input type="number" 
                        name="time"
                        placeholder="Time"
                        value={this.state.time}
                        onChange={this.handletime}
                        />
                    </div>

                    <br/>
                    
                    <div className = "desc">
                        <textarea className = "description" 
                        type="text" 
                        maxLength="100"
                        name="desc"
                        placeholder="What Did You Work On?"
                        value = {this.state.desc}
                        onChange={this.handledesc}
                       />
                    </div>
                    <div style={{color:"red" ,fontSize:12}}>{this.state.descerror}</div>

                     <div>
                     <button className = "save" onClick={this.handlesubmit}>save</button>
                     </div>

                     


                     
                </form>
                
            </div>
            </Popup>
            </div>
            
        );
    }
}
