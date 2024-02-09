import React from 'react'
import './Load.css'
const Load = () => {
  // const el = React.useRef(null);
  // React.useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [ 'Wellcome to my portfolio'],
  //     typeSpeed: 50,
  //     smartBackspace: true,
  //     backDelay: 1000,
  //     loopCount: Infinity

  //   });
  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);
  return (
    
    <div className='loader'>
    {/* <h1 ref={el}></h1> */}
      <div className='position'>
        <div className='React'>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  
  )
}

export default Load
