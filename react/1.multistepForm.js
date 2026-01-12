import React from 'react';
import { useState, useEffect } from 'react'

function App() {
  
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    address:'',
    phone:'',
    age:''
  });
  
   const nextStep = () => setStep((prev)=> prev +1);
   const prevStep = () =>  setStep((prev)=> prev -1);
  
  const renderSteps = () => {
      
      switch (step) {
        case 1:
          return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep}  />
          break;
        case 2:
          return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          break;
        case 3:
          return <Step3 formData={formData} setFormData={setFormData} prevStep={prevStep}  />
          break;
        default: return null
      }
  }  
  

  return (
    <div> Mutli Step Form 
    {JSON.stringify(formData)}
     {renderSteps()}
    </div>
  )
}

export default App


export const Step1 = ({formData, setFormData, nextStep}) => {
  

  return (
      <div> 
      <input
        type="text"
        value={formData.name}
        onChange={(e)=>setFormData({...formData, name:e.target.value})}
      />
    
      <button onClick={nextStep}>Next</button>
      </div>
    )
}


export const Step2 = ({formData, setFormData, prevStep, nextStep}) => {
  
  return (
      <div>
      <input
        type="text"
        value={formData.address}
        onChange={(e)=>setFormData({...formData, address:e.target.value})}
      />
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
      </div>
    )
}

export const Step3 = ({formData, setFormData, prevStep}) => {
  
  const handleSubmit   = () => {
    alert(JSON.stringify(formData));
  }
  return (
      <div>
      <input
        type="number"
        value={formData.age}
        onChange={(e)=>setFormData({...formData, age:e.target.value})}
      />
      <input
        type="number"
        value={formData.phone}
        onChange={(e)=>setFormData({...formData, phone:e.target.value})}
      />
      <button onClick={prevStep}>Prev</button>
      <button onClick={handleSubmit}>submit</button>
      </div>
    )
}

