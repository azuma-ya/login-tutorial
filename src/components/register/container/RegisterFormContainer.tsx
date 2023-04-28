import React from "react";
import RegisterForm, { RegisterFormData } from "../presenter/RegisterForm";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../utils/firebase";

interface RegisterFormContainerProps {
  onRegister: (error?: Error) => void;
}

const RegisterFormContainer = ({ onRegister }: RegisterFormContainerProps) => {
  const handleRegister = ({ username, email, password }: RegisterFormData) => {
    //firebaseに登録する処理
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        //データベースに詳細を追加
        const userInitialData = {
          email: email,
          uid: user.uid,
          username: username,
        };
        addDoc(collection(db, "users"), userInitialData);
        onRegister();
      })
      .catch((error) => {
        onRegister(error);
      });
  };

  return <RegisterForm onRegister={handleRegister} />;
};

export default RegisterFormContainer;
