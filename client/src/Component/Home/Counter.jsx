import React from 'react'

function Counter() {
  return (
    <>
     {/*  Start about us counter */}
  <section id="mu-abtus-counter">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-abtus-counter-area">
            <div className="row">
              {/*  Start counter item  */}
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="mu-abtus-counter-single">
                  <span className="fa fa-book"></span>
                  <h4 className="counter">568</h4>
                  <p>Subjects</p>
                </div>
              </div>
              {/*  End counter item  */}
              {/* Start counter item  */}
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="mu-abtus-counter-single">
                  <span className="fa fa-users"></span>
                  <h4 className="counter">3500</h4>
                  <p>Students</p>
                </div>
              </div>
              {/*  End counter item  */}
              {/* Start counter item  */}
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="mu-abtus-counter-single">
                  <span className="fa fa-flask"></span>
                  <h4 className="counter">99</h4>
                  <p>BEST SCORE IN CPCT</p>
                </div>
              </div>
              {/*  End counter item  */}
              {/*  Start counter item  */}
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="mu-abtus-counter-single no-border">
                  <span className="fa fa-user-secret"></span>
                  <h4 className="counter">250</h4>
                  <p>selected student in govt jobs</p>
                </div>
              </div>
              {/* End counter item */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  End about us counter */}
    
    </>
  )
}

export default Counter
