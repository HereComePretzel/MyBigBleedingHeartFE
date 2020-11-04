import { Inject, ViewDirective, ViewsDirective, ScheduleComponent, Day, Week, Month, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { L10n } from '@syncfusion/ej2-base';
import React, { Component } from 'react'
import '../App.css'
import { connect, ConnectedProps } from 'react-redux'
import { newPost } from '../actions/posts'
import { currentUser } from '../actions/auth'
import { RouteComponentProps } from 'react-router-dom'
import { render } from 'react-dom';

L10n.load({
    'en-US': {'schedule': {
        'newEvent': 'New Post'
    }}
})
//  interface RootState {
//     date: string;
//     number: number;
//     meds_taken: boolean;
//     suicidal_thoughts: boolean;
//     good_thoughts: string;
//     bad_thoughts: string;
//     goals: string;
//     notes: string;
//     happy_memory: string;
//     user_id: number,
//  }

//  const mapState = (state: RootState) => ({
//     date: state.date,
//     number: state.number,
//     meds_taken: state.meds_taken,
//     suicidal_thoughts: state.suicidal_thoughts,
//     good_thoughts: state.good_thoughts,
//     bad_thoughts: state.bad_thoughts,
//     goals: state.goals,
//     notes: state.notes,
//     happy_memory: state.happy_memory,
//     user_id: state.user_id

//  })


//  const mapDispatch = {
//     newPost: () => ({ type: 'NEW_POST'})
//  }

// const connector = connect(mapState, mapDispatch)

// type PropsFromRedux = ConnectedProps<typeof connector>

// type Props = PropsFromRedux & {
//     backgroundColor: string 
// }



// interface Calendar3Propsx extends RouteComponentProps {
//     date: string;
//     number: number;
//     meds_taken: boolean;
//     suicidal_thoughts: boolean;
//     good_thoughts: string;
//     bad_thoughts: string;
//     goals: string;
//     notes: string;
//     happy_memory: string;
//     user_id: number,
// };

// interface Calendar3Statex {}



class Calendar3 extends Component{

            state= {
            date: '',
            number: 0,
            meds_taken: true,
            suicidal_thoughts: false,
            good_thoughts: '',
            bad_thoughts: '',
            goals: '',
            notes: '',
            happy_memory: '',
            user_id: 0 
        }
        

    

    // private remoteData = new DataManager({
    //         url: 'http://localhost:3000/posts',
    //         adaptor: new WebApiAdaptor,
    //         crossDomain: true
    //     })
        
        handleChange = (e: any) => {
            this.setState({
                    [e.target.name]: e.target.value
                })
            }

        addPost = (e: any) => {
                e.preventDefault()
            const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
                body: JSON.stringify(this.state)
            }
              fetch('http://localhost:3000/posts', reqObj)
                .then(resp => resp.json())
                .then(post => {
                    console.log(reqObj)
                //   this.props.history.push('/dashboard')
                //   this.props.newPost(post)
                  
                })
                }
  
    private localData = [
        {
            subject: "Entry",
            number: "4",
            meds_taken: "True",
            suicidal_thoughts: "True",
            good_thoughts: "I've had a few",
            bad_thoughts: "I've had these too",
            goals: "Graduate!",
            notes: "Get this scheduler working",
            happy_memory: "One here or there",
            StartTime: new Date( 2020, 10, 5, 6, 30),
            EndTime: new Date( 2020, 10, 5, 7, 30),
            EventType: "New"
        }
    ];

        
    editorWindowTemplate(props: any): JSX.Element {
            return (
                <form onSubmit={this.addPost}>
                <table className="custom-event-editor" >
                    <tbody>
                        <tr>
                            <td className="e-textlabel">Title</td>
                            <td><input onChange={this.handleChange} id="Title" name="subject" type="text" value={props.subject || null}/>
                                </td>
                            </tr>
                        <tr>
                            <td className="e-textlabel">How'd it go today?</td>
                            <td onChange={this.handleChange}>
                            <DropDownListComponent  id="number" dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} placeholder="Which one?" data-name="number" value={props.number || null}>
                                </DropDownListComponent>
                                </td>
                            </tr>
                        <tr>
                            <td className="e-textlabel">Did you take your meds?</td>
                            <td onChange={this.handleChange}>
                                <DropDownListComponent  id="meds_taken" dataSource={["True", "False"]} placeholder="Which one?" data-name="meds_taken" value={props.meds_taken || null}>
                                </DropDownListComponent>
                            </td>
                            </tr>
                        <tr>
                            <td className="e-textlabel">Any suicidal thoughts?</td>
                            <td onChange={this.handleChange}>
                            <DropDownListComponent   id="suicidal_thoughts" dataSource={['True', 'False']} placeholder="Which one?" name="suicidal_thoughts" value={props.suicidal_thoughts || null}>
                                </DropDownListComponent>
                            </td>
                            </tr>
                        <tr>
                            <td className="e-textlabel">Good thoughts:</td>
                            <td>
                            <textarea onChange={this.handleChange} id="good_thoughts" name="good_thoughts" rows={3} cols={50} value={props.good_thoughts || null}></textarea>
                            </td>
                            </tr>
                        <tr>
                            <td className="e-textlabel">Bad thoughts:</td>
                            <td>
                            <textarea onChange={this.handleChange} id="bad_thoughts" name="bad_thoughts" rows={3} cols={50} value={props.bad_thoughts || null}></textarea>
                            </td>
                            </tr>
                        <tr>
                            <td className="e-textlabel">Goals</td>
                            <td>
                                <textarea onChange={this.handleChange} id="goals" name="goals" rows={3} cols={50} value={props.goals || null}></textarea>
                            </td>
                            </tr>
                        <tr>
                            <td className="e-textlabel">Notes</td>
                            <td>
                                <textarea onChange={this.handleChange} id="notes" name="notes" rows={3} cols={50} value={props.notes || null}></textarea>
                            </td>
                            </tr>
                        <tr>
                            <td className="e-textlabel">Happy Memory</td>
                            <td>
                                <textarea onChange={this.handleChange} id="happy_memory" name="happy_memory" rows={3} cols={50}  value={props.happy_memory || null}></textarea>
                            </td>
                            </tr>
                    </tbody>
                </table>
                </form>
                )
            }
            eventTemplate(props: { [key: string]: Object}): JSX.Element {
                return (<div className="month-template-wrap">{props.number}</div>);
                debugger
            }
            render() {
                return (
                    <div>
                    
                    <ScheduleComponent height='650px' currentView='Month' selectedDate={new Date(2020, 10, 3)} 
                    eventSettings={{dataSource: this.localData }} 
                    editorTemplate={this.editorWindowTemplate.bind(this)}>
                    <ViewsDirective>
                        <ViewDirective option="Day"/>
                        <ViewDirective option="Week"/>
                        <ViewDirective option="Month" eventTemplate={this.eventTemplate.bind(this)}/>
                    </ViewsDirective>
            <Inject services={[Day, Week, Month]}/>
            </ScheduleComponent>
            </div>
                )}
}


// interface ICalendar3Props extends RouteComponentProps{
    
// }

// interface ICalendar3State {
//     date: string;
//     number: number;
//     meds_taken: boolean;
//     suicidal_thoughts: boolean;
//     good_thoughts: string;
//     bad_thoughts: string;
//     goals: string;
//     notes: string;
//     happy_memory: string;
//     user_id: number,
// };

const mapStateToProps = (state: any) => {
    return {
        posts: state.posts,
        auth: state.auth
    }
}

const mapDispatchToProps = {
    newPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar3)
