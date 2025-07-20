import { useState } from "react";

const useFormValidation = (initialValues) => {
  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState(null);

  const validateForm = () => {
    if (!form.name || !form.name.trim()) {
      setError("Tên sản phẩm không được để trống.");
      return false;
    }
    if (!/^[a-zA-Z0-9\s\/\-\.]+$/.test(form.name)) {
      setError(
        "Tên sản phẩm chỉ được chứa chữ cái, số, /, -, . và khoảng trắng."
      );
      return false;
    }
    if (!form.description || !form.description.trim()) {
      setError("Mô tả không được để trống.");
      return false;
    }
    if (!/^\d+$/.test(form.price.replace(/\./g, ""))) {
      setError("Giá phải là số nguyên (chỉ chứa số).");
      return false;
    }
    if (!/^\d+$/.test(form.currentPrice.replace(/\./g, ""))) {
      setError("Giá hiện tại phải là số nguyên (chỉ chứa số).");
      return false;
    }
    const price = parseInt(form.price.replace(/\./g, ""), 10);
    const currentPrice = parseInt(form.currentPrice.replace(/\./g, ""), 10);
    if (price <= 0 || currentPrice <= 0) {
      setError("Giá và giá hiện tại phải lớn hơn 0.");
      return false;
    }
    if (currentPrice > price) {
      setError("Giá hiện tại không được lớn hơn giá gốc.");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null); // Xóa lỗi khi người dùng thay đổi
  };

  const getValidatedProduct = () => ({
    ...form,
    price: parseInt(form.price.replace(/\./g, ""), 10) || 0,
    currentPrice: parseInt(form.currentPrice.replace(/\./g, ""), 10) || 0,
  });

  return {
    form,
    error,
    setError,
    handleChange,
    validateForm,
    getValidatedProduct,
    setForm,
  };
};

export default useFormValidation;
