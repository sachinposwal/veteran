import emailjs from '@emailjs/browser';

export const sendEmail = (formData) => {
  return emailjs.send(
    'service_lf5h0cm',  // Hardcoded service ID
    'template_vdvdi8e',  // Hardcoded template ID
    formData,
    '-cbJkickcjyUS15tS'  // Hardcoded public key
  );
};
