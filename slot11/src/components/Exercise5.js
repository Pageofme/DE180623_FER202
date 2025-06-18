// import React from "react";
// import { useFormik } from "formik";

// const validate = (values) => {
//   const errors = {};

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

// export default function Exercise5() {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     validate,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         name="email"
//         id="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <span>{formik.errors.email}</span>
//       ) : null}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// // or any of your form created previously

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const checkValidEmail = (values) => {
  if (values.length > 0)
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values);
  else return true; // Trả về true/false
};

const checkValidPassword = (values) => {
  if (values.length === 0) return true;
  return values.length >= 8;
  // Trả về true/false
};

function Exercise5() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  // useEffect để thực hiện xác thực mỗi khi giá trị đầu vào thay đổi
  useEffect(() => {
    const isValidEmail = checkValidEmail(email);
    setIsValidEmail(isValidEmail); // Cập nhật tính hợp lệ
    if (!isValidEmail) {
      setErrorEmail("Email không hợp lệ. Vui lòng nhập lại!"); // Cập nhật thông báo lỗi nếu không hợp lệ
    } else {
      setErrorEmail(""); // Xóa thông báo lỗi nếu hợp lệ
    }
  }, [email]); // useEffect sẽ chạy lại mỗi khi email thay đổi

  useEffect(() => {
    const isValidPassword = checkValidPassword(password);
    setIsValidPassword(isValidPassword); // Cập nhật tính hợp lệ
    if (!isValidPassword) {
      setErrorPassword("Mật khẩu cần ít nhất 8 kí tự!"); // Cập nhật thông báo lỗi nếu không hợp lệ
    } else {
      setErrorPassword(""); // Xóa thông báo lỗi nếu hợp lệ
    }
  }, [password]); // useEffect sẽ chạy lại mỗi khi email thay đổi

  return (
    <Form className="text-start">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Cập nhật giá trị khi người dùng thay đổi
        />
        <Form.Text className="text-danger">
          {!isValidEmail && errorEmail}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Cập nhật giá trị khi người dùng thay đổi
        />
        <Form.Text className="text-danger">
          {!isValidPassword && errorPassword}
        </Form.Text>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={!email || !password || !isValidEmail || !isValidPassword}
      >
        Submit
      </Button>
    </Form>
  );
}

export default Exercise5;
