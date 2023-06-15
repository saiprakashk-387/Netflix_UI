import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Analytics.css'
import DemoRingProgress from './Ringchart'
import DemoLine from './MultilineChart'
import DemoDualAxes from './Linechart'
import DemoTinyLine from './Tinyline'
const NewAnalytics = () => {
    return (
        <div className='main'>
            <div className='sidebar'>
                <div className='sidebar-in'>
                    <div className='sidebar-text'>
                        <h1  >GOBIBLA</h1>
                    </div>
                    <div className='sidebar-img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU" alt="" />
                        <div style={{ width: "50%" }}>
                            <h1>Sai Prakash</h1>
                            <h1>Admin</h1>
                        </div>
                    </div>
                    <div className='sidebar-list'>
                        <h1 >General</h1>
                        <li> App   </li>
                        <li> E-Commerce  </li>
                        <li> Analytics  </li>
                        <li> Banking  </li>
                        <li> Booking      </li>
                    </div>
                    <div className='sidebar-list'>
                        <h1 >Management</h1>
                        <li> App   </li>
                        <li> E-Commerce  </li>
                        <li> Analytics  </li>
                        <li> Banking  </li>
                        <li> Booking      </li>
                    </div>
                    <div className='sidebar-list'>
                        <h1 >Users</h1>
                        <li> App   </li>
                        <li> E-Commerce  </li>
                        <li> Analytics  </li>
                        <li> Banking  </li>
                        <li> Booking      </li>
                    </div>

                </div>

            </div>
            <div className='main-conytent'>
                <div className='head'>
                    <div className='head1'>
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className='head2'>
                        <li>ddshgkv</li>
                        <li>jhbvj</li>
                        <li>vjhfbvf</li>
                    </div>
                </div>
                <div className='main-charts'>
                    <div className='chartsm1'>
                        <div className='chartsm1s'>
                            <h6>product Sold</h6>
                            <h6>product Sold</h6>
                            <h6>product Sold</h6>
                        </div>
                        <div className='chartsm1ss'>
                            <DemoTinyLine />
                        </div>
                    </div>
                    <div className='chartsm1'>
                        <div className='chartsm1s'>
                            <h6>Total balance</h6>
                            <h6>Total balance</h6>
                            <h6>Total balance</h6>

                        </div>
                        <div className='chartsm1ss'>
                            <DemoTinyLine />
                        </div>
                    </div>
                    <div className='chartsm1'>
                        <div className='chartsm1s'>
                            <h6>Sales profit</h6>
                            <h6>Sales profit</h6>
                            <h6>Sales profit</h6>
                        </div>
                        <div className='chartsm1ss'>
                            <DemoTinyLine />
                        </div>
                    </div>
                </div>
                <div className='main-card'>
                    <div className='card1'>
                        <h2 style={{ color: "black" }}>Sale By Gender</h2>
                        <DemoRingProgress />
                        {/* <hr /> */}
                        {/* <h3 style={{ color: "black" }}>Mens</h3> */}
                    </div>
                    <div className='card2'>
                    <h2 style={{ color: "black" }}>yearly Sales</h2>
                        <DemoLine />
                    </div>
                </div>
                <div className='main-indicators'>
                    <div className='indicators1'>
                        <DemoDualAxes />
                    </div>
                    <div className='indicators2'>
                        <DemoDualAxes />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewAnalytics