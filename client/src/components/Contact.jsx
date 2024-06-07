import phone from "../assets/phone.png";
import email from "../assets/email.png";
import send from "../assets/send.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    consent: Yup.bool().oneOf([true], "Consent is required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  return (
    <div className="flex my-24 px-36">
      <div className="flex flex-col gap-4 w-[50%]">
        <h3 className="text-[#D9F203] font-neue tracking-wider text-lg">
          Contact Us
        </h3>
        <pre className="text-[#D9F203] font-neue tracking-wider text-3xl sm:text-5xl md:text-6xl lg:text-5xl">
          Have Questions? Get in
          <br />
          Touch!
        </pre>
        <pre className="font-sen text-sm text-[#CCCCCC]">
          Vriksh is an agency dedicated to providing profitable and
          <br />
          custom-made solutions that can supersize your firm’s,
          <br />
          growth. Reach out to us for business enquiries and we will,
          <br />
          get back to you at the earliest. totam rem aperiam.
        </pre>
        <div className="flex gap-2 items-center mt-4">
          <img src={phone} alt="" />
          <p className="bg-transparent text-white">+1 840 841 25 69</p>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <img src={email} alt="" />
          <p className="bg-transparent text-white">info@gmail.com</p>
        </div>
      </div>
      <div className="w-[60%]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 p-8 bg-black text-white rounded-lg">
              <div className="flex justify-between">
                <div className="w-[45%] flex flex-col space-y-2 mb-6">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-2 bg-black border-b-2 border-[#D9F203] focus:outline-none focus:border-[#D9F203]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-[45%] flex flex-col space-y-2">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="p-2 bg-black border-b-2 border-[#D9F203] focus:outline-none focus:border-[#D9F203]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[45%] flex flex-col space-y-2">
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="p-2 bg-black border-b-2 border-[#D9F203] focus:outline-none focus:border-[#D9F203]"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-[45%] flex flex-col space-y-2">
                  <Field
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="p-2 bg-black border-b-2 border-[#D9F203] focus:outline-none focus:border-[#D9F203]"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  className="px-2 py-4 bg-black border-b-2 border-[#D9F203] focus:outline-none focus:border-[#D9F203]"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex gap-6 pt-6">
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#D9F203] text-[#637400] flex gap-2 items-center font-neue px-6 py-4 rounded shadow hover:bg-[#bfcc48] transition duration-200"
                  >
                    <img className="bg-transparent" src={send} width={20} alt="" />
                    GET IN TOUCH
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <Field
                    type="checkbox"
                    name="consent"
                    className="form-checkbox text-[#D9F203]"
                  />
                  <label className="text-sm">
                    I agree that my data is collected and stored.
                  </label>
                  <ErrorMessage
                    name="consent"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
