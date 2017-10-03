import React, {Component} from 'react';

//EXPERIMENTAL
class Test extends Component {
    render(){
        const data = [
            {
                id:"resume",
                name: "John Doe",
                education: [
                            {   
                                id: 0,
                                job:"Super Smile University - MA",
                                period: "2015-2017",
                            },
                            {
                                id: 1,
                                job:"Smile University - BA",
                                period: "2011-2015",
                            },
                            {
                                id: 2,
                                job:"Happy High School - Dipoloma",
                                period: "2007-2011",
                            }
                        ]
            }
        ]
        const resume = data.map((info, key) => {
            return(
                <div>
                <ul>
                    { data.map((info,fix) => { 
                      return <li key={ fix }> {info.position} </li>
                    })}
                </ul>
                </div>
            )
        });
    }
}
export default Test;


