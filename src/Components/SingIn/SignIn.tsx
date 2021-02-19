import React, { EventHandler, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { firebase } from "../../firebase/firebase";

const SignIn: React.FC = () => {
  const [invalidUser, setInvalidUser] = useState<boolean>(false);
  const emailref = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signHandler = (e: any) => {
    e.preventDefault();
    const email = emailref.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((credential) => setInvalidUser(false))
        .catch(() => {
          setInvalidUser(true);
        });
    }
  };

  return (
    <form onSubmit={signHandler} className="signin">
      <label>Email</label>
      <input ref={emailref} onChange={(e) => e.target.value} type="email" />
      <label>Password</label>
      <input ref={passwordRef} type="password" />
      <button>Sing In !</button>
      {invalidUser && <p>⚠️ Invalid E-mail or password.</p>}
      <p>
        Don't have an account?
        <Link to="/signup">
          <span> Create Account</span>
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
