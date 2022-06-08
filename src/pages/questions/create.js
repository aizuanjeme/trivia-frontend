import React, { useState } from 'react'

export default function CreateQuestion() {
    const [itemToEdit, setItemToEdit]= useState({
        question:"",
        answer:"",
        category:"",
        difficulty:""
    })

    return (
            <div>
                <form className='col-md-6 mx-auto mt-7'>
                <div className="form-group">
                        <label htmlFor="question">Question</label>
                        <textarea 
                        className="form-control" 
                        id="question"
                        name="question"
                        rows={3}
                        defaultValue={""} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="answer">Answer</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="answer" 
                        name="answer" 
                        placeholder="Answer" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="difficulity">Difficulty</label>
                        <select 
                        className="form-control" 
                        id="difficulity"
                        name="difficulity"
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="catergory">Category</label>
                        <select 
                        className="form-control" 
                        id="catergory"
                        name="catergory"
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                </form>
            </div>
    )
}
