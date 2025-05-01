import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
	setActiveTab,
	setDetails,
	setIsWidthChange,
	setLoading,
	setVisible,
} from "../redux/authSlice";

const FilterTabs = () => {
	const { referenceData, isWidthChange, activeTab } = useSelector(
		(state) => state.auth
	);
	const dispatch = useDispatch();
	const tabs = referenceData?.map((el) => el?.region);
	let uniqueDuplicates = [...new Set(tabs)];
	let filterData = uniqueDuplicates?.unshift("All");

	const handleTabs = (name) => {
		if (name != activeTab) {
			dispatch(setActiveTab(name));
			dispatch(setLoading({ getLoading: true }));
			if (name === "All") {
				dispatch(setDetails(referenceData));
			} else {
				dispatch(
					setDetails(referenceData?.filter((el) => el?.region === name))
				);
			}
			dispatch(setVisible(20));
			setTimeout(() => {
				dispatch(setLoading({ getLoading: false }));
			}, 500);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 950) {
				dispatch(setIsWidthChange(true));
			} else {
				dispatch(setIsWidthChange(false));
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{isWidthChange ? (
				<ul className="nav flex-wrap">
					{uniqueDuplicates?.map((el, index) => (
						<li className="nav-item" key={index}>
							<a
								href="#"
								className={`nav-link border-0 ${
									activeTab === el
										? "text-dark fw-bold border-bottom border-2 border-dark"
										: "text-secondary"
								}`}
								onClick={(e) => {
									e.preventDefault();
									handleTabs(el);
								}}
								style={{
									backgroundColor: "transparent",
									pointerEvents: "auto",
								}}>
								{el}
							</a>
						</li>
					))}
				</ul>
			) : (
				<>
					<button
						className="btn btn-outline-secondary"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#tabsOffcanvas"
						aria-controls="tabsOffcanvas">
						<i class="bi bi-list"></i>
					</button>
					<div
						className="offcanvas offcanvas-end"
						tabIndex="-1"
						id="tabsOffcanvas"
						aria-labelledby="tabsOffcanvasLabel">
						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="tabsOffcanvasLabel">
								Select Country
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="offcanvas"
								aria-label="Close"></button>
						</div>
						<div className="offcanvas-body">
							{uniqueDuplicates?.map((el, index) => (
								<button
									key={index}
									className={`btn w-100 text-start mb-2 ${
										activeTab === el ? "btn-success" : "btn-outline-success"
									}`}
									onClick={() => {
										handleTabs(el);
										document.querySelector("#tabsOffcanvas .btn-close").click(); // Close the offcanvas
									}}>
									{el}
								</button>
							))}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default FilterTabs;
