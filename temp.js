<main>
        <Hero/>
        
        <Brands/>
        {/* Main intro */}
        <div className='min-h-screen py-10'>
            <div className = "flex flex-row justify-center justify-items-center">
            <h1 className='w-2/3 text-center text-5xl'>Unlock the value of your data and multiply your returns!
            </h1>
            </div>
          <div className="container py-10 mt-10">
            <div className="flex lg:flex-row flex-col justify-center justify-items-center gap-10">
              <div className=' basis-1/2 '>
                <img src = "/Photos/screens.png" />
                <h5 className='text-center text-red-500' ><AddCircleOutlineIcon style = {{paddingBottom:'3px'}}/>Enlarge</h5>
              </div>
              <div className='xl:basis-1/4 basis-1'>
                <p>Ariadne is considered to be the Google Analytics of the physical world. Ariadne helps you to analyze your visitors behavior, it consults you on strategies, and provides you with recommendations for the future.</p>
                <p className= 'mt-4 leading-10'>

      <span style = {{paddingRight: '25px'}}><CheckIcon /></span>Footfall (Total and by area)<br/>
      <span style = {{paddingRight: '25px'}}><CheckIcon /></span>Dwell Time(Total and by area)<br/>
      <span style = {{paddingRight: '25px'}}><CheckIcon /></span>Heatmap (2D and 3D)<br/>
      <span style = {{paddingRight: '25px'}}><CheckIcon /></span>Transitions between areas<br/>
      <span style = {{paddingRight: '25px'}}><CheckIcon /></span>ERP, BI, POS Integration

      </p>
              </div>
            </div>
          </div>

        </div>

        {/* Video section  */}

        <div className='container pt-10  min-h-screen bg-gradient-to-b from-slate-50  to-slate-200'>

           
            <div className = "flex flex-row justify-center justify-items-center px-4">
            <h1 className='w-3/4 text-center text-5xl mb-10'>See how our customers are succeeding with Ariadne</h1>
            </div>
          
              
          
          <div className='px-3 pt-8'>
          <VideoCarousel/>
          </div>
          
          
        </div>

        {/* Ariadne Platform  */}

        <div className='min-h-screen pt-10 '>
            <h1 className='text-center text-5xl my-8'>The Ariadne Platform</h1>
            
            <div className="container py-10 mt-6 ">
              <div className="flex xl:flex-row flex-col justify-evenly items-center">
                <div className="basis-1/3">
                  <h1 className='mb-5 text-3xl'>Ariadne Analytics</h1>
                  <p className='leading-normal'>Obtain people counting, heatmaps, loyalty rate and more!<br/><br/>
With Ariadne analytics, you can review your performance in real time.</p>
                </div>
                <div className="basis-1/3">
                  <video width="100%" src="/Videos/h1.mp4" autoPlay loop muted type = "videos/mp4"/>
                </div>
              </div>
            </div>
            <div className="container py-10 mt-6 bg-gradient-to-b from-slate-50  to-slate-200">
              <div className="flex xl:flex-row flex-col justify-evenly items-center">
                <div className="basis-1/3">
                  <h1 className='mb-5 text-3xl'>Ariadne Navigation</h1>
                  <p className='leading-normal'>Navigate your visitors and guests for an enhanced experience!<br/><br/>Present promotions in your map to engage and enhance your visitors satisfaction.</p>
                </div>
                <div className="basis-1/3">
                  <video src="/Videos/h2.mp4" autoPlay loop muted type = "videos/mp4"/>
                </div>
              </div>
            </div>
            <div className="container py-10 mt-6">
              <div className="flex xl:flex-row flex-col justify-evenly items-center">
                <div className="basis-1/3">
                  <h1 className='mb-5 text-3xl'>Ariadne Engagement</h1>
                  <p className='leading-normal'>Ariadne enables your visitors to opt-in to your loyalty program!<br/><br/>The opt-in feature enables you to push notifications to your visitors the right moment.</p>
                </div>
                <div className="basis-1/3">
                  <video src="/Videos/h3.mp4" autoPlay loop muted type = "videos/mp4"/>
                </div>
              </div>
            </div>
            <div className="container py-10 my-6 bg-gradient-to-b from-slate-50  to-slate-200">
              <div className="flex xl:flex-row flex-col justify-evenly items-center">
                <div className="basis-1/3">
                  <h1 className='mb-5 text-3xl'>Ariadne Mapping</h1>
                  <p className='leading-normal'>Transform your physical business into a digital landscape.<br/><br/>
                  By enabling you to map and localize your products, Ariadne increases your efficiency.</p>
                </div>
                <div className="basis-1/3">
                  <video src="/Videos/h4.mp4" autoPlay loop muted type = "videos/mp4"/>
                </div>
              </div>
            </div>


        </div>
        {/* Testimonials  */}

        <div className='min-h-screen pt-10  bg-gradient-to-b from-slate-50  to-slate-200'>
            <h1 className='text-center text-5xl my-8'>Trusted by industry leaders</h1>

              <Testimonials/>
            

        </div>
        {/* Products section  */}
        <div className='min-h-screen pt-10 '>
            <h1 className='text-center text-5xl my-8'>Get Started</h1>
           

            <div className = "flex flex-row justify-center justify-items-center px-4">
            <p className='w-2/3 text-center  text-xl '>Ariadne solution can be deployed on the premises just by plugging the devices in and requires no additional infrastructure.</p>
            </div>
          

            <div className="container mt-8 py-8">
              <div className="grid md:grid-cols-3 grid-cols-1 justify-evenly  justify-items-center">
                <div className="w-1/2">
                  <Image src="/Photos/floor.png" height={200} width={240}/>
                  <h1 className='my-3 text-xl'>Configuration</h1>
                  <p>Let our team design a project based on your floor plan and industry.</p>
                </div>
                <div className="w-1/2">
                <Image src="/Photos/device2.png" height={200} width={240} />
                  <h1 className='my-3 text-xl'>Installation</h1>
                  <p>Simply plug the devices in the predetermined sockets.</p>
                </div>
                <div className="w-1/2">
                <Image src="/Photos/screen.png" height={200} width={240}/>
                  <h1 className='my-3 text-xl'>The Dashboard</h1>
                  <p>Voila! Now you can make the most out of your existing traffic.</p>
                </div>
              </div>
            </div>

        </div>

          {/* Spotlight  */}

          <div className='min-h-screen pt-10 bg-gradient-to-b from-slate-50  to-slate-200'>
          <h1 className='text-center text-5xl mb-10'>Spotlight</h1>
          
         
          <div className='pt-8'>
          <HomeBlogPosts/>
          </div>
         
          
          </div>

          <div className='min-h-screen pt-10'>
          <h1 className=' text-center text-5xl mb-10'>Lets Talk</h1>
          <p className='text-center'>Schedule a free 30 minute demo call with an expert</p>
          
      <div className='min-h-screen' >
      <div className="calendly-inline-widget" id='calendly' data-url="https://calendly.com/georgios-ariadnemaps/30min" style={{minWidth:"320px", height:"200vh"}}  ></div>
      </div>

          
          </div>

          
        
        
      </main>
