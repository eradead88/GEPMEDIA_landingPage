import { initializeApp } from "firebase/app";

const apiKeyID = "AIzaSyBIxwi6V0UgD_iJdcHfQIQsiEfcoocojFk";
const authDomainID = "gepmedia-landingpage-cms.firebaseapp.com";
const projectIdID = "gepmedia-landingpage-cms";
const storageBucketID = "gepmedia-landingpage-cms.appspot.com";
const messagingSenderIdID = "856587692713";
const appIdID = "1:856587692713:web:0432f9e9f9b6e3104a57b8";


const firebaseConfig = {
  apiKey: apiKeyID,
  authDomain: authDomainID,
  projectId: projectIdID,
  storageBucket: storageBucketID,
  messagingSenderId: messagingSenderIdID,
  appId: appIdID
};


const app = initializeApp(firebaseConfig);