
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../ComponentCSS/SideNavbar.css'

import { useNavigate } from 'react-router-dom';
const SideNavbar = () => {
    var [examclassname, setexamclassname] = useState("dashboard-nav-dropdown show");
    var [quesclassname, setquesclassname] = useState("dashboard-nav-dropdown show");
    var [showExam, setshowExam] = useState(false);
    var [showQuestion, setshowQuestion] = useState(false);


    const history = useNavigate();
    // const toggleExam = () => {
    //     setshowExam(!showExam);
    //     if (showExam) {
    //         setexamclassname("dashboard-nav-dropdown show ")
    //     }
    //     else {
    //         setexamclassname("dashboard-nav-dropdown ")
    //     }
    //     console.log(examclassname);
    // }

    // const toggleQuestion = () => {
    //     setshowQuestion(!showQuestion);
    //     if (showQuestion) {
    //         setquesclassname("dashboard-nav-dropdown show ")
    //     }
    //     else {
    //         setquesclassname("dashboard-nav-dropdown ")
    //     }
    //     console.log(quesclassname);
    // }

    const [user, setuser] = useState({});
    useEffect(() => {
        const getuserdata = async () => {
            const stringUser = await localStorage.getItem('user');
            setuser(JSON.parse(stringUser));


        }
        getuserdata();
    }, [])

    // const logoutClicked = () => {
    //     localStorage.clear(); //if you want to clear localstorage data
    //     history("/"); //redirect to login
    //   };
    return (

        <div className="dashboard-nav">

            <header>
                <h4 className="brand-logo grow">
                    <i className="	fas fa-bullseye"></i> <span>PROCTOROR</span></h4></header>

            <nav className="dashboard-nav-list">
                <Link style={{ textDecoration: 'none' }} to='/dashboard'>
                    <h6 className="dashboard-nav-item">
                        <i className="fas fa-home"></i>
                        Dashboard

                    </h6>
                </Link>

                {
                    Object.keys(user).length > 0 && user.roles[0] != 'ROLE_TEACHER' &&
                    <Link style={{ textDecoration: 'none' }} to='/startexam'>
                        <h6 className="dashboard-nav-item">
                            <i className="fa fa-book"></i>
                            Start Exam

                        </h6>
                    </Link>
                }
                {/* {
                    Object.keys(user).length > 0 && user.roles[0] === 'ROLE_TEACHER' &&
                    <a className="dashboard-nav-item">
                        <i className="fas fa-video"></i>
                        Monitor Exam
                    </a>
                } */}
                {
                    Object.keys(user).length > 0 && user.roles[0] === 'ROLE_TEACHER' &&
                    <div className={examclassname}>
                        <a className="dashboard-nav-item dashboard-nav-dropdown-toggle " >
                            <i className="fas fa-plus"></i>
                            Examination
                        </a>

                        <div className='dashboard-nav-dropdown-menu'>
                            <Link style={{ textDecoration: 'none' }} to="/create-exam">
                                <h6 className="dashboard-nav-dropdown-item">
                                    <i className="fas fa-plus mr2"></i>
                                    Create Exam
                                </h6>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/view-exam'>
                                <h6 className="dashboard-nav-dropdown-item">
                                    <i className="fas fa-eye mr2"></i>
                                    View Exam
                                </h6>
                            </Link>


                        </div>
                    </div>
                }
                {
                    Object.keys(user).length > 0 && user.roles[0] === 'ROLE_TEACHER' &&
                    <div className={quesclassname}>
                        <a className="dashboard-nav-item dashboard-nav-dropdown-toggle ">
                            <i className="fa fa-question"></i>
                            Questions
                        </a>

                        <div className='dashboard-nav-dropdown-menu'>
                            <Link style={{ textDecoration: 'none' }} to='/exam-dashboard'>
                                <h6 className="dashboard-nav-dropdown-item">
                                    <i className="fas fa-plus mr2"></i>
                                    Add Question
                                </h6>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/view-questions'>
                                <h6 className="dashboard-nav-dropdown-item">
                                    <i className="fas fa-eye mr2"></i>
                                    View Questions
                                </h6>
                            </Link>


                        </div>
                    </div>
                }
                {
                    Object.keys(user).length > 0 && user.roles[0] === 'ROLE_TEACHER' &&
                    <a className="dashboard-nav-item active">
                        <i className="fas fa-clipboard"></i>
                        Publish Result
                    </a>
                }
                {/* {
                    Object.keys(user).length > 0 && user.roles[0] === 'ROLE_TEACHER' &&
                    <a className="dashboard-nav-item">
                        <i className="fas fa-cogs"></i>
                        Settings
                    </a>
                } */}
                {
                    Object.keys(user).length > 0 && user.roles[0] === 'ROLE_TEACHER' &&
                    <div className="nav-item-divider"></div>
                }
                {/* <h6 className="dashboard-nav-item" onClick={logoutClicked}> */}
                <h6 className="dashboard-nav-item" >

                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                </h6>

            </nav>
        </div>

    )
}

export default SideNavbar