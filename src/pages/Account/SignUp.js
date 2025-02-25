// import React, { useState } from "react";
// import { BsCheckCircleFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { logoIcon } from "../../assets/images";

// const SignUp = () => {
//   // ============= Initial State Start here =============
//   const [clientName, setClientName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [country, setCountry] = useState("");
//   const [zip, setZip] = useState("");
//   const [checked, setChecked] = useState(false);
//   // ============= Initial State End here ===============
//   // ============= Error Msg Start here =================
//   const [errClientName, setErrClientName] = useState("");
//   const [errEmail, setErrEmail] = useState("");
//   const [errPhone, setErrPhone] = useState("");
//   const [errPassword, setErrPassword] = useState("");
//   const [errAddress, setErrAddress] = useState("");
//   const [errCity, setErrCity] = useState("");
//   const [errCountry, setErrCountry] = useState("");
//   const [errZip, setErrZip] = useState("");
//   // ============= Error Msg End here ===================
//   const [successMsg, setSuccessMsg] = useState("");
//   // ============= Event Handler Start here =============
//   const handleName = (e) => {
//     setClientName(e.target.value);
//     setErrClientName("");
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setErrEmail("");
//   };
//   const handlePhone = (e) => {
//     setPhone(e.target.value);
//     setErrPhone("");
//   };
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setErrPassword("");
//   };
//   const handleAddress = (e) => {
//     setAddress(e.target.value);
//     setErrAddress("");
//   };
//   const handleCity = (e) => {
//     setCity(e.target.value);
//     setErrCity("");
//   };
//   const handleCountry = (e) => {
//     setCountry(e.target.value);
//     setErrCountry("");
//   };
//   const handleZip = (e) => {
//     setZip(e.target.value);
//     setErrZip("");
//   };
//   // ============= Event Handler End here ===============
//   // ================= Email Validation start here =============
//   const EmailValidation = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
//   };
//   // ================= Email Validation End here ===============

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     if (checked) {
//       if (!clientName) {
//         setErrClientName("Enter your name");
//       }
//       if (!email) {
//         setErrEmail("Enter your email");
//       } else {
//         if (!EmailValidation(email)) {
//           setErrEmail("Enter a Valid email");
//         }
//       }
//       if (!phone) {
//         setErrPhone("Enter your phone number");
//       }
//       if (!password) {
//         setErrPassword("Create a password");
//       } else {
//         if (password.length < 6) {
//           setErrPassword("Passwords must be at least 6 characters");
//         }
//       }
//       if (!address) {
//         setErrAddress("Enter your address");
//       }
//       if (!city) {
//         setErrCity("Enter your city name");
//       }
//       if (!country) {
//         setErrCountry("Enter the country you are residing");
//       }
//       if (!zip) {
//         setErrZip("Enter the zip code of your area");
//       }
//       // ============== Getting the value ==============
//       if (
//         clientName &&
//         email &&
//         EmailValidation(email) &&
//         password &&
//         password.length >= 6 &&
//         address &&
//         city &&
//         country &&
//         zip
//       ) {
//         setSuccessMsg(
//           `Hello dear ${clientName}, Welcome you to OREBI Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
//         );
//         setClientName("");
//         setEmail("");
//         setPhone("");
//         setPassword("");
//         setAddress("");
//         setCity("");
//         setCountry("");
//         setZip("");
//       }
//     }
//   };
//   return (
//     <div className="w-full h-screen flex items-center justify-start">
//       <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
//         <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
//           <Link to="/">
//             <img src={logoIcon} alt="logoImg" className="w-28" />
//           </Link>
//           <div className="flex flex-col gap-1 -mt-1">
//             <h1 className="font-titleFont text-xl font-medium">
//               Get started for free
//             </h1>
//             <p className="text-base">Create your account to access more</p>
//           </div>
//           <div className="w-[300px] flex items-start gap-3">
//             <span className="text-green-500 mt-1">
//               <BsCheckCircleFill />
//             </span>
//             <p className="text-base text-gray-300">
//               <span className="text-white font-semibold font-titleFont">
//                 Get started fast with eMarket
//               </span>
//               <br />
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
//               nisi dolor recusandae consectetur!
//             </p>
//           </div>
//           <div className="w-[300px] flex items-start gap-3">
//             <span className="text-green-500 mt-1">
//               <BsCheckCircleFill />
//             </span>
//             <p className="text-base text-gray-300">
//               <span className="text-white font-semibold font-titleFont">
//                 Access all eMarket services
//               </span>
//               <br />
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
//               nisi dolor recusandae consectetur!
//             </p>
//           </div>
//           <div className="w-[300px] flex items-start gap-3">
//             <span className="text-green-500 mt-1">
//               <BsCheckCircleFill />
//             </span>
//             <p className="text-base text-gray-300">
//               <span className="text-white font-semibold font-titleFont">
//                 Trusted by online Shoppers
//               </span>
//               <br />
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
//               nisi dolor recusandae consectetur!
//             </p>
//           </div>
//           <div className="flex items-center justify-between mt-10">
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               © eMarket
//             </p>
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               Terms
//             </p>
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               Privacy
//             </p>
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               Security
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
//         {successMsg ? (
//           <div className="w-[500px]">
//             <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
//               {successMsg}
//             </p>
//             <Link to="/signin">
//               <button
//                 className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
//             tracking-wide hover:bg-black hover:text-white duration-300"
//               >
//                 Sign in
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
//             <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
//               <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
//                 Create your account
//               </h1>
//               <div className="flex flex-col gap-3">
//                 {/* client name */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Full Name
//                   </p>
//                   <input
//                     onChange={handleName}
//                     value={clientName}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="eg. martins"
//                   />
//                   {errClientName && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errClientName}
//                     </p>
//                   )}
//                 </div>
//                 {/* Email */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Work Email
//                   </p>
//                   <input
//                     onChange={handleEmail}
//                     value={email}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="email"
//                     placeholder="martins@gmail.com"
//                   />
//                   {errEmail && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errEmail}
//                     </p>
//                   )}
//                 </div>
//                 {/* Phone Number */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Phone Number
//                   </p>
//                   <input
//                     onChange={handlePhone}
//                     value={phone}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="081-555-22-444"
//                   />
//                   {errPhone && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errPhone}
//                     </p>
//                   )}
//                 </div>
//                 {/* Password */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Password
//                   </p>
//                   <input
//                     onChange={handlePassword}
//                     value={password}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="password"
//                     placeholder="Create password"
//                   />
//                   {errPassword && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errPassword}
//                     </p>
//                   )}
//                 </div>
//                 {/* Address */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Address
//                   </p>
//                   <input
//                     onChange={handleAddress}
//                     value={address}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="road-001, house-115, example area"
//                   />
//                   {errAddress && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errAddress}
//                     </p>
//                   )}
//                 </div>
//                 {/* City */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     City
//                   </p>
//                   <input
//                     onChange={handleCity}
//                     value={city}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="Your city"
//                   />
//                   {errCity && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errCity}
//                     </p>
//                   )}
//                 </div>
//                 {/* Country */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Country
//                   </p>
//                   <input
//                     onChange={handleCountry}
//                     value={country}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="Your country"
//                   />
//                   {errCountry && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errCountry}
//                     </p>
//                   )}
//                 </div>
//                 {/* Zip code */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Zip/Postal code
//                   </p>
//                   <input
//                     onChange={handleZip}
//                     value={zip}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="Your country"
//                   />
//                   {errZip && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errZip}
//                     </p>
//                   )}
//                 </div>
//                 {/* Checkbox */}
//                 <div className="flex items-start mdl:items-center gap-2">
//                   <input
//                     onChange={() => setChecked(!checked)}
//                     className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
//                     type="checkbox"
//                   />
//                   <p className="text-sm text-primeColor">
//                     I agree to the eMarket{" "}
//                     <span className="text-blue-500">Terms of Service </span>and{" "}
//                     <span className="text-blue-500">Privacy Policy</span>.
//                   </p>
//                 </div>
//                 <button
//                   onClick={handleSignUp}
//                   className={`${
//                     checked
//                       ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
//                       : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
//                   } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
//                 >
//                   Create Account
//                 </button>
//                 <p className="text-sm text-center font-titleFont font-medium">
//                   Don't have an Account?{" "}
//                   <Link to="/signin">
//                     <span className="hover:text-blue-600 duration-300">
//                       Sign in
//                     </span>
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Signup = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ============= Error Msg Start here =================
  const [errFirst_name, setErrFirst_name] = useState("");
  const [errLast_name, setErrLast_name] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const handleFirst_name = (e) => {
    setFirst_name(e.target.value);
    setErrFirst_name("");
  };
  const handleLast_name = (e) => {
    setLast_name(e.target.value);
    setErrLast_name("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (!first_name) {
      setErrFirst_name("Enter your first name");
      isValid = false;
    }

    if (!last_name) {
      setErrLast_name("Enter your last name");
      isValid = false;
    }

    if (!email) {
      setErrEmail("Enter your email");
      isValid = false;
    } else if (!EmailValidation(email)) {
      setErrEmail("Enter a valid email");
      isValid = false;
    }

    if (!phone) {
      setErrPhone("Enter your phone number");
      isValid = false;
    }

    if (!password) {
      setErrPassword("Create a password");
      isValid = false;
    } else if (password.length < 6) {
      setErrPassword("Passwords must be at least 6 characters");
      isValid = false;
    }

    if (isValid && checked) {
      setLoading(true);
      try {
        const headers = {
          'Content-Type': 'application/json',
          'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
        };

        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/v1/ecommerce/signup/customer`,
          {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
              first_name,
              last_name,
              phone,
              email,
              password,
            }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          setSuccessMsg(result.message);
          setLoading(false);
          setTimeout(() => {
            navigate('/signin');
          }, 3000);
        } else {
          setMessage('Registration failed');
          setLoading(false);
        }
      } catch (error) {
        setMessage('An error occurred during registration');
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        className="w-full max-w-[500px] bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="px-6 py-4 w-full flex flex-col justify-start">
          <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
            Create your account
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                First Name
              </p>
              <input
                onChange={handleFirst_name}
                value={first_name}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="eg. Martins John"
              />
              {errFirst_name && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errFirst_name}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Last Name
              </p>
              <input
                onChange={handleLast_name}
                value={last_name}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="eg. Martins John"
              />
              {errLast_name && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errLast_name}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Work Email
              </p>
              <input
                onChange={handleEmail}
                value={email}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="email"
                placeholder="martins@gmail.com"
              />
              {errEmail && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errEmail}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Phone Number
              </p>
              <input
                onChange={handlePhone}
                value={phone}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="081-555-22-444"
              />
              {errPhone && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errPhone}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Password
              </p>
              <input
                onChange={handlePassword}
                value={password}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="password"
                placeholder="Create password"
              />
              {errPassword && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errPassword}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-start mdl:items-center gap-2 mt-4">
            <input
              onChange={() => setChecked(!checked)}
              className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
              type="checkbox"
            />
            <p className="text-sm text-primeColor">
              I agree to the eMarket{" "}
              <span className="text-blue-500">Terms of Service </span>and{" "}
              <span className="text-blue-500">Privacy Policy</span>.
            </p>
          </div>
          <button
            type="submit"
            disabled={!checked || loading}
            className={`mt-4 ${
              checked
                ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                : "bg-gray-500 cursor-not-allowed"
            } w-full text-gray-200 text-base font-medium h-10 rounded-md duration-300`}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
          <p className="text-sm text-center font-titleFont font-medium mt-4">
            Don't have an Account?{" "}
            <Link to="/signin">
              <span className="hover:text-blue-600 duration-300">
                Sign in
              </span>
            </Link>
          </p>
          {message && (
            <p className="text-red-500 text-sm mt-2 font-titleFont">{message}</p>
          )}
          {successMsg && (
            <p className="text-green-500 text-sm mt-2 font-titleFont">{successMsg}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Signup;
