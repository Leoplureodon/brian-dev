import {
  Link,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { VariantType, useSnackbar } from "notistack";

function Contact() {
  //Setup
  const emailAddress: string = import.meta.env.VITE_EMAIL_ADDRESS;
  const contactFormApiKey: string = import.meta.env.VITE_CONTACT_FORM_API_KEY;
  const [busy, setBusy] = useState(false);

  // Toasts
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("access_key", contactFormApiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const resultData = await response.json();

      if (resultData.success) {
        handleToast("Form submitted successfully!", "success");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        handleToast(resultData.message || "Submission failed", "error");
      }
    } catch (error) {
      handleToast("Error submitting form", "error");
      console.error("Error submitting form", error);
    } finally {
      setBusy(false);
    }
  };

  const handleToast = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  return (
    <Box sx={{ maxWidth: 800 }} aria-busy={busy}>
      <Typography variant="body1" gutterBottom>
        Contact me at{" "}
        <Link href={`mailto:${emailAddress}`}>{emailAddress}</Link>
        {", "} or feel free to drop me a line using the form below
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 800,
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            required
          />
          {/* Hidden botcheck field */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />
          <Box sx={{ display: "flex" }}>
            <Button
              disabled={busy}
              sx={{ marginRight: 3 }}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
            {busy && <CircularProgress />}
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default Contact;
