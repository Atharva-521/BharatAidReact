import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {setLatitude, setLongitude, setLoading} from '../../../Slices/location';
import { CiStar } from "react-icons/ci";
import { TiLocation } from "react-icons/ti";
import { GiPathDistance } from "react-icons/gi";
import { redirectToGoogleMap } from '../../../Services/googlemap';
import avatar from '../../../Services/Avatar';


const List = ({hospital}) => {

    const [data, setData] = useState([]);
    const {latitude,longitude,loading} = useSelector((state) => state.location);
    const dispatch = useDispatch();


    const getLocation = () => {
        if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(showPosition);
          }
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    const showPosition = (position) => {
      dispatch(setLatitude(position.coords.latitude));
      dispatch(setLongitude(position.coords.longitude));
      console.log('Latitude:',latitude," longitude: ",longitude);
    }


    const fetchData = async(latitude,longitude) => {
        try{
          dispatch(setLoading(true));
          const response = await hospital ? fetch(`https://us1.locationiq.com/v1/nearby.php?key=pk.27c650e96ef3a6838d885bb260faa057&lat=${latitude}&lon=${longitude}&radius=1000&tag=hospital`) : fetch('');

          const data = await (await response).json();
          console.log("Data is: ",data)
          setData(data);
          dispatch(setLoading(false));
        }catch(error){
          console.log("Error Fetching Hospital Api")
        }
    }

    useEffect(() => {
      getLocation();
    },[])

    useEffect(() => {
      if (latitude && longitude) {
          fetchData(latitude, longitude);
      }
  }, [latitude, longitude, hospital]);
  return (
    <div >
      <h2 className='text-4xl font-[600] mt-8'>Hospitals</h2>
      <div className='flex flex-row justify-between mt-8'>
        {
          data.length >= 3 ? (
            data.slice(0,3).map((element, index) => {
            return(
              <div className='flex flex-col w-64'>
                <div className='h-64 w-64 bg-white opacity-75 flex justify-center items-center'>
                  <img src={avatar()}></img>
                </div>
              
                <div className='flex flex-col gap-1'>
                  <h2 className='text-3xl'>{element.address.name.length <= 31 ? element.address.name : element.address.name.slice(0, 31) + '...' }</h2>
                  {/* rating */}
                  <div className='flex items-center gap-1'>
                    <div className='bg-rankgreen w-6 h-4 font-[500] flex justify-center items-center rounded-sm text-[0.8rem]'>
                      5.0
                    </div>
                    <div className='flex'>
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    </div>
                  </div>

                {/* location */}
                  <div className='flex items-center gap-1'>
                    <TiLocation />
                    <p>{element.address.road + ',' + element.address.city}</p>
                  </div>

                  {/* distance */}
                  <div className='flex items-center gap-1'>
                    <GiPathDistance />
                    <p>{element.distance + 'm'}</p>
                  </div>

                  {/* direction */}
                  <div className='w-full bg-rankgreendark text-center font-[600] rounded-md py-1 hover:cursor-pointer' onClick={() => redirectToGoogleMap(element.lat, element.lon)}>
                    Get Directions
                </div>

              </div>
            </div>)
            }
            )): (<div>Hello</div>)
        }
      </div>
      
    </div>
  );
};

export default List
