
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <head>
        <title>Attendance Dashboard | By Code Info</title>
      </head>
      <body>
        <div className='container'>
          <nav>
            <ul>
              <li><a href='#' className='logo'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJ-Qh4ynpRRSaheLuvFvsS_mQxLSbI5Yh0A&usqp=CAU' alt='' />
                <span className='nav-item'>Admin</span>
              </a>
              </li>
              <li><a href='#'>
                <i class="fas fa-menorah"></i>
                <span className='nav-item'> Dashboard</span>
              </a></li>
              <li><a href='#'>
                <i class="fas fa-comment"></i>
                <span className='nav-item'> Message</span>
              </a></li>
              <li><a href='#'>
                <i class="fas fa-database"></i>
                <span className='nav-item'> Report</span>
              </a></li>
              <li><a href='#'>
                <i class="fas fa-chart-bar"></i>
                <span className='nav-item'>Attendance</span>
              </a></li>
              <li><a href='#'>
                <i class="fas fa-cog"></i>
                <span className='nav-item'> Setting</span>
              </a></li>

              <li><a href='#' className='logout'>
                <i class="fas fa-sign-out-alt"></i>
                <span className='nav-item'> Log out</span>
              </a></li>
            </ul>
          </nav>


          <section className='main'>
            <div className='main-top'>
              <h1>Attendance</h1>
              <i className='fas fa-user-cog'></i>
            </div>
            <div className='users'>
              <div className='card'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUOfpis-6LPzE7ICUB5wwhqktW4g2yyy9Dw&usqp=CAU&reload=on' />
                <h4>JERRY</h4>
                <p>RUST</p>
                <div className='per'>
                  <table>
                    <tr>
                      <td> <span>100%</span></td>
                      <td> <span>100%</span></td>
                    </tr>
                    <tr>
                      <td>Month</td>
                      <td>Year</td>
                    </tr>
                  </table>
                </div>
                <button>Profile</button>
              </div>
              <div className='card'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUOfpis-6LPzE7ICUB5wwhqktW4g2yyy9Dw&usqp=CAU&reload=on' />
                <h4>chima justice</h4>
                <p>Programmer</p>
                <div className='per'>
                  <table>
                    <tr>
                      <td> <span>82%</span></td>
                      <td> <span>85%</span></td>
                    </tr>
                    <tr>
                      <td>Month</td>
                      <td>Year</td>
                    </tr>
                  </table>
                </div>
                <button>Profile</button>
              </div>
              <div className='card'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUOfpis-6LPzE7ICUB5wwhqktW4g2yyy9Dw&usqp=CAU&reload=on' />
                <h4>Badan John</h4>
                <p>tester</p>
                <div className='per'>
                  <table>
                    <tr>
                      <td> <span>94%</span></td>
                      <td> <span>92%</span></td>
                    </tr>
                    <tr>
                      <td>Month</td>
                      <td>Year</td>
                    </tr>
                  </table>
                </div>
                <button>Profile</button>
              </div>
              <div className='card'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUOfpis-6LPzE7ICUB5wwhqktW4g2yyy9Dw&usqp=CAU&reload=on' />
                <h4>Chima</h4>
                <p>designer</p>
                <div className='per'>
                  <table>
                    <tr>
                      <td> <span>85%</span></td>
                      <td> <span>87%</span></td>
                    </tr>
                    <tr>
                      <td>Month</td>
                      <td>Year</td>
                    </tr>
                  </table>
                </div>
                <button>Profile</button>
              </div>
            </div>

            <section className='attendance'>
              <div className='attendance-list'>
                <h1>Attendance List</h1>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Activity</th>
                      <th>Date</th>
                      <th>Time In Class</th>
                      <th>Leaving Time</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>01</td>
                    <td>Jerry</td>
                    <td>Rust</td>
                    <td>03-24-22</td>
                    <td>8:00AM</td>
                    <td>3:00PM</td>
                    <td><button>View</button></td>
                  </tr>
                  <tr className='active'>
                    <td>02</td>
                    <td>Chima Justice</td>
                    <td>Coding</td>
                    <td>03-24-22</td>
                    <td>8:30AM</td>
                    <td>4:00PM</td>
                    <td><button>View</button></td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Badan John</td>
                    <td>testing</td>
                    <td>03-24-22</td>
                    <td>10:30AM</td>
                    <td>3:00PM</td>
                    <td><button>View</button></td>
                  </tr>
                </table>
              </div>
            </section>
          </section>
        </div>
      </body>
    </div>
  );
}

export default App;















