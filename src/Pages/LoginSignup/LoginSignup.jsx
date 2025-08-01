import React, { useState } from "react";
import './LoginSignup.css';

export const LoginSignup = () => {
   const [otp, setOtp] = useState(false);
   return (
      <>
         <div className="signup">
            <div className="sign-up-container">
               <h2>Login here!</h2>
               <br />
               <p>Get access to manage your product stock list</p>
               <br />
               <div className="privacy" style={{ fontSize: "11px" }}>
                  <p>By continuing, you agree to MES's <span style={{ color: "	#008cddff", cursor: "pointer" }}>Terms of Use</span> and <span style={{ color: "	#008cddff", cursor: "pointer" }}>Privacy Policy</span></p>
               </div>
               <br />
               <hr />
               {!otp ? (
                  <>
                     <div className="signup-input">
                        <input placeholder="Enter email" type="email" name="email" id="email" />
                        <button onClick={() => setOtp(true)}>Request OTP</button>
                        <br />
                     </div>

                  </>
               ) : (
                  <div className="signup-input">
                     <input type="text" name="otp" id="otp" placeholder="Enter OTP" />
                     <button>Verify OTP</button>
                  </div>
               )}
            </div>

         </div>
      </>
   )
}

// export default LoginSignup