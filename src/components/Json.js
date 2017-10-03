import React, {Component} from 'react';

//FETCHING EXTERNAL DATA
//recieving data from data/dataJSON.json
class Json extends Component {
    render() {
        //Styling
        const pointStyle = { color: "red" }

        //Mapping
        const {data} = this.props;
        return (
                <div>
                    <h2><strong>Data Array with <span style={pointStyle}>JSON</span> file in Component</strong></h2>
                    <p><strong>Name:</strong>{data.name}</p>
                    <p><strong>Position:</strong>{data.position}</p>
                    <p><strong>Experiences:</strong></p>
                    <ul> 
                        {data.experiences.map((experience) => {
                            return <li key={experience.id}> 
                                        <p> {experience.job} </p>
                                        <p> {experience.period} </p>
                                        <p> {experience.description} </p>
                                    </li>
                        })}
                    </ul>
                    
                    <hr/>
                </div>  
        )
    }
}
export default Json;