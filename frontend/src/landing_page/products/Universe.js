import React from 'react'
function Universe() {
    return ( 
        <>
            <div className="container text-center mt-5">
                <div className="row">
                    <h1>The Zerodha Universe</h1>
                    <p className='mt-4' style={{marginBottom:"80px"}}>Extend your trading and investment experience even further with our partner platforms</p>
                    <div className="col-4">
                        <div className="row1">
                            <img style={{width:"200px"}} src="media/images/zerodhaFundhouse.png" alt="" />
                            <p className='mt-4 fs-8 text-muted ' style={{width:"300px", textAlign:"center", marginLeft:"50px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                        </div>
                        <div className="row2 mt-5">
                            <img style={{width:"200px"}} src="media/images/streakLogo.png" alt="" />
                            <p className='mt-4 fs-8 text-muted ' style={{width:"300px", textAlign:"center", marginLeft:"50px"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row1">
                            <img style={{width:"200px"}} src="media/images/sensibullLogo.svg" alt="" />
                            <p className='mt-4 fs-8 text-muted ' style={{width:"300px", textAlign:"center", marginLeft:"50px"}}> Option trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                        </div>
                        <div className="row2 mt-5">
                            <img style={{width:"200px"}} src="media/images/smallcaseLogo.png" alt="" />
                            <p className='mt-4 fs-8 text-muted ' style={{width:"300px", textAlign:"center", marginLeft:"50px"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row1">
                            <img style={{width:"150px"}} src="media/images/tijori.svg" alt="" />
                            <p className='mt-4 fs-8 text-muted ' style={{width:"300px", textAlign:"center", marginLeft:"50px"}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                        </div>
                        <div className="row2 mt-5">
                            <img style={{width:"150px"}} src="media/images/dittoLogo.png" alt="" />
                            <p className='mt-4 fs-8 text-muted ' style={{width:"300px", textAlign:"center", marginLeft:"50px"}}>Personalized advice on life and health insurence. No spam and no-mis selling</p>
                        </div>
                    </div>
                </div>
                <button className='p-2 btn btn-primary fs-5 mt-5' style={{width:"17%", margin:"0 auto"}}>Sign up for free</button>
            </div>
            
        </>

     );
}

export default Universe;