import React from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import Box from "@mui/material/Box";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    <Grid
      container
      item
      md={12}
      className={classes.root}
      spacing={2}
      justifyContent="center"
    >
      <Grid item md={12}>
        <Typography variant="h2" gutterBottom align="center">
          Domicilio
        </Typography>
      </Grid>

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
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Direccion</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item container md={12}>
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
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Pago</Typography>
              </AccordionSummary>
              <AccordionDetails>Pago algo por aca</AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Cantidad</Typography>
              </AccordionSummary>
              <AccordionDetails>Cantidad algo por aca</AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Sabor</Typography>
              </AccordionSummary>
              <AccordionDetails>Sabor algo por aca</AccordionDetails>
            </Accordion>

            <Grid
              item
              md={12}
              container
              justifyContent="center"
              component={Box}
              my={4}
            >
              <Button
                type="submit"
                color="primary"
                size="large"
                variant="contained"
                disabled={isSubmitting}
              >
                Quiero mi Tamal!
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  root: { height: "100%", width: "100%" },
}));
