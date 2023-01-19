import { Button } from "./Button";
import styles from "./../../styles/ContactUsBlock.module.css";
import { Input } from "./Input";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

type FormRequestParams = {
  name: string;
  phone: string;
  email: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required").matches(/(?:\d|-|\h|\(|\)|\+)+/g, 'Phone is invalid'),
  email: Yup.string().required("Email is required").email("Email is invalid"),
});

function formRequest({ name, phone, email }: FormRequestParams) {
  return axios.post("http://localhost:3004/feedback", { name, phone, email });
}

export function ContactUsBlock() {
  const [successRequest, setSuccessRequest] = useState(false);
  const [failedRequest, setFailedRequest] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRequestParams>({ resolver: yupResolver(validationSchema) });

  const onSubmit = handleSubmit((data) => {
    formRequest(data)
      .then((res) => {
        setSuccessRequest(true);
        setFailedRequest(false);
        // alert('Success! We will contact you shortly!')
      })
      .catch((err) => {
        setSuccessRequest(false);
        setFailedRequest(true);
      });
  });

  return (
    <section>
      <div className={styles.borderWrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.flexWrapper}>
            <h2 id="contact" className={styles.header}>
              Contact Us
            </h2>
            <p className="p1">
              Do you have any kind of help please contact with us.
            </p>
            <form onSubmit={onSubmit}>
              <div className={styles.inputGroup}>
                <Input
                  register={{ ...register("name") }}
                  placeholder="Name"
                  type="text"
                  errorMessage={errors.name?.message}
                />
                <Input
                  register={{ ...register("phone") }}
                  placeholder="Phone"
                  type="tel"
                  errorMessage={errors.phone?.message}
                />
                <Input
                  register={{ ...register("email") }}
                  placeholder="E-mail"
                  type="email"
                  errorMessage={errors.email?.message}
                />
              </div>
              <Button text="Send" />
            </form>

            <div className={`${styles.requestResult} ${successRequest && styles.success} ${failedRequest && styles.error}`}>
              {successRequest && <p className="p1">Thank you! We will contact you shortly!</p>}
              {failedRequest && <p className="p1">Sorry, something went wrong! Please, try again later</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
