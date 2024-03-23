const Profite = ({profits}) => {	
	return(
		<>
		<section class="home sec-pd profite_background">
	      	<div class="container" >
		      <div class="sec-title text-center">
		       
		        <h1 class="display-5  mb-2  text-center">
		              <span class="fw-800 text-white">Profits</span>
		          </h1>
		        <span class="sec-bottom-hr sethrline"></span>
		      </div>

	      
	          <div class="row mt-5">

			  {profits.map((item) => (
	            <div class="col-md-3 col-6 mob-mb-4" key={item.id}>
	                <div class="flip-box">
	                  <div class="flip-box-inner">
	                    <div class="flip-box-front">
	                      <a href="mutual-fund/" class="home-banner-icon-box border position-relative overflow-hidden d-block w-100 rounded shadow-sm bg-white pd-20-15">
	                        <div class="text-center">
	                          <img src="https://creditsaving.in/assets/images/icons/investing.png" width="64" height="64" alt="icon" class="mx-auto d-block"/>
	                          <h5 class="text-dark mt-3">Year<br/>{item.year}</h5>
	                        </div>
	                      </a>
	                    </div>
	                    <div class="flip-box-back">
	                      <a href="mutual-fund/" class="home-banner-icon-box position-relative overflow-hidden d-block w-100 rounded shadow-sm bg-blue pd-20-15">
	                        <div class="text-center">
	                          <img src="https://creditsaving.in/assets/images/icons/investing-white.png" width="64" height="64" alt="icon" class="mx-auto d-block"/>
	                          <h5 class="text-light mt-3">Profit<br/>₹ {item.amount}</h5>
	                        </div>
	                      </a>
	                    </div>
	                  </div>
	                </div>
	            </div>
	            ))}
	             
	      	  </div>
	    	</div>
  		</section>
		</>
	);
}

export default Profite;