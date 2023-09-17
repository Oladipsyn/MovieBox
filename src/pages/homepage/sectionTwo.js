import React,{useEffect, useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import heart from "../..//assets/icons/Heart.svg";
import dropdown from "../../assets/icons/Chevron right.svg";
import imdb from "../../assets/icons/imdb.png";
import tomato from "../../assets/icons/tomato.png";
import axios from "axios";

export const imagePath = 'https://image.tmdb.org/t/p/original';

const SectionTwo = () => {
  const navigate= useNavigate();
  const [movieList, setMovieList]= useState([]);
  const [loading, setLoading] =useState(false);
  const APP_ACCESS_TOKEN =process.env.REACT_APP_ACCESS_TOKEN
  const API_URL = process.env.API_URL
  const BASE_URL = process.env.REACT_APP_API_URL


  const fetchMovies =()=>{
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/top_rated',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: APP_ACCESS_TOKEN,
      }
    };

    setLoading(true)
    axios
    .request(options)
    .then(function (response) {
      setMovieList(response.data.results.splice(0, 10));
      console.log(response.data.results)
    })
    .catch(function (error) {
      toast('An error occured',  {position: toast.POSITION.TOP_RIGHT});
    })
    .finally(
      setLoading(false)
    )
    
  };
  
  useEffect(()=>{
    fetchMovies()
  },[])

 
  return (
    <div className="w-full flex flex-col mt-[65px] gap-[44px] mb-5">
      <ToastContainer />
      <div className="px-[30px] md:px-[60px] lg:px-[96px] flex justify-between">
        <p className="text-[36px]">Featured Movie</p>

        <div className="flex gap-[10px] w-28 cursor-pointer items-center">
          <p className="text-[#BE123C] text-[18px]">See more</p>
          <img className="h-[16px] w-[16px] mt-1" src={dropdown} />
        </div>
      </div>

      <div className="px-[5%]">
        <div className="grid grid-cols-2 justify-items-center md:grid-cols-3 xl:grid-cols-4 gap-[40px] md:gap-[80px] w-full">
          {movieList.map((item) => (
            <div data-testid='movie-card' key={item.id} onClick={() => navigate(`/Movies/${item.id}`)} className="relative cursor-pointer hover:opacity-80 hover:bg-[#cae6ed2a] w-[225px] md:w-[250px]">
              <div className="absolute top-2 flex w-full px-[16px] justify-between">
                <div className="bg-[#F3F4F680] rounded-[12px] w-[77px] h-[22px] font-bold flex justify-center items-center">
                  <p className="text-[12px] text-[#111827]">TV SERIES</p>
                </div>

                <div className="h-[20px] w-[20px] flex justify-center items-center rounded-[30px] bg-[#f3f4f6]">
                  <img src={heart} alt="" />
                </div>
              </div>
              <img data-testid='movie-poster' className="w-full h-[370px]" src={`${imagePath}${item.poster_path}`} alt='' />

              <div className="flex flex-col mt-[12px] gap-[16px]">
                <p data-testid='movie-release-date' className="text-[12px] text-[#9CA3AF]">{item.release_date}</p>
                <p data-testid='movie-title' className="font-semibold md:font-bold text-[18px] text-[#111827]">
                  {item.original_title}
                </p>

                <div className="flex items-center text-[12px] text-[#111827] justify-between">
                  <div className="flex gap-[10px] items-center">
                    <div className="w-[35px] h-[17px]">
                      <img src={imdb} alt="" />
                    </div>
                    <p className="">{item.vote_count}</p>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <div className="h-[16px] w-[16px]">
                      <img src={tomato} alt=""/>
                    </div>
                    <p className="">{item.popularity}</p>
                  </div>
                </div>

                <p className="text-[#9CA3AF] text-[12px]">Action, Drama, Horror</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
