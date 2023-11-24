// FormComponent.js
import React, { useRef } from 'react';
import { FormBuilder, Form } from 'react-formio';

const formDefinition = {};

function QuestionForm() {
  const formRef = useRef();

  const handleExternalSubmit = async () => {
    // Manually trigger form submission
    if (formRef.current) {
      const formInstance = formRef.current;


        // Get the form data after validation
        const formData = formInstance;

        // You can now use formData as needed, e.g., send it to a server
        console.log('Form Data:', formData);

        // If you want to submit the form programmatically, you can use formInstance.submit()
        // formInstance.submit();
    }
  };

  console.log("formDefinition:", formDefinition);

  return (
    <div>
      {/* FormBuilder with submitButton set to false */}
      <FormBuilder form={formDefinition} ref={formRef} />

      {/* Custom external submit button */}
      <button onClick={handleExternalSubmit}>Submit Form</button>
    </div>
  );
}

export default QuestionForm;
