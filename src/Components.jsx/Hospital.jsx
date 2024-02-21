import React from 'react'
import './Style.css'

function Hospital() {
    const data=[{
        img:"",
        main:"Cardiology",
        dec:"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet."
    },
    {
        img:"",
        main:"Pulmonary",
        dec:"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet." 
    },
    {
        img:"",
        main:"Neurology",
        dec:"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet."
    },
    {
        img:"",
        main:"Orthopedics",
        dec:"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet."
    },
    {
        img:"",
        main:"Dental Surgery",
        dec:"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet."
    },
    {
        img:"",
        main:"Laboratory",
        dec:"Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet."
    }
]
const  Doctors=[{
    img1:"https://th.bing.com/th?id=OIP.ed9BPk56R-ZuVSBARMMXoQHaLQ&w=202&h=308&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    Name:"Rahul",
    Dept:"Deportment Name"
   },
   {
    img1:"https://th.bing.com/th?id=OIP.GOBz0V_3pLM1bFdelFuTigHaKw&w=207&h=301&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    Name:"Vignesh",
    Dept:"Deportment Name"
    },
    {
        img1:"https://th.bing.com/th?id=OIP.s5tgIVG_lPnRHTX7WEw6owHaLG&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        Name:"Hari",
        Dept:"Deportment Name"
    },
    {
        img1:"https://th.bing.com/th?id=OIP.mR4cxQt6AXPvO7Xz5nPa2AHaHp&w=245&h=254&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        Name:"Yadav",
        Dept:"Deportment Name"
    }
]

  return (
    <div>
<header>
    <div className='logo'>
    <img src="https://th.bing.com/th?id=OIP.YKY8sKGTpEL81DAibyXOsgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=""  width="80px" height="80px"/>
    <h1>Klink</h1>
    </div>
    <ul className='nav'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Service</a></li>
        <li><select name="" id="">
            <option value="">Pages</option>
            <option value="">Feature</option>
            <option value="">Our Doctor</option>
            <option value="">Appoinment</option>
            <option value="">Testimonial</option>
            <option value="">404 Pages</option>
            </select></li>
        <li><a href="">Contacts</a></li>
        <li><button>Appoinment</button></li>
    </ul>
</header>
<section className='Hero'>
    <div className='Hero-left'>
        <h1>Good Health Is The<br></br> Root Of All<br></br> Heppiness </h1>
    <div className='container'>
        <div className='card1'>
        <h4>123</h4>
        <h3> Export Doctors</h3>
        </div>
        <div className='card1'>
        <h4>1234</h4>
        <h3> Medical Stuff</h3>
        </div>
        <div className='card1'>
        <h4>12345</h4>
        <h3>Total Patients</h3>
        </div>
            
    </div>
                                                                                   
    </div>
    <div className='Hero-right'>
            <img src="https://th.bing.com/th?id=OIP.RzXTfLVkmZ4vWGRQSLSpIQHaJm&w=219&h=284&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=""  width="100%"/>
            <h1 className='image-Heading'>
                Cordialagy
            </h1>
    </div>
</section>
<div className='Good'>
<di className="Good-left">
<img src="https://th.bing.com/th?id=OIP.LczXdrMkR1M0DA0Q6diejQHaIH&w=238&h=261&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" width='70%'/>
<img src="https://th.bing.com/th?id=OIP.SvOGftGxGzjaOXhTr9zkGAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" width='200px' height='200px' className='image2'/>

</di>
<div className='Good-right'>
<button>About US</button>
<h1>Why You Should Trust <br />Us? Get Know About Us!</h1>
<p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.<br/> Aliqu diam amet diam et eos.<br/> Clita erat ipsum et lorem et sit,<br /> sed stet lorem sit clita duo justo magna dolore erat amet

</p>
<p>Stet no et lorem dolor et diam, amet duo ut dolore vero eos.<br/> No stet est diam rebum amet diam ipsum.<br/> Clita clita labore, dolor duo nonumy clita sit at,<br /> sed sit sanctus dolor eos.</p>
<ul>
    <li>Quality health care</li>
    <li>Only Qualified Doctors</li>
    <li>Medical Research Professionals</li>
    <button className='Better'>Read More</button>

</ul>
</div>
<div className='Better1'>
   
</div>
</div>
<center>
<button>Services</button>
<h1>Health Care Solutions</h1>
</center>
<div className='item1'>

</div>


 <div className='cards'> 
    {
        data.map((item,index)=>(
           <div className='card-item'>
           <img src={item.img}/>
           <h5>{item.main}</h5>
           <p>{item.dec}</p>
           </div>
            
        ))
    }
</div>  

<div className='item2'>
<div className='item3'>
    <center>
<button>Feuture</button>
<h1>Why Choose Us</h1>
<p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum <br /> sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem <br />et sit, sed stet lorem sit clita duo  <br />justo erat amet</p>
<ul>
    <li>Experience</li>
    <li>Doctors</li>
    <li>Quality</li>
    <li>Services</li>
    <li>Positive</li>
    <li>Consultation</li>
    <li>24 Hours</li>
    <li>Support</li>

</ul>
</center>
</div>
<div className='item4'>
<img src="https://th.bing.com/th/id/OIP.ruiTqlg5WthnwftUzHElmQHaE7?rs=1&pid=ImgDetMain" alt="" />
</div>
</div>
<div className='item6'>
<center>
    <button>Doctors</button>
    <h1> OUR EXPERIENCE DOCTORS</h1>
    </center>
</div>

<div className='item5'>
    {
     
     Doctors.map((item,index)=>(
        <div className='doctor-card'>
         <img src={item.img1}/>
        <h4>{item.Name}</h4>
        <h4>{item.Dept}</h4>
        </div>
       

     ))
     
    
    }
   
</div>
    </div>
  )
}

export default Hospital