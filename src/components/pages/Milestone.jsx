import Loader from '../../assets/images/loader.gif'

const Milestone = ({milestoneData,baseUrl}) => {
    return(
        <>
        <section className="why-choose-us sec-pd bg-img">
    <div className="container">
      <div className="sec-title text-center">
        <h1 className="display-5  mb-5  text-center section-title">
          <span className="fw-800">Milestones</span>
      </h1>
        <span className="sec-bottom-hr"></span>
      </div>
      <div className="container">
      <div className="row mb-5">
            {milestoneData.map((item) => ( 
                <div className="col-lg-3 col-6" key={item.id}>
                    <div className="trending-product-box bg-white shadow border pd-30-15 rounded position-relative text-center set-milestone mb-3">
                        <img src={`${baseUrl}/${item.image}`} width="200" height="250" alt="icon" className="img-fluid mx-auto d-block responsive" />
                        <h6 className="mt-3 mb-2">{item.name}</h6>

                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  </section>
        </>
    );
}

export default Milestone;