import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
	setDetails,
	setLoading,
	setReferenceData,
	setVisible,
} from "../redux/authSlice";
import FilterTabs from "../CommonComponents/filterTabs";
import { dummyData } from "../Constant/constant";
import SocialLinks from "../CommonComponents/socialLinks";


const HomeScreen = () => {
	const dispatch = useDispatch();
	const { details, visible, loading } = useSelector((state) => state.auth);

	const handleVisibleData =() => {
		dispatch(setLoading({ visibleLoading: true }));
		setTimeout(() => {
			dispatch(setVisible(parseInt(visible) + 20));
			dispatch(setLoading({ visibleLoading: false }));
		}, 600);
	};

	const getDetails = () => {
		dispatch(setLoading({ getLoading: true }));
		axios
			.get("https://restcountries.com/v2/all?fields=name,region,flag")
			.then((response) => {
				dispatch(setDetails(response.data));
				dispatch(setReferenceData(response?.data));
				dispatch(setLoading({ getLoading: false }));
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getDetails();
	}, []);

	return (
		<>
			{loading?.getLoading ? (
				<div class="spinner-border" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			) : (
				<>
					<div className="container mt-5">
						<div class="d-flex justify-content-between align-items-center mb-3">
							<h2 class="section-title">Countries</h2>
							<FilterTabs />
						</div>
						<h2 className="text-center mb-4">
							<span className="px-3 fw-bold">WELCOME</span>
						</h2>
						{loading?.getLoading ? (
							<div class="spinner-border" role="status">
								<span class="sr-only">Loading...</span>
							</div>
						) : (
							<>
								<div className="row align-items-stretch">
									<div className="col-md-10 mb-3">
										<div
											id="carouselExampleIndicators"
											className="carousel slide"
											data-bs-ride="carousel">
											{/* Carousel Indicators */}
											<div className="carousel-indicators">
												{dummyData?.map((el, index) => (
													<button
														key={index}
														type="button"
														data-bs-target="#carouselExampleIndicators"
														data-bs-slide-to={index}
														className={index === 0 ? "active" : ""}
														aria-current={index === 0 ? "true" : "false"}
														aria-label={`Slide ${index + 1}`}></button>
												))}
											</div>

											{/* Carousel Items */}
											<div className="carousel-inner">
												{dummyData?.map((el, index) => (
													<div
														key={index}
														className={`carousel-item ${
															index === 0 ? "active" : ""
														}`}>
														<img
															src={el?.image}
															className="d-block w-100"
															alt={`Slide ${index + 1}`}
															style={{ maxHeight: "400px", objectFit: "cover" }}
														/>
													</div>
												))}
											</div>

											{/* Carousel Controls */}
											<button
												className="carousel-control-prev"
												type="button"
												data-bs-target="#carouselExampleIndicators"
												data-bs-slide="prev">
												<span
													className="carousel-control-prev-icon"
													aria-hidden="true"></span>
												<span className="visually-hidden">Previous</span>
											</button>
											<button
												className="carousel-control-next"
												type="button"
												data-bs-target="#carouselExampleIndicators"
												data-bs-slide="next">
												<span
													className="carousel-control-next-icon"
													aria-hidden="true"></span>
												<span className="visually-hidden">Next</span>
											</button>
										</div>
									</div>

									{/* Side Image Box */}
									<div className="col-md-2 mb-3">
										<img
											src="https://i.pinimg.com/originals/a7/10/3d/a7103d8c0d9b12f0ed47c3ddd94e1cc3.jpg"
											alt="Side"
											className="img-fluid rounded h-100"
											style={{ objectFit: "cover" }}
										/>
									</div>
								</div>

								<div className="row mt-5">
									{details?.slice(0, visible)?.map((country, index) => (
										<div className="col-md-6 mb-4" key={index}>
											<div
												className="card shadow-sm h-60 w-100"
												style={{ height: 100 }}>
												<div className="card-body d-flex align-items-center">
													<img
														src={country?.flag}
														alt={country.name}
														className="me-4 rounded"
														style={{
															width: "50px",
															height: "50px",
															objectFit: "cover",
														}}
													/>
													<div>
														<h6 className="card-title mb-0 fw-bold">
															{country.name}
														</h6>
														<p className="text-start">{country.region}</p>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>

								{details?.length > 1 && details?.length >= visible && (
									<div className="text-center">
										<button
											className="btn btn-dark"
											type="button"
											onClick={handleVisibleData}>
											Load More
											{loading?.visibleLoading && (
												<>
													<span
														className="spinner-grow spinner-grow-sm ms-2"
														role="status"
														aria-hidden="true"></span>
													<span className="visually-hidden">Loading...</span>
												</>
											)}
										</button>
									</div>
								)}
								<div className="row mt-4">
									<SocialLinks />
								</div>
								<div className="row mt-4 text-center">
									<h6>Timesworld@email.com</h6>
									<h6>Copyright 2020 Name, All rights reserved</h6>
								</div>
							</>
						)}
					</div>
				</>
			)}
		</>
	);
};

export default HomeScreen;
