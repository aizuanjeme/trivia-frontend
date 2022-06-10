import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import Header from '../../components/header';
import api from '../../utils/api';
import "./landingpage.css"
export default function LandingPage() {
    const [categories, setCategories] = useState([])
    const [questions, setQuestions] = useState([])
    const [showAns, setShowAns] = useState(false)
    const [pageCount, setPageCount] = useState(0);
    const [limits, setLimit] = useState(0);
    const page =1
    useEffect(() => {
        const loadCategories = async () => {
            const response = await api.Question.load(page);
            const catergories = response.categories
            // const defaultCategory = catergories.data[0]
            // if (defaultCategory) {
                // const defaultCat = Number
                // const responses = await api.Catergory.loadQuestionById(defaultCategory.id)
                const count = response.totalCount;
                const limit = response.limit
                setLimit(limit)
                setPageCount(Math.ceil(count / limit))    
                setQuestions(response.questions)
                setCategories(catergories)
            // }
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

    const getQuestions = async (id) => {
        const responses = await api.Catergory.loadQuestionById(id)
        setQuestions(responses.data)
    }

    const rateQuestion = async (id, index) => {
        const payload ={
            "rating" : index
        }
        const response = await api.Question.rate(id, (payload))
        if(response.success){
            const responses = await api.Catergory.loadQuestionById(response.categoryId)
        setQuestions(responses.data)
        }
    }

    const handlePageClick = async (selectedPage) => {
        let currentPage = selectedPage.selected + 1;
            const {  questions  } = await api.Question.load(currentPage);
            setQuestions(questions);

            window.scrollTo(0, 0)
    };

    return (
        <>
            <Header />
            <div className='row mt-5'>
                <div className='col-md-4 col-2'>
                    <ul>
                        {categories.map((cat) => (
                            <li
                                key={cat.id}
                                onClick={() => { getQuestions(cat.id) }}
                            >
                                {cat.type}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='col-md-8 col-10'>
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
                                                        <h5 className="mb-2 font-weight-normal">
                                                            {question.question}
                                                        </h5>
                                                        <div className="star-rating">
                                                            {[...Array(5)].map((star, index) => {
                                                                index += 1;
                                                                return (
                                                                    <button
                                                                        type="button"
                                                                        key={index}
                                                                        name='rating'
                                                                        className={index <= question.rating ? "on" : "off"}
                                                                        onClick={() =>rateQuestion(question.id, index )}
                                                                    >
                                                                        <span className="star">&#9733;</span>
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>
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
            <div className='row '>
            <div className="mx-auto">
                <nav aria-label="Page navigation example" style={{ zIndex: "auto" }}>
                    <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination justify-content-center"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"active"}
                    />
                </nav >
            </div >
        </div >
        </>
    )
}
