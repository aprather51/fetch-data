import React, { Component } from 'react';
import './App.scss';



class App extends Component {

  
  render() {
    // console.log(this.props.name)
     const {data} = this.props;
     const resume = data.map((info) => {
        return (
          <div>
             {info.name}
             {info.experiences.map((experience, idx)=> 
                  <div >
                      <div key={experience.id} >{experience.job}</div>
             </div>)}
             {info.position}
             
          </div>
      )
    });

    // const exp = data.map((info) => {
    //   return(
    //     <ul>
    //     {info.experiences.map((experience, idx) => 
    //             <li key={idx}>
    //                 {experience.job}
    //           </li>
    //     )}
    //     </ul>
    //   )
    // });
       //JS
      // const data = this.props.data.experiences;
      // const resume = data.map(data => {
      //   console.log(data);
      // });

      // const one = this.props.data.experiences;
      // const experences = one.map(experience => {
      //   console.log(one)
      // })
      
      //JSON
      // const data = this.props.data.experiences;
      // const resume = data.map(data => {
      //   console.log(data.period);
      // });
      
     

    return (
      <div>
        {resume}
      </div>
          
    );
  }
}

export default App;



