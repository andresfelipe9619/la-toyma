import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { sendMessage } from "../api";
const initialValues = { name: "", email: "", subject: "", message: "" };

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  subject: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  message: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function Contact() {
  const classes = useStyles();

  const handleFormSubmit = async (values) => {
    try {
      await sendMessage(values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container item md={5}>
        <Typography variant="h2" gutterBottom>
          Domicilio
        </Typography>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={contactSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    disabled={isSubmitting}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    error={!!touched.name && !!errors.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    disabled={isSubmitting}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    error={!!touched.email && !!errors.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    required
                    fullWidth
                    id="subject"
                    label="Subject"
                    disabled={isSubmitting}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.subject}
                    error={!!touched.subject && !!errors.subject}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={6}
                    id="message"
                    label="Message"
                    disabled={isSubmitting}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.message}
                    error={!!touched.message && !!errors.message}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12} container justify="flex-end">
                  <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  root: { height: "100%", width: "100%" },
}));
