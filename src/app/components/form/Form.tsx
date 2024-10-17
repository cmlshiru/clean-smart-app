"use client";
import React, { useState , FC} from "react";
import axios from "axios";

interface FormState {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  address: string;
  stateProvince: string;
  postalCode: string;
  city: string;
  country: string;
  company: string;
  password: string;
  coupon: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  stateProvince?: string;
  postalCode?: string;
  city?: string;
  country?: string;
  company?: string;
  password?: string;
  coupon?: string;
}

interface FormProps {
  onSubmit:Promise<void>;
}


const Form: FC<FormProps>  = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    stateProvince: "",
    postalCode: "",
    city: "",
    country: "",
    company: "",
    password: "",
    coupon: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validate({ ...form, [name]: value });
  };

  const validate = (form: FormState): FormErrors => {
    let errors: FormErrors = {};

    const requiredFields = [
      "firstName",
      "lastName",
      "username",
      "email",
      "phoneNumber",
      "address",
      "stateProvince",
      "postalCode",
      "city",
      "country",
      "company",
      "password",
      "coupon",
    ];

    requiredFields.forEach((field) => {
      if (!form[field as keyof FormState]) {
        errors[field as keyof FormErrors] = `Please enter a ${field}`;
      }
    });

    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Ups! the email address is invalid";
    }

    if (form.phoneNumber && !/^\d{10}$/.test(form.phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid";
    }

    if (form.password && form.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (form.coupon && form.coupon.length !== 6) {
      errors.coupon = "Coupon must be 6 characters";
    }

    setErrors(errors);
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await axios.post("http://localhost:3000/signup", form);
        alert("Signup successful!");
      } catch (err) {
        alert("There was an error with your signup :(");
      }
    } else {
      alert("Please complete the required fields before submitting!");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((field, i) => (
          <div key={i}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type="text"
              name={field}
              value={form[field as keyof FormState]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
            />
            {errors[field as keyof FormErrors] && (
              <p className="error">{errors[field as keyof FormErrors]}</p>
            )}
          </div>
        ))}
        <div className="bottom">
          <button type="submit" className="btn btn-dark">
            CREATE NEW ACCOUNT
          </button>
          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
