import React, { useEffect, useState } from 'react'
import api from '../../utils/api';

export default function LandingPage() {
    const [categories, setCategories] = useState([])
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const loadCategories = async () => {
            const response = await api.Catergory.load();
            const defaultCategory = response.data[0]
            if(defaultCategory){
                // const defaultCat = Number
                const responses = await api.Catergory.loadQuestionById(defaultCategory.id)
                setQuestions(responses.data)
                setCategories(response.data)    
            }
        };
        loadCategories();
    }, [])

    return (
        <>
            <div className='row'>
                <div className='col-md-4 col-12'>

                </div>
                <div className='col-md-8 col-12'>
                    <div className="">
                        <div className="row no-gutters">
                            <div className="col-lg-12 col-md-12 col-12 ">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
