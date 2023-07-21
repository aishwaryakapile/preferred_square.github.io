import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Formik, Form, Field, useFormik } from 'formik';
import { signUpSchema } from "./Signupschema";

import './jobopeningbody.css'
const initialValues = {
  name: "",
  company: "",
  subject: "",
  country: "",
  email: "",
  phone: "",
  message: "",
  agree: false
}

const Jobopeningbody = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(

          values
        );
        action.resetForm();
      },
    });
  console.log(

    errors
  );


  return (
    <>
      <section>
        <Container className='jobopeningbody-section'>
          <div className='job-upper-div'>
            <button className='career-btn'>Careers</button>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.5 15L13.5 12L10.5 9" stroke="#151515" />
            </svg></div>
            <p className='job-upper-para'>Senior Business Analyst</p>
          </div>
          <Row className='mt-5 pt-5 mb-5'>
            <Col className='col-md-6 jobinfo-section'>
              <h2>Senior Business Analyst</h2>
              <h5 className='mt-5'>Responsibilities</h5>
              <ul className='mt-3'>
                <li>Formulate corporate strategy & implementation plans for family offices, real estate developers and asset managers</li>
                <li>Assist with due diligence projects on the entire investment value chain like creating models, writing memos, advising on pre-IPO valuations etc.</li>
                <li>Define the problem concisely and hypothesize the proposed solution</li>
                <li>Perform quantitative and qualitative analysis to drive the proposed solution</li>
                <ul>
                  <li>Quantitative research methodologies include data mining, creating financial models, and performing valuation analysis</li>
                  <li>Qualitative research methodologies include performing market research and collecting business intelligence</li>
                </ul>
                <li>Consolidate the findings from the analysis and present solutions to the client. Also, conduct client workshops on processes & systems</li>
                <li>Develop and present a plan to implement the recommended changes</li>
                <li>Support the business development activities of the firm, such as the pursuit development and production of thought papers</li>
              </ul>
              <h5 className='mt-5'>Other Perks</h5>
              <ul>
                <li>Fast track promotions</li>
                <li>Hybrid work model</li>
                <li>Work from anywhere flexibility</li>
                <li>Compensatory offs and generous paid leave policy</li>
                <li>Relocation allowance</li>
                <li>Smart casual dress code</li>
                <li>Gen Z inclusive work culture</li>

              </ul>
            </Col>
            <Col className='col-md-6 form-section'>
              <h2>Apply Now</h2>
              <Formik>
                {() => (
                  <Form onSubmit={handleSubmit} className='mt-5'>

                    <div className='mb-3'>
                      <label htmlFor="name" className="">Name*</label>
                      <Field type="text" name="name" placeholder='' aria-labelledby="name" value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                      {/* <ErrorMessage name="name" className="" component="div" /> */}
                      <div className='errormsg'> {errors.name && touched.name ? (
                        <p className="form-error">{errors.name}</p>
                      ) : null}</div>
                    </div>
                    <div className='mb-3'>
                      <label htmlFor="email" className="">Email*</label>
                      <Field type="email" name="email" placeholder='' aria-labelledby="email" value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                      {/* <ErrorMessage name="email" component="div" /> */}
                      <div className='errormsg'> {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                      ) : null}</div>
                    </div>
                    <div className='mb-3'>
                      <label htmlFor="phone" className="">Phone*</label>
                      <Field type="text" name="phone" placeholder='' aria-labelledby="phone" value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                      {/* <ErrorMessage name="phone" className="" component="div" /> */}
                      <div className='errormsg'> {errors.phone && touched.phone ? (
                        <p className="form-error">{errors.phone}</p>
                      ) : null}</div>
                    </div>



                    <div className='mb-3'>
                      <label htmlFor="message" className="">Message*</label>
                      <Field component="textarea" name="message" row="10" aria-labelledby="message" value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                      {/* <ErrorMessage name="message" component="div" /> */}
                      <div className='errormsg'> {errors.message && touched.message ? (
                        <p className="form-error">{errors.message}</p>
                      ) : null}</div>
                    </div>
                    <div className='mb-3'>
                      <label htmlFor="message" className="">Upload Resume*</label>
                      <Field type="file" name="" className='form-control' />
                    </div>

                    <div className='text-left mobile-align'>
                      <button type="submit">Apply Now
                      </button>
                    </div>

                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </section >
    </>
  )
}

export default Jobopeningbody