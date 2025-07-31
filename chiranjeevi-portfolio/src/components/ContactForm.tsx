// // // components/ContactForm.jsx
// // import React from 'react';
// // import { useForm, ValidationError } from '@formspree/react';

// // const ContactForm = () => {
// //   const [state, handleSubmit] = useForm("xvgqkekl");

// //   if (state.succeeded) {
// //     return <p className="text-green-600 text-center mt-4">Thanks for your message!</p>;
// //   }

// //   return (
// //     <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
// //       <div>
// //         <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
// //         <input
// //           id="email"
// //           type="email"
// //           name="email"
// //           required
// //           className="w-full px-4 py-2 border border-gray-300 rounded"
// //         />
// //         <ValidationError prefix="Email" field="email" errors={state.errors} />
// //       </div>

// //       <div>
// //         <label htmlFor="message" className="block mb-1 font-medium">Message</label>
// //         <textarea
// //           id="message"
// //           name="message"
// //           required
// //           className="w-full px-4 py-2 border border-gray-300 rounded"
// //         />
// //         <ValidationError prefix="Message" field="message" errors={state.errors} />
// //       </div>

// //       <button
// //         type="submit"
// //         disabled={state.submitting}
// //         className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
// //       >
// //         Submit
// //       </button>
// //     </form>
// //   );
// // };

// // export default ContactForm;

// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import emailjs from '@emailjs/browser';
// import './Contact.css'; // Assuming you have a Contact.css file

// interface ContactProps {}

// const ContactForm: React.FC<ContactProps> = () => {
//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [message, setMessage] = useState<string>('');
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [submissionResult, setSubmissionResult] = useState<'success' | 'error' | null>(null); // 'success' or 'error' or null

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     setIsSubmitting(true);
//     setSubmissionResult(null); // Reset result

//     const serviceId = 'service_svad0vw'; // Replace with your EmailJS service ID
//     const templateId = 'template_udndhia'; // Replace with your EmailJS template ID
//     const publicKey = 'gwkIZjZFs2xfrDvir'; // Replace with your EmailJS public key

//     const templateParams = {
//       from_name: name,
//       from_email: email,
//       message: message,
//     };

//     try {
//       await emailjs.send(serviceId, templateId, templateParams, publicKey);
//       setSubmissionResult('success');
//       setName('');
//       setEmail('');
//       setMessage('');
//     } catch (error) {
//       console.error('Email sending error:', error);
//       setSubmissionResult('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     setMessage(e.target.value);
//   };

//   return (
//     <section className="contact" id="contact">
//       <h2>Contact Me</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={handleMessageChange}
//             rows={5}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Sending...' : 'Send Message'}
//         </button>

//         {submissionResult === 'success' && (
//           <p className="success-message">Message sent successfully!</p>
//         )}
//         {submissionResult === 'error' && (
//           <p className="error-message">
//             There was an error sending your message. Please try again later.
//           </p>
//         )}
//       </form>
//     </section>
//   );
// };

// export default ContactForm;
