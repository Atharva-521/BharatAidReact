import React, { useEffect, useState } from 'react'
import { ProgressionBar } from './ProgressionBar';
import { InputAlert } from './InputAlert';
import { predictionRoutes } from '../../../Services/apiRoutes';
import {apiConnector} from '../../../Services/apiConnector';
import { useNavigate } from 'react-router-dom';
import { PredMsg } from './Utils/PredMsg';
import { AvgMsg } from './Utils/AvgMsg';
import  HistogramWithLinePlot  from './Utils/HistogramWithLinePlot';

const inputAlert = (type, value) => {
  let status = "";
  if(type === 'systolic'){
      if(value > 130 && value <=139){
          status = 'High Stage 1';
      }else if(value >= 140){
          status = 'High Stage 2';
      }
  }

  if(type === 'diastolic'){
    if(value > 85 && value <=89){
      status = 'High Stage 1';
    }else if(value >= 90){
      status = 'High Stage 2';
    }
  }
return (
  <div>
      <p className='text-red-500'>your {type} is {status}</p>
  </div>
)
}


export const DashboardInfo = () => {

  const navigate = useNavigate();
  let predictions = '';

  

  const [allData, setAllData] = useState({
    systolic: null,
    diastolic: null,
    fasting: null,
    postmeal: null,
  })

  const [graph, setGraph] = useState({
    s_status: '',
    d_status: '',
    s_avg: 0,
    d_avg: 0
  });

  const [data, setData] = useState({
    systolic: null,
    diastolic: null
  })

  const [levels, setlevels] = useState({
    s_status : 0,
    d_status: 0,
    s_avg: 0,
    d_avg: 0
  });



  const token = localStorage.getItem('token') ? localStorage.getItem('token') : ( null ) ;
  console.log(token);

 if(!token){
  alert('User Not Logged in');
  navigate('/login');
 }

  useEffect(() => {
    setAllData((prev) => ({
      ...prev,
      token
    }))
  },[token])

  const fetchData = async() => {
    predictions = await apiConnector('POST', predictionRoutes.bloodPressurePrediction, {token});
    setlevels(await apiConnector('POST', predictionRoutes.getLevels, {token}))
    console.log("data",data)
    console.log("here",predictions);
   
    if(predictions != ''){
      setGraph((prev) => ({
        s_status: predictions.s_status,
        d_status: predictions.d_status,
        s_avg: predictions.s_avg.toFixed(0),
        d_avg: predictions.d_avg.toFixed(0)
      }))
    }
    
    console.log('graph',graph)
  }

  useEffect(() => {
    fetchData();
  },[predictions])

  if(token == null){
    alert("User not logged in please login");
    navigate('/login')
  }



  const changeHandler = (e) => {
    setAllData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

    console.log(allData);
  }

  const percentage = 90;

  const submitHandler = async(e) => {
    e.preventDefault( );
    try{
      const response = await apiConnector('PUT', predictionRoutes.addBloodPressure, allData);
      console.log(response)
      if(response.success === true){
        alert("Successfully added your data!");
      }else{
        alert(response.message);
      }
    }catch(error){
      console.log(error.message);
    }
    
  }

  
  return (
    <div className='pt-14 flex flex-col gap-5' >
        <p className='text-xl'>Hey there,<br /> Enter your today's blood pressure and sugar levels</p>

        <form className='flex flex-col w-[60%] gap-8' onSubmit={(e) => submitHandler(e)}>
          
          <div className='flex flex-col'>
            {/* bp */}
            <div className='flex justify-between'>
              <div className='w-[50%]'>
                  <p className='text-2xl font-extrabold'>Systolic</p>
                  <input type='text' name='systolic' className='bg-bgwhitelight w-[70%] p-2 rounded-xl' onChange={(e) => changeHandler(e)} />
                  {
                    allData.systolic > 130 ? inputAlert('systolic', allData.systolic) : (null)
                  }
                  
              </div>

              <div className='w-[50%]'>
                <p className='text-2xl font-extrabold'>Diastolic</p>
                <input type='text' name='diastolic' className='bg-bgwhitelight w-[70%] p-2 rounded-xl' onChange={(e) => changeHandler(e)} />
                {
                    allData.diastolic > 85 ? inputAlert('diastolic', allData.diastolic) : (null)
                  }
              </div>
            </div>

              {/* sugar */}
            <div className='flex justify-between'>
            <div className='w-[50%]'>
                <p className='text-2xl font-extrabold'>Fasting</p>
                <input type='text' name='fasting' className='bg-bgwhitelight w-[70%] p-2 rounded-xl ' onChange={(e) => changeHandler(e)} />
                {/* TO-Do : alert */}
              </div>

              <div className='w-[50%]'>
                <p className='text-2xl font-extrabold'>Post Meal</p>
                <input type='text' name='postmeal' className='bg-bgwhitelight w-[70%] p-2 rounded-xl ' onChange={(e) => changeHandler(e)} />
                {/* To-Do : alert */}
              </div>
            </div>
          </div>
          <div className='ml-[33%] bg-sagegreen px-10 py-1 w-[20%] rounded-lg'>
            <input type='submit' value="Submit" className='text-2xl text-white cursor-pointer' />
          </div>
        </form>

        <div className='w-full h-[0.1rem] bg-black'>
        </div>

        {/* progression bar and alerts */}
        <div className='flex flex-col gap-7'>
          {/* avg */}
          <div className='w-full flex flex-col gap-11'>

            <div className='flex gap-16'>
              {/* systolic */}
              <div className='flex w-[50%] gap-4 '>
                <ProgressionBar percentage={graph.s_avg} max={140} low={90} normal={129} high={139} />
                <div className='bg-bgwhitelight h-40 rounded-2xl py-8 px-7  text-2xl font-bold'>
                  <AvgMsg cond={'blood pressure'} type={'systolic'}  value={graph.s_avg} />
                </div>
              </div>

              {/* diastolic */}
              <div className='flex w-[50%] gap-4 '>
                <ProgressionBar percentage={graph.d_avg} max={90} low={60} normal={84}  high={89} />
                <div className='bg-bgwhitelight h-40 rounded-2xl py-8 px-7 text-2xl font-bold'>
                <AvgMsg cond={'blood pressure'} type={'diastolic'}  value={graph.d_avg} />
                </div>
              </div>
            </div>

            <div className='flex gap-16'>
              {/* fasting */}
              <div className='flex w-[50%] gap-4 '>
                <ProgressionBar percentage={percentage} />
                <div className='bg-bgwhitelight h-40 rounded-2xl py-8 px-7 text-2xl font-bold'>
                  Keep it up you have good average systolic blood pressure
                </div>
              </div>

              {/* post meal */}
              <div className='flex w-[50%] gap-4 '>
                <ProgressionBar percentage={percentage} />
                <div className='bg-bgwhitelight h-40 rounded-2xl py-8 px-7 text-2xl font-bold'>
                  Keep it up you have good average systolic blood pressure
                </div>
              </div>
            </div>

          </div>
          
          {/* alerts */}
          <div>
            <h2 className='text-3xl font-extrabold ml-10'>Alert!</h2>
            <div className= { graph.s_status == 2 || graph.d_status == 2 ? (' bg-orange-400 h-40 rounded-2xl p-14 text-2xl font-bold') : (graph.s_status == 3 || graph.d_status == 3 ? (' bg-red-400 h-40 rounded-2xl p-14 text-2xl font-bold') : (('bg-bgwhitelight h-40 rounded-2xl p-14 text-2xl font-bold')) )}>
              <PredMsg s_status={graph.s_status} />
            </div>
          </div>
        </div>

        <div className='w-full h-[0.1rem] bg-black'>
        </div>

        {/* graphs */}
        <div>
          <h2>Trends in your blood pressure & sugar</h2>
          <div className='flex justify-center flex-wrap gap-10'>
            <div className=' w-[45%] h-80 bg-bgwhitelight'>
              {levels ? <HistogramWithLinePlot data={levels?.BP?.systolic} /> : <p>loading</p>} 
            </div>
            <div className=' w-[45%] h-80 bg-bgwhitelight'>
              {levels ? <HistogramWithLinePlot data={levels?.BP?.diastolic} /> : <p>loading</p>} 
            </div>
            <div className=' w-[45%] h-80 bg-bgwhitelight'>

            </div>
            <div className=' w-[45%] h-80 bg-bgwhitelight'>

            </div>
          </div>
        </div>
        
    </div>
  )
}
