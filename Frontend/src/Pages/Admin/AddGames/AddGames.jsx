import React, { useContext } from "react";
import { Formik } from "formik";
import axios from "axios";
import MainContext from "../../../Context/Context";

const AddGames = () => {
  const { setGames } = useContext(MainContext);
  return (
    <div className="general__admin">
      <Formik
        initialValues={{
          image: "",
          title: "",
          price: "",
          category: "",
          bigImg: "",
          nameImg: "",
          description: "",
          keyFImg1: "",
          keyFTit1: "",
          keyFDes1: "",
          keyFImg2: "",
          keyFTit2: "",
          keyFDes2: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("http://localhost:3000/games", { ...values })
            .then((res) => {
              setGames(res.data);
              console.log(res.data);
            });
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="image"
              placeholder="Image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
            />
            <input
              type="text"
              name="bigImg"
              placeholder="Hero Image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bigImg}
            />
            <input
              type="text"
              name="nameImg"
              placeholder="Head Image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nameImg}
            />
            <textarea
              name="description"
              placeholder="details des"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <input
              type="text"
              name="keyFImg1"
              placeholder="Story Image 1"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.keyFImg1}
            />
            <input
              type="text"
              name="keyFTit1"
              placeholder="story title 1"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.keyFTit1}
            />
            <textarea
              name="keyFDes1"
              placeholder="story des 1"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.keyFDes1}
            />
            <input
              type="text"
              name="keyFImg2"
              placeholder="Story Image 2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.keyFImg2}
            />
            <input
              type="text"
              name="keyFTit2"
              placeholder="story Title 2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.keyFTit2}
            />
            <textarea
              name="keyFDes2"
              placeholder="story des 2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.keyFDes2}
            />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddGames;
