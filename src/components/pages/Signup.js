import React, { useEffect, useState } from "react";

import { getAllNotes, deleteNote, editNote } from "../../api";
import { Formik, useFormik } from "formik";

import faunadb from "faunadb";
import BSNavBar from "../layout/BSNavBar";
import Footer from "../layout/Footer";
import createNote from "../../api/createNote"


function Signup() {
 
  const formik = useFormik({
    initialValues: { cheese: "" },
    onSubmit: (values, {setSubmitting}) => {
      // alert(JSON.stringify(values, null, 2));
     
      console.log(`data entered is ${JSON.stringify(values, null, 2)}`)
      createNote(values)
      setTimeout(console.log('timer'), 3000)
      
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="cheese">Email Address</label>
      <input
        id="cheese"
        name="cheese"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button disabled={formik.isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Signup;
