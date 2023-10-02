import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);



    // reset error and success
    setRegisterError('');
    setSuccess('');

    if(password.length <6 ){
        setRegisterError('Password should be at least 6 characters or longer');
        return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully.");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          {/* <input className="mb-4 w-full  py-2 px-4" type="text" name="name" placeholder="Your Name" id="" required />
                    <br /> */}
          <input
            className="mb-4 w-full border py-2 px-4"
            type="email"
            name="email"
            placeholder="Email Address"
            id=""
            required
          />
          <br />
          <div className="mb-4 relative border">
            <input
              className="w-full py-2 px-4"
              name="password"
              placeholder="Password"
              type="password"
              id=""
              required
            />
          </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our <a href="">Terms and Conditions</a>
            </label>
          </div>
          <br />
          <input
            className="btn btn-secondary mb-4 w-full"
            type="submit"
            value="Register"
          />
        </form>
        {registerError && <p className="text-red-700">{registerError}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <p>
          Already have an account? Please <Link to="/login">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
