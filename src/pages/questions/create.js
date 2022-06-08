import React from 'react'

export default function CreateQuestion() {
    return (
            <div>
                <form className='col-md-6 mx-auto mt-7'>
                <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Question</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Answer</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Difficulty</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Category</label>
                        <select className="form-control" id="exampleFormControlSelect1">
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
