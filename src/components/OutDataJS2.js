import React, {Component} from 'react';

class OutDataJS2 extends Component {
    render() {
        const data = [
            {
              id:"resume",
              name: "John Doe",
              position: "developer",
              experiences: [
                {   
                    id: 0,
                    job:"developer 1",
                    period: "2016-2017",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt recusandae unde. Qui consequatur beatae, aspernatur placeat sapiente non est!" 
                },
                {
                    id: 1,
                    job:"developer 2",
                    period: "2015-2016",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt recusandae unde. Qui consequatur beatae, aspernatur placeat sapiente non est!" 
                },
                {
                    id: 2,
                    job:"developer 3",
                    period: "2014-2015",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt recusandae unde. Qui consequatur beatae, aspernatur placeat sapiente non est!" 
                }
            ]
        }
    ]

    const resume = data.map((info, key) => {
        return (
        <div>
            {resume}
            {<ul>
            { data.map((info,fix) =>{ 
            return <li key={ fix }> {info.position} </li>
            })}
        </ul>}
  </div>  
)

// const names = ['Jake', 'Jon', 'Thruster'];

// return (
//     <ul>
//         {names.map(function(name, index){
//             return <li key={ index }>{name}</li>;
//           })}
//     </ul>
//   )

  }    
 }
export default OutDataJS2;