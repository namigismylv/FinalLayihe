import React, { useContext } from "react";
import { Formik } from "formik";
import MainContext from "../../../Context/Context";
import axios from "axios";

const AddNews = () => {
  const { setNews } = useContext(MainContext);

  return (
    <div className="general__admin">
      <h1>Add News</h1>
      <Formik
        initialValues={{
          image: null,
          category: "",
          time: "",
          title: "",
          detailsImg: null,
          detailsHeadDesc: "",
          detailsMainDes: "",
          detailSecImg: null,
          detailSecTitle: "",
          detailSecDes: "",
          detailRdImg: null,
          detailRdTitle: "",
          detailRdDes: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();
          Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
          });

          axios
            .post("http://localhost:3000/newswire", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              setNews(res.data);
              console.log(res.data);
            })
            .catch((error) => {
              console.error("There was an error uploading the data!", error);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({
          values,
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              name="image"
              onChange={(event) => {
                setFieldValue("image", event.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
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
              name="title"
              placeholder="Title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <input
              type="text"
              name="time"
              placeholder="Date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.time}
            />
            <input
              type="text"
              name="detailsImg"
              placeholder="details image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.detailsImg}
            />
            <input
              type="text"
              name="detailsHeadDesc"
              placeholder="Details Title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.detailsHeadDesc}
            />
            <textarea
              name="detailsMainDes"
              placeholder="Details text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.detailsMainDes}
            />
            <input
              type="text"
              name="detailSecImg"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="details second image"
              value={values.detailSecImg}
            />
            <input
              type="text"
              name="detailSecTitle"
              placeholder="Details second title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.detailSecTitle}
            />
            <textarea
              name="detailSecDes"
              placeholder="Details second text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.detailSecDes}
            />
            <input
              type="text"
              name="detailRdImg"
              placeholder="details third image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.detailRdImg}
            />
            <input
              type="text"
              name="detailRdTitle"
              placeholder="Details third title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.detailRdTitle}
            />
            <textarea
              name="detailRdDes"
              placeholder="Details third text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.detailRdDes}
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

export default AddNews;
