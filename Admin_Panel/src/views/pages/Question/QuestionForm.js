import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FormBuilder } from 'react-formio'

const QuestionForm = () => {
  const [state, setState] = useState({ formData: [], timeline: '2' })
  const [formDefinition, setFormDefinition] = useState({ formValue: {}, title: '', timeline: '' })

  const handleSubmit = () => {}

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  useEffect(() => {
    axios({
      url: 'http://64.227.172.35:3000/v1/questionbook/get-form',
      method: 'GET',
    })
      .then((response) => {
        console.log('🚀 ~ file: QuestionForm.js:28 ~ .then ~ response:', response)
        const data = JSON.parse(response?.data?.data?.questions)
        setFormDefinition({
          formValue: data,
          title: response?.data?.data?.title,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <div className="d-flex m-4 justify-content-around">
        <div className="d-flex">
          <label htmlFor="title" className="m-1">
            Title:
          </label>
          <input
            className="form-control"
            placeholder="Please enter Question Form Name"
            type="text"
            name="title"
            id="title"
            value={formDefinition?.title || ''}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="d-flex">
          <label htmlFor="Timeline" className="m-1">
            Timeline:
          </label>
          <input
            className="form-control"
            placeholder="Please enter the timeline"
            type="number"
            name="timeline"
            id="timeline"
            value={'2'}
            onChange={handleChange}
            disabled={true}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-success">
          {' '}
          Click here to submit
        </button>
      </div>

      <FormBuilder
        form={formDefinition?.formValue}
        saveForm={(data) => console.log('data', data)}
        onChange={(schema) => {
          setState((prevState) => ({
            ...prevState,
            formData: JSON.stringify(schema),
          }))
        }}
      />
    </div>
  )
}

export default QuestionForm
