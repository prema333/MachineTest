import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";
import womenSvg from "../assets/FreeSample-Vectorizer-io-Screenshot 2025-04-29 120028.svg";
import SocialLinks from "../CommonComponents/socialLinks";

import { setErrors, setLoginData, setSavedData } from "../redux/authSlice";
import { isValidate, isValidEmail } from "../Constant/constant";

const Login = () => {
	const { loginData, errors } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (event) => {
		const { id, value } = event.target;
		dispatch(setLoginData({ [id]: value }));
		dispatch(setErrors({ [id]: "" }));
	};

	const handleLoginSubmit = useCallback(
		(event) => {
			event.preventDefault();
			if (!loginData?.email?.trim() || !isValidEmail(loginData?.email)) {
				document.getElementById("email").focus();
				dispatch(setErrors({ email: "Please enter email correctly" }));
			} else if (!isValidate(loginData?.password)) {
				dispatch(setErrors({ password: "Please enter password correctly" }));
				document.getElementById("password").focus();
			} else if (Object.values(errors)?.every((el) => !el)) {
				dispatch(setSavedData(loginData))
				navigate("/home");
			}
		},
		[errors, loginData]
	);

	return (
		<>
			<div className="container-fluid vh-100">
				<div className="row h-100">
					{/* LEFT: Sign-in Form (start at left edge) */}
					<div className="col-md-6 d-flex align-items-center justify-content-start bg-white">
						<div
							className="w-100 px-4 text-start"
							style={{ maxWidth: "350px", minHeight: "500px" }}>
							<h3 className="fw-bold mb-3">Sign In</h3>
							<p className="mb-4" style={{ color: "black" }}>
								New user?
								<a href="#" className="text-primary text-decoration-none">
									&nbsp; Create an account
								</a>
							</p>
							<form onSubmit={handleLoginSubmit}>
								<div className="mb-3">
									<input
										type="text"
										className="form-control"
										placeholder="Username or email"
										name="email"
										onChange={handleChange}
										value={loginData?.email}
										id="email"
										//  required
									/>
								</div>
								{errors?.email && <p className="text-danger">{errors.email}</p>}

								<div className="mb-3">
									<input
										type="password"
										className="form-control"
										placeholder="Password"
										name="password"
										id="password"
										onChange={handleChange}
										value={loginData?.password}
										//  required
									/>
								</div>
								{errors?.password && (
									<p className="text-danger">{errors.password}</p>
								)}

								<div className="form-check mb-3">
									<input
										type="checkbox"
										className="form-check-input"
										id="rememberMe"
									/>
									<label className="form-check-label" htmlFor="rememberMe">
										Keep me signed in
									</label>
								</div>
								<button
									type="submit"
									className="btn btn-dark w-100 border border-warning">
									Sign In
								</button>
							</form>
							<div className="d-flex align-items-center my-4">
								<hr className="flex-grow-1 border-dark" />
								<span className="mx-3 text-muted">Or Sign In With</span>
								<hr className="flex-grow-1 border-dark" />
							</div>
							<div className="d-flex justify-content-center gap-3 mt-3">
								<SocialLinks />
							</div>
						</div>
					</div>

					{/* RIGHT: Illustration */}
					<div className="col-md-6 d-none d-md-flex">
						<img
							src={womenSvg}
							alt="Illustration"
							style={{ height: "650px", objectFit: "contain" }}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
