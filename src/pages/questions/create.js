import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Header from '../../components/header';
import api from '../../utils/api';

export default function CreateQuestion() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    const [categories, setCategories] = useState([])
    const [itemToEdit, setItemToEdit] = useState({
        question: "",
        answer: "",
        category: "",
        difficulty: "",
        rating:""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setItemToEdit({
            ...itemToEdit,
            [name]: value ?? JSON.parse(value),
        })
    }

    useEffect(() => {
        const loadCategories = async () => {
            const response = await api.Catergory.load();
            setCategories(response.data)
        };
        loadCategories();
    }, [])


    const saveQuestion = async () => {
        try {
            const response = await api.Question.save(itemToEdit)
            // notifySuccess(response.successMessage)
            // setLoading(false)
            if (response?.sucessMessage) {
                // localStorage.removeItem("products");
                // history.push("/orderlist")
                // PubSub.publish("product", '');
                console.log(response?.sucessMessage)
            }
        }
        catch (error) {
            console.log(error)
            // setLoading(false)
        }
    }

    return (
        <>
        <Header/>
        <div>
            <div className="mt-1 d-flex float-right align-item-center">
                <button
                    onClick={handleSubmit(saveQuestion)}
                    type="submit"
                    class="btn btn-primary btn-sm btn-icon-text d-flex mx-1" >
                    <i className="fa fa-floppy-o mr-1" title="Submit"></i>
                    <span className="d-none d-md-block">save</span>
                </button>
            </div>

            <form className='col-md-6 mx-auto mt-7'>
                <div className="form-group">
                    <label htmlFor="question">Question</label>
                    <textarea
                        className="form-control"
                        id="question"
                        name="question"
                        rows={3}
                        defaultValue={""}
                        {...register("question", { required: true, onChange: (e) => { handleOnChange(e) } })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="answer">Answer</label>
                    <input
                        type="text"
                        className="form-control"
                        id="answer"
                        name="answer"
                        placeholder="Answer"
                        {...register("answer", { required: true, onChange: (e) => { handleOnChange(e) } })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="difficulty">Difficulty</label>
                    <select
                        className="form-control"
                        id="difficulty"
                        name="difficulty"
                        {...register("difficulty", { required: true, onChange: (e) => { handleOnChange(e) } })}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                        className="form-control"
                        id="category"
                        name="category"
                        {...register("category", { required: true, onChange: (e) => { handleOnChange(e) } })}
                    >
                        <option value="">select category</option>
                        {categories?.map((type) => (
                            <option key={type.id} value={type.id}>{type.type}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <select
                        className="form-control"
                        id="rating"
                        name="rating"
                        {...register("rating", { required: true, onChange: (e) => { handleOnChange(e) } })}
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
        </>
    )
}
