import React from 'react';
import './Admission.css';

import DescCard from '../../components/descCard/DescCard';
import AdmissionCard from '../../components/admissionCard/AdmissionCard';

const Admission = () => {
  return (
    <div className='admission-wrapper'>
       <div className="admission-top">
            <div className="admission-top-left">
                <p>Admission</p>
                <h2>Join Our Family of Young Learners</h2>
            </div>
            <div className="admission-top-right">
                <p>
                    At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child.
                    Our admission process is designed to be transparent,
                    straightforward, and inclusive. Here's a step-by-step guide to joining our school
                </p>
            </div>
        </div>

        <div className="admission-process">
          <DescCard props={{
            tag:"Process",
            heading:"Admission Process",
            desc:"Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
          }} />
          <div className="admission-cards">
            <AdmissionCard props={{
            no:"01",
            title:"Inquiry",
            desc:"Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy."
            }} />
            <AdmissionCard props={{
            no:"02",
            title:"School Tour",
            desc:"Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment."
            }} />
            <AdmissionCard props={{
            no:"03",
            title:"Application Form",
            desc:"Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable)."
            }} />
            <AdmissionCard props={{
            no:"04",
            title:"Parent Interview",
            desc:"We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations."
            }} />
            <AdmissionCard props={{
            no:"05",
            title:"Student Assessment",
            desc:"For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement."
            }} />
            <AdmissionCard props={{
            no:"06",
            title:"Acceptance",
            desc:"Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy."
            }} />
          </div>
        </div>

        {/* admission fee */}
        <div className="admission-fee">
          <DescCard props={{
            tag:"Our Features",
            heading:"Fee Structure",
            desc:"Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
          }} />

          <div className="admission-table-1">
            <table id='t1'>
              <tr>
                  <td>Program</td>
                  <td>Age Group</td>
                  <td>Annual Tuition</td>
                  <td>Registration Fee</td>
                  <td>Activity Fee</td>
                </tr>
            </table>
            <table id='t2'>

              <tbody>
                <tr>
                  <td>Nursery</td>
                  <td>2 - 3 Years</td>
                  <td>$1,686</td>
                  <td>$162</td>
                  <td>$12</td>
                </tr>
                <tr>
                  <td>Pre - Kindergartens</td>
                  <td>3 - 4 Years</td>
                  <td>$2,686</td>
                  <td>$220</td>
                  <td>$16</td>
                </tr>
                <tr>
                  <td>Kindergarten</td>
                  <td>4 - 5 Years</td>
                  <td>$3,686</td>
                  <td>$340</td>
                  <td>$20</td>
                </tr>
              </tbody>

            </table>
          </div>
          <div className="admission-table-2">

            <div>
                <p>Additional Services</p>
            </div>

            <table>
                <tr>
                  <td>Before and After-School Care</td>
                  <td>$120 / per month</td>
                </tr>
                <tr>
                  <td>Language Immersion Program</td>
                  <td>$60 / per semester</td>
                </tr>
                <tr>
                  <td>Transportation (optional)</td>
                  <td>$80 / per month</td>
                </tr>
            </table>
          </div>

        </div>

    </div>
  )
}

export default Admission
