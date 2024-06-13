  // import React, { useState } from 'react';
  // import './TestCase.css';
  // import Navbar from '../../components/Navbar/Navbar';

  // import axios from "axios";


  // const TestCaseForm = () => {
  //   const [formData, setFormData] = useState({
  //     code: '',
  //     specifications: '',
  //     testCases: '',
  //     isLoading: false
  //   });

  //   const generateTestCases = async () => {
  //     if (!formData.code) {
  //       alert('Code cannot be empty....')
  //       return;
  //     }

  //     if (!formData.specifications) {
  //       alert('Specifications cannot be empty ...')
  //       return;
  //     }

  //     setFormData({
  //       ...formData,
  //       isLoading: true
  //     })
  //     try {
  //       const { data } = await axios.post('https://api.openai.com/v1/chat/completions', {
  //         "model": "gpt-3.5-turbo",
  //         "messages": [{ "role": "user", "content": `Specifications: ${formData.specifications} \n Code: ${formData.code} Please create a test cases for above code by followiing specifications, test cases should simple and point wise, also suggest some instructions for tester` }],
  //         "temperature": 0.7
  //       }, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
  //         }
  //       })


  //       const { choices } = data
  //       const testCases = choices.length > 0 ? choices[0]?.message.content : `Not able to generate test cases, try again`
        
  //       setFormData({
  //         ...formData,
  //         testCases: testCases
  //       })
  //     } catch (error) {
  //       setFormData({
  //         ...formData,
  //         isLoading: false
  //       })
  //     }
  //   }

  //   return (
  //     <>
  //       <Navbar />
  //       <div className="test-case-form">
  //         <h2>Generate Test Case</h2>
  //         <form>
  //           <div className="form-group">
  //             <label htmlFor="code">Code:</label>
  //             <textarea
  //               id="code"
  //               name="code"
  //               value={formData.code}
  //               onChange={(e) => {
  //                 setFormData({
  //                   ...formData,
  //                   code: e.target.value
  //                 })
  //               }}
  //               rows="5"
  //               required
  //             />
  //           </div>
  //           <div className="form-group">
  //             <label htmlFor="specifications">Specifications:</label>
  //             <textarea
  //               id="specifications"
  //               name="specifications"
  //               value={formData.specifications}
  //               onChange={(e) => {
  //                 setFormData({
  //                   ...formData,
  //                   specifications: e.target.value
  //                 })
  //               }}
  //               rows="5"
  //               required
  //             />
  //           </div>
  //           <div className="form-group">
  //             <label htmlFor="testCases">
  //               Test Cases: {formData.isLoading ? "Please wait..." : ""}
  //             </label>
  //             <textarea
  //               id="testCases"
  //               name="testCases"
  //               value={formData.testCases}
  //               onChange={(e) => {
  //                 setFormData({
  //                   ...formData,
  //                   testCases: e.target.value
  //                 })
  //               }}
  //               rows="10"
  //               required
  //             />
  //           </div>
  //           <button type="button" className="generate-btn" onClick={generateTestCases}>
  //             Generate Test Case
  //           </button>
  //         </form>
  //       </div>

  //     </>
  //   );
  // };

  // export default TestCaseForm;




  import React, { useState } from 'react';
  import './TestCase.css';
  import Navbar from '../../components/Navbar/Navbar';
  import axios from "axios";
  
  const TestCaseForm = () => {
    const [formData, setFormData] = useState({
      code: '',
      specifications: '',
      testCases: '',
      isLoading: false
    });
  
    const generateTestCases = async () => {
      if (!formData.code) {
        alert('Code cannot be empty....')
        return;
      }
  
      if (!formData.specifications) {
        alert('Specifications cannot be empty ...')
        return;
      }
  
      setFormData({ ...formData, isLoading: true });
  
      try {
        const { data } = await axios.post('/generate-test-cases', {
          code: formData.code,
          specifications: formData.specifications
        });
  
        setFormData({
          ...formData,
          testCases: data.testCases,
          isLoading: false
        });
      } catch (error) {
        console.error(error);
        setFormData({ ...formData, isLoading: false });
      }
    }
  
    return (
      <>
        <Navbar />
        <div className="test-case-form">
          <h2>Generate Test Case</h2>
          <form>
            <div className="form-group">
              <label htmlFor="code">Code:</label>
              <textarea
                id="code"
                name="code"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                rows="5"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="specifications">Specifications:</label>
              <textarea
                id="specifications"
                name="specifications"
                value={formData.specifications}
                onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                rows="5"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="testCases">Test Cases:</label>
              <textarea
                id="testCases"
                name="testCases"
                value={formData.testCases}
                rows="10"
                disabled
              />
            </div>
            <button type="button" className="generate-btn" onClick={generateTestCases}>
              {formData.isLoading ? "Please wait..." : "Generate Test Case"}
            </button>
          </form>
        </div>
      </>
    );
  };
  
  export default TestCaseForm;
  