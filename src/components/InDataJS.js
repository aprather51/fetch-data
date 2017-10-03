import React, {Component} from 'react';

class InDataJS extends Component {

    render() {
        const pointStyle = { 
            color: "red"
        
        }

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

    // const resume = data.map((info, key) => {
    //     return (
    //         <div key={key}>
    //             <h2><strong>Data Array <span style={pointStyle}>Internal</span> Component</strong></h2>
    //             <p><strong>Name: </strong>{info.name} </p>
    //             <p><strong>Position: </strong> {info.position} </p>
    //             <p><strong>Experiences:</strong></p>
    //             {info.experiences.map((experience)=> 
    //             <ul key={experience.id}>
    //                     <li>
    //                         <p>{experience.job}</p>
    //                         <p>{experience.period}</p>
    //                         <p>{experience.description}</p>
    //                     </li>
    //             </ul>)}
    //             <hr/>
    //         </div>
    //         )
    //     });

        return (
            <div>
                <h2><strong>Data Array <span style={pointStyle}>Internal</span> Component</strong></h2>
                {/*resume*/}
                {data.map((info, key) => {
                    return(
                      <div key={key}>
                        <p><strong>Name:</strong>{info.name}</p>
                        <p><strong>Position:</strong>{info.position}</p>
                        <p><strong>Experiences:</strong></p>
                        {info.experiences.map((exp) => {
                            return <ul key={exp.id}>
                                <li>
                                    <p>{exp.job}</p>
                                    <p>{exp.period}</p>
                                    <p>{exp.description}</p>
                                </li>
                            </ul>
                        })}
                      </div>
                    ) 
                })}
            </div>  
        )
    }    
}
export default InDataJS;