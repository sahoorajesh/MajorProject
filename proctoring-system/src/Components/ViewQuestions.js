import '../ComponentCSS/ViewExam.css'
import '../ComponentCSS/SideNavbar.css'
import SideNavbar from './SideNavbar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const ViewQuestions = () => {
    let [exams, setexams] = useState([]);
    const [userid, setuserid] = useState(201);
    const handleViewExam = async () => {

        const res = await fetch('http://localhost:8080/api/exam/ve/' + userid, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'

            },

        })

        const data = await res.json();
        setexams(data);
        // alert("Exam created successfully");
        // console.log(data);


    }
    useEffect(() => {
        handleViewExam()
    }, [])
    return (
        <div className='dashboard'>
            <SideNavbar />
            <div className='dashboard-app'>


                <div className='dashboard-content'>
                    <div className="container">
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-2 mb-0  f4">Exam Section</p>
                        </div>
                        <div className="row">
                            {
                                // console.log(exams)
                                exams && exams.map((item, idx) => {
                                    return (
                                        <div className="col-lg-4" key={idx}>
                                            <div className="card card-margin">
                                                {/* <div className="card-header no-border">
                                                    <h5 className="card-title">MOM</h5>
                                                </div> */}
                                                <div className="card-body pt-0">
                                                    <div className="widget-49">
                                                        <div className="widget-49-title-wrapper pt3">
                                                            <div className="widget-49-date-primary">
                                                                <span className="widget-49-date-day">09</span>
                                                                <span className="widget-49-date-month">apr</span>
                                                            </div>
                                                            <div className="widget-49-meeting-info">
                                                                <span className="widget-49-pro-title b f-6">{item.title}</span>
                                                                {/* https://www.bootdey.com/snippets/view/events-card-widget#html */}
                                                            </div>
                                                        </div>

                                                        <div className="widget-49-meeting-info ma3">
                                                            <span className="widget-49-pro-title">
                                                                <span className="b pr1">
                                                                    Duration:-
                                                                </span>
                                                                {item.duration.toString().slice(11, 16)}
                                                            </span>
                                                        </div>
                                                        <div className="widget-49-meeting-info ma3">
                                                            <span className="widget-49-pro-title">
                                                                <span className="b pr1">
                                                                    Total Marks:-
                                                                </span>
                                                                {item.totalMarks}
                                                            </span>
                                                        </div>

                                                        <Link to={`/question-dashboard/${item._id}`} style={{ textDecoration: 'none' }}>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-coloe btn-md btn-block justify-center items-center-l grow mv2 br4"
                                                            >
                                                                View Questions
                                    </button>
                                                        </Link>
                                                        <Link to={`/update-exam/${item._id}`} style={{ textDecoration: 'none' }}>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-coloe btn-md btn-block justify-center items-center-l grow mv2 br4"
                                                            >
                                                                Update Questions
                                    </button>
                                                        </Link>
                                                        <Link to={`/delete-exam/${item._id}`} style={{ textDecoration: 'none' }}>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-coloe btn-md btn-block justify-center items-center-l grow mv2 br4"
                                                            >
                                                                Delete Questions
                                    </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewQuestions