import React, { useEffect, useState } from 'react'
import Header from '../../components/header';
import api from '../../utils/api';
import "./landingpage.css"
export default function LandingPage() {
    const [categories, setCategories] = useState([])
    const [questions, setQuestions] = useState([])
    const [showAns, setShowAns] = useState(false)

    useEffect(() => {
        const loadCategories = async () => {
            const response = await api.Catergory.load();
            const defaultCategory = response.data[0]
            if (defaultCategory) {
                // const defaultCat = Number
                const responses = await api.Catergory.loadQuestionById(defaultCategory.id)
                setQuestions(responses.data)
                setCategories(response.data)
            }
        };
        loadCategories();
    }, [])

    const showAnswer = (id) => {
        const x = questions.find(y => y.id === id)
        if (showAns) {
            setShowAns(false)
        } else {
            setShowAns(true)
        }
    }
    
    const getQuestions = async(id) =>{
        const responses = await api.Catergory.loadQuestionById(id)
        setQuestions(responses.data)
    }
    return (
        <>
                <Header/>
            <div className='row mt-5'>
                <div className='col-md-4 col-12'>
                    <ul>
                        {categories.map((cat) => (
                            <li
                                key={cat.id}
                            onClick={() => {getQuestions(cat.id)}}
                            >
                                {cat.type}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='col-md-8 col-12'>
                    <div className="">
                        <div className="row no-gutters">
                            <div className="col-lg-12 col-md-12 col-12 ">

                                {questions &&
                                    questions.length > 0 &&
                                    questions.map((question, index) => {
                                        return (
                                            <>

                                                <div
                                                    // onClick={() => click(poll.id)}
                                                    className="text-inherit text-capitalize"
                                                >
                                                    <div className="card-body mb-3">
                                                        <h3 className="mb-2 font-weight-normal">
                                                            {question.question}
                                                        </h3>
                                                        <span
                                                            className="badge ml-2 bg-success text-white"
                                                            style={{ fontSize: ".7rem" }} onClick={() => showAnswer(question.id)}
                                                        >
                                                            {showAns ? "Close Answer" : "Show Answer"}
                                                        </span>
                                                        {showAns && <p className="des m-1 ">
                                                            {question.answer}
                                                        </p>}
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
