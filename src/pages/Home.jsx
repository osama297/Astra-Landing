import React from 'react'
import Label from '../components/Label'
import Button from '../components/Button'
import PlaceHolder from '../assets/PlaceHolder image.png'
import Relume from '../assets/Relume.svg'
import Webflow from '../assets/Webflow.svg'
import Analytics from '../assets/AiAnalytics.png' 
import MonthlyTracking from '../assets/Monthly Tracking Graphs.png'
import Dot from '../assets/Dot.svg'
import BGGrid from '../assets/BgGrid.svg'
import Powerful from '../assets/Pwerful features.png'

const Home = () => {
  return (
    <div className='flex flex-col items-center overflow-hidden'>

        <div className='Hero'>
                <img className='absolute -z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={BGGrid} alt="" />
            <div className='md:gap-10 gap-5 md:p-[120px] md:pt-[200px] pt-[150px] px-[16px] py-[32px] flex flex-col justify-center items-center'>
                <div>
                    <Label label='YOUR INTERNAL DEVELOPER PLATFORM' />
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='md:text-[58px] text-2xl text-center font-normal md:leading-[150%] leading-[150%] text-white '>
                        Transform Data into Actionable <br />Insights Instantly
                    </h1>
                    <p className='text-lg text-center text-gray-300 font-normal leading-[150%]'>
                        Leverage AI to generate real-time reports and make informed decisions faster than ever.
                    </p>
                </div>

                <div className='flex justify-center gap-4 mt-8 items-center'>
                    <Button label='Get Started' />
                    <button className='text-white hover:bg-nav-bg px-4 py-2 rounded-xl text-lg font-normal'>
                        Request a Demo
                    </button>
                </div>
            </div>
        </div>

        <div className='md:gap-10 gap-4 md:p-[120px] md:pt-[0px] px-[16px] py-[32px] flex flex-col justify-center items-center'>
            <img className='aspect-auto' src={PlaceHolder} alt="Placeholder image" />
            
            <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-lg mt-8 mb-10 font-thin text-center'>
                    AS USED BY WORLD'S MOST AVERAGE COMPANIES
                </p>
                <div className='logos'>
                    <div className='flex flex-wrap gap-12 w-full items-center justify-center'>
                        <img src={Relume} alt="" />
                        <img src={Webflow} alt="" />
                        <img src={Relume} alt="" />
                        <img src={Webflow} alt="" />
                        <img src={Relume} alt="" />
                        <img src={Webflow} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className='Features md:gap-10 gap-4 md:p-[120px] md:pt-[0px] px-[16px] py-[32px] flex flex-col justify-center items-center w-full'>
                
                    <div className='rounded-3xl xl:w-[1200px] bg-nav-bg md:p-[64px] p-[32px] flex md:flex-row flex-col items-center gap-[32px] xl:justify-between'>
                        <div>
                            <img src={Analytics} alt="" />
                        </div>
                        
                        <div className='xl:w-[500px] w-full'>
                            
                            <div className='flex flex-row mb-8'>
                                <Label label='AI' />
                            </div>

                            <div className='flex flex-col gap-4'>
                                <h2 className='font-medium md:text-2xl text-xl text-white'>
                                    AI-Driven Analytics
                                </h2>
                                <p className='text-lg text-gray-400 font-normal leading-[150%'>
                                    Gain deep insights into vendor performance with our advanced AI 
                                    algorithms. Understand trends, predict outcomes, and optimize your 
                                    vendor relationships with precision.                            
                                </p>
                            </div>

                            <div className='mt-8'>
                                <div className='flex flex-row items-start gap-4'>
                                    <img className='pt-6' src={Dot} alt="" />
                                    <p className='text-lg text-white font-normal my-2 leading-[150%] border-b-[1px] border-b-stroke pb-8'>
                                        <span className='font-bold'>Predictive Insights:</span> Anticipate future vendor performance and potential issues before they arise.                            
                                    </p>
                                </div>
                                
                                <div className='flex flex-row items-start gap-4'>
                                    <img className='pt-6' src={Dot} alt="" />
                                    <p className='text-lg text-white font-normal my-2 leading-[150%] border-b-[1px] border-b-stroke pb-8'>
                                        <span className='font-bold'>Customizable Analytics:</span> Tailor the AI analytics to focus on the metrics that matter most to your business.
                                    </p>
                                </div>
                            </div>
                            

                            
                            
                            
                        </div>
                    </div>
                    <div className='rounded-3xl xl:w-[1200px] bg-nav-bg md:p-[64px] p-[32px] flex md:flex-row-reverse flex-col items-start gap-[32px] xl:justify-between'>
                        <div>
                            <img src={MonthlyTracking} alt="" />
                        </div>
                        
                        <div className='xl:w-[500px] w-full'>
                            
                            <div className='flex flex-row mb-8'>
                                <Label label='Graphs' />
                            </div>

                            <div className='flex flex-col gap-4'>
                                <h2 className='font-medium md:text-2xl text-xl text-white'>
                                    Monthly Tracking Graphs
                                </h2>
                                <p className='text-lg text-gray-400 font-normal leading-[150%'>
                                    Stay informed with intuitive monthly graphs 
                                    that track vendor activities. 
                                    Easily monitor performance metrics and make data-driven 
                                    decisions to enhance efficiency and outcomes.                           
                                </p>
                            </div>

                            <div className='mt-8'>
                                <div className='flex flex-row items-start gap-4'>
                                    <img className='pt-6' src={Dot} alt="" />
                                    <p className='text-lg text-white font-normal my-2 leading-[150%] border-b-[1px] border-b-stroke pb-8'>
                                        <span className='font-bold'>Interactive Dashboard:</span> Dive deeper into data with interactive and user-friendly dashboards.                            
                                    </p>
                                </div>
                                <div className='flex flex-row items-start gap-4'>
                                    <img className='pt-6' src={Dot} alt="" />
                                    <p className='text-lg text-white font-normal my-2 leading-[150%] border-b-[1px] border-b-stroke pb-8'>
                                        <span className='font-bold'>Historical Comparison:</span> Compare current performance with historical data to identify trends and make informed decisions.
                                    </p>
                                </div>
                            </div>
                            
                            
                            
                        </div>
                    </div>
               
        </div>

        <div className='md:gap-10 gap-4 md:p-[120px] md:pt-[0px] px-[16px] py-[32px] flex flex-col justify-center items-center lg:w-[1440px]'>
            <div className='flex flex-col items-center gap-8'>
                <img className='aspect-auto' src={Powerful} alt="" />
                <div className='flex lg:flex-row flex-wrap gap-4'>
                    <div className='rounded-2xl lg:w-[330px] w-full bg-nav-bg flex flex-col gap-2 p-4'>
                        <h2 className='text-white text-xl font-medium'>
                            Comprehensive Statistics
                        </h2>
                        <p className='text-base font-thin text-gray-300 leading-[150%]'>
                            Explore detailed historical statistics to identify long-term trends and patterns.
                        </p>
                    </div>
                    <div className='rounded-2xl lg:w-[330px] w-full bg-nav-bg flex flex-col gap-2 p-4'>
                        <h2 className='text-white text-xl font-medium'>
                            Comprehensive Statistics
                        </h2>
                        <p className='text-base font-thin text-gray-300 leading-[150%]'>
                            Explore detailed historical statistics to identify long-term trends and patterns.
                        </p>
                    </div>
                    <div className='rounded-2xl lg:w-[330px] w-full bg-nav-bg flex flex-col gap-2 p-4'>
                        <h2 className='text-white text-xl font-medium'>
                            Comprehensive Statistics
                        </h2>
                        <p className='text-base font-thin text-gray-300 leading-[150%]'>
                            Explore detailed historical statistics to identify long-term trends and patterns.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
        
        
    </div>
  )
}

export default Home