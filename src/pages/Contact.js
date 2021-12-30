import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import Box from "@mui/material/Box";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Formik } from "formik";
import * as Yup from "yup";
import { sendMessage } from "../api";
const initialValues = { name: "", email: "", subject: "", message: "" };

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  quantity: Yup.number().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function Contact() {
  const [flavor, setFlavor] = useState("pig");

  const handleFlavor = (event, newFlavor) => {
    setFlavor(newFlavor);
  };

  const handleFormSubmit = async (values) => {
    try {
      await sendMessage(values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Grid item md={12}>
        <Typography variant="h2" gutterBottom align="center">
          Domicilio
        </Typography>
      </Grid>
      <Grid item md={12}>
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
                  aria-controls="panel-direccion-content"
                  id="panel-direccion-header"
                >
                  <Typography>Direccion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item container md={12} spacing={2}>
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
                        id="lastname"
                        label="Apellido"
                        disabled={isSubmitting}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastname}
                        error={!!touched.lastname && !!errors.lastname}
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
                    <Grid item md={6}>
                      <TextField
                        fullWidth
                        id="phone"
                        label="Número de teléfono"
                        disabled={isSubmitting}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone}
                        error={!!touched.phone && !!errors.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={12}>
                      <TextField
                        required
                        fullWidth
                        id="address"
                        label="Dirección"
                        disabled={isSubmitting}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address}
                        error={!!touched.address && !!errors.address}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel-cantidad-content"
                  id="panel-cantidad-header"
                >
                  <Typography>Cantidad</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item md={6}>
                    <TextField
                      required
                      fullWidth
                      type="number"
                      id="quantity"
                      label="Cantidad"
                      disabled={isSubmitting}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.quantity}
                      error={!!touched.quantity && !!errors.quantity}
                      variant="outlined"
                    />
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel-sabor-content"
                  id="panel-sabor-header"
                >
                  <Typography>Sabor</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ToggleButtonGroup
                    value={flavor}
                    exclusive
                    onChange={handleFlavor}
                    aria-label="text alignment"
                  >
                    <ToggleButton
                      value={"pig"}
                      aria-label="pig"
                      style={{ fontSize: 48 }}
                    >
                      🐖
                    </ToggleButton>
                    <ToggleButton
                      value="chicken"
                      aria-label="chicken"
                      style={{ fontSize: 48 }}
                    >
                      🐓
                    </ToggleButton>
                    <ToggleButton
                      value="pig-chicken"
                      aria-label="pig-chicken"
                      style={{ fontSize: 48 }}
                    >
                      🐖 🐓
                    </ToggleButton>
                  </ToggleButtonGroup>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel-pago-content"
                  id="panel-pago-header"
                >
                  <Typography>Pago</Typography>
                </AccordionSummary>
                <AccordionDetails>Pago algo por aca</AccordionDetails>
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
                  name="quiero-tamal"
                  aria-label="Quiero mi Tamal!"
                  disabled={isSubmitting}
                >
                  Quiero mi Tamal!
                </Button>
              </Grid>
            </form>
          )}
        </Formik>
      </Grid>
    </>
  );
}
