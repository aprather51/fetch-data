import React, {Component} from 'react';

class OutDataJS extends Component {
    render() {
        const pointStyle = { color: "red" }

        const {data} = this.props;
        const resume = data.map((info, key) => {
        return (
        <div key={key}>
            <h2><strong>Data Array <span style={pointStyle}>Externial</span> component using dataJS.file</strong></h2>
            <p><strong>Name: </strong>{info.name} </p>
            <p><strong>Position: </strong> {info.position} </p>
            <p><strong>Experiences:</strong></p>
                {info.experiences.map((experience)=> 
                <ul key={experience.id}>
                        <li>
                            <p>{experience.job}</p>
                            <p>{experience.period}</p>
                            <p>{experience.description}</p>
                        </li>
                </ul>)}
            <hr/>
        </div>
        )
    });

    return (
            <div>
                {resume}
            </div>  
        )
    }    
}
export default OutDataJS;