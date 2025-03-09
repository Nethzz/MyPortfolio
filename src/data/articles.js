import React from "react";

function article_1()
{
	return {
		// date: "7 May 2023",
		title: "Supply Chain Integration and Financial Performance Research",
		description:
			"A research paper on how Supply Chain Integration (SCI) impacts financial performance, including a literature review and meta-analysis of existing studies, and potential future directions in the field.",
		keywords: [
			"Supply Chain Integration and Financial Performance",
			"Neethu Vasundharan Sheeja",
			"Research Paper",
			"SCI Impact",
		],
		medlink: "https://medium.com/@neethuvasundharan/unpacking-the-impact-of-supply-chain-integration-on-financial-performance-a-systematic-review-fd0bb05eb83a",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">This paper explores the impact of Supply Chain Integration (SCI) on financial performance. It includes a literature review and meta-analysis of previous studies, offering potential future directions for research in this field.</div>
					<img
						src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/r/r.png"
						alt="Supply Chain Integration"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2()
{
	return {
		// date: "7 May 2023",
		title: "Object Detection in Maritime Domain: Focus on Safety and Rescue",
		description:
			"This research project focuses on enhancing safety and rescue operations in the maritime domain using object detection techniques.",
		medlink: "https://medium.com/@neethuvasundharan/unpacking-the-impact-of-supply-chain-integration-on-financial-performance-a-systematic-review-fd0bb05eb83a",
		style: ``,
		keywords: [
			"Object Detection in Maritime Domain",
			"Neethu Vasundharan Sheeja",
			"Maritime Safety",
			"Safety and Rescue",
		],
		body: (
			<React.Fragment>
				<h1>In this research, we apply object detection techniques to enhance safety and rescue operations in the maritime domain. By using advanced algorithms, this project aims to identify critical objects and areas in maritime environments, thereby improving rescue efforts and safety protocols.</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
