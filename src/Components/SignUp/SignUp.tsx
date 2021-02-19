import React, { useRef, useState } from "react";
import "./SignUp.css";
import { firebase } from "../../firebase/firebase";

const SignUp = () => {
  const [invalidValues, setInvalidValues] = useState<boolean>(false);
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
  const formRef = useRef<HTMLFormElement>(null);
  const emailref = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: any) => {
    e.preventDefault();
    const formValues = formRef.current!;
    const emailValue = emailref.current?.value;
    const passwordValue = passwordRef.current?.value;
    const passwordConfirmValue = passwordConfirmRef.current?.value;

    if (emailValue && passwordValue && passwordValue === passwordConfirmValue) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailValue, passwordValue)
        .then((credential) => {
          formValues.reset();
          setInvalidValues(false);
        })
        .catch((err) => console.log(err));
    } else if (passwordValue !== passwordConfirmValue) {
      setPasswordMatch(false);
    } else {
      setInvalidValues(true);
    }
  };

  return (
    <form onSubmit={submitHandler} ref={formRef} className="signup">
      <p>Email</p>
      <input
        ref={emailref}
        onChange={() => setInvalidValues(false)}
        type="email"
      />
      <p>Password</p>
      <input
        ref={passwordRef}
        onChange={() => setInvalidValues(false)}
        type="password"
      />
      <p>Password Confirmation</p>
      <input
        ref={passwordConfirmRef}
        onChange={() => setInvalidValues(false)}
        type="password"
      />
      <button>Sign Up !</button>
      {invalidValues && (
        <p>
          ⚠️<b>Warning:</b> Please insert valid information.
        </p>
      )}
      {!passwordMatch && (
        <p>
          ⚠️<b>Warning:</b> Paswords don't match.
        </p>
      )}
    </form>
  );
};

export default SignUp;
