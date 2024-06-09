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
    <div className="flex flex-col gap-[4vw] md:flex-row my-[8vw] px-[8vw] md:px-[5vw]">
      <div className="flex flex-col gap-4 md:w-[50%]">
        <h3 className="text-[#D9F203] font-neue tracking-wider text-[3vw] md:text-[1vw]">
          Contact Us
        </h3>
        <pre className="text-[#D9F203] text-[8vw] font-neue tracking-wider md:text-[3vw] leading-[8vw] md:leading-[3vw]">
          Have Questions?<br/>Get in
          Touch!
        </pre>
        <p className="font-sen text-[3vw] text-[#CCCCCC] md:w-[70%] md:text-[1vw] leading-[4vw] md:leading-[1.5vw]">
          Vriksh is an agency dedicated to providing profitable and custom-made
          solutions that can supersize your firm’s, growth. Reach out to us for
          business enquiries and we will, get back to you at the earliest. totam
          rem aperiam.
        </p>
        <div className="flex gap-[2vw] md:gap-[0.5vw] items-center mt-[0.8vw]">
          <img src={phone} className="w-[3vw] md:w-[1vw]" alt="" />
          <p className="bg-transparent text-white text-[3vw] md:text-[1vw]">
            +1 840 841 25 69
          </p>
        </div>
        <div className="flex gap-[2vw] md:gap-[0.5vw] items-center mt-[0.8vw]">
          <img src={email} className="w-[3vw] md:w-[1vw]" alt="" />
          <p className="bg-transparent text-white text-[3vw] md:text-[1vw]">info@gmail.com</p>
        </div>
      </div>
      <div className="">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 p-[1vw] text-white rounded-lg">
              <div className="flex gap-[12vw] md:gap-[2vw] mb-[2vw]">
                <div className="w-[35vw] md:w-[21vw] text-[3vw] md:text-[1vw] flex flex-col space-y-2 mb-6">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-2 bg-black border-b-2 border-[#D9F203] focus:outline-none focus:border-[#D9F203]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-[3vw] md:text-[1vw]"
                  />
                </div>
                <div className="w-[35vw] md:w-[21vw] text-[3vw] md:text-[1vw] flex flex-col space-y-2">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="p-2 bg-black border-b-2 border-[#D9F203] focus:outline-none focus:border-[#D9F203]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-[3vw] md:text-[1vw]"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[35vw] md:w-[21vw] text-[3vw] md:text-[1vw] flex flex-col space-y-2 mb-6">
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="p-2 bg-black border-b-2 border-[#D9F203] focus:outline-none focus:border-[#D9F203]"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-[1vw]"
                  />
                </div>
                <div className="w-[35vw] md:w-[21vw] text-[3vw] md:text-[1vw] flex flex-col space-y-2 mb-6">
                  <Field
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="p-2 bg-black border-b-2 border-[#D9F203] focus:outline-none focus:border-[#D9F203]"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-500 text-[1vw]"
                  />
                </div>
              </div>
              <div className="flex flex-col text-[3vw] md:text-[1vw] space-y-2">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  className="px-2 py-4 bg-black border-b-2 border-[#D9F203] focus:outline-none focus:border-[#D9F203]"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-[1vw]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-[3vw] pt-[2vw]">
                <div className="flex items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#D9F203] text-[#637400] flex gap-2 items-center font-neue px-[2vw] md:px-[1.2vw] py-[2vw] md:py-[0.8vw] rounded shadow hover:bg-[#bfcc48] transition duration-200 text-[4vw] md:text-[1.5vw]"
                  >
                    <img
                      className="bg-transparent w-[4vw] md:w-[1.4vw] "
                      src={send}
                      width={20}
                      alt=""
                    />
                    GET IN TOUCH
                  </button>
                </div>
                <div className="flex items-center space-x-2 gap-[0.5vw]">
                  <Field
                    type="checkbox"
                    name="consent"
                    className="form-checkbox text-[#D9F203] custom-checkbox"
                  />
                  <label className="text-[2vw] md:text-[1.1vw]">
                    I agree that my data is collected and stored.
                  </label>
                  <ErrorMessage
                    name="consent"
                    component="div"
                    className="text-red-500 text-[3vw] md:text-[1vw]"
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
