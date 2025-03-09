const INFO = {
	main: {
		title: "Reactfolio by truethari",
		name: "Neethu Vasundharan Sheeja.",
		email: "neezsac@gmail.com",
		logo: "../logo.png", // Replace with your logo image path
	},

	socials: {
		medium: "https://neethuvasundharan.medium.com/",
		github: "https://github.com/Nethzz",
		linkedin: "https://www.linkedin.com/in/neethu-vasundharan-225762150/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		name: "Neethu Vasundharan Sheeja",
		title: "Software Engineer | Intern",
		description:
			"Software Engineer with 7 years of experience specializing in web and mobile development. Skilled in React, Node.js, and Python, with a strong background in building scalable and efficient applications. Currently pursuing a Master’s in Software Engineering, I am passionate about leveraging my skills to drive innovation and deliver high-quality software solutions. Actively seeking opportunities to contribute to impactful projects and expand my expertise.",
	},

	about: {
		title: "I’m Neethu Vasundharan Sheeja. I live in France and I am a passionate Software Engineer.",
		description:
			"With over 7 years of experience in software engineering, I specialize in developing applications with a wide range of technologies such as React, Node.js, Python, and more. I have experience working in mobile and web development, and I am actively seeking opportunities to contribute to meaningful projects that make a difference.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Object Detection in Maritime Domain",
			description:
				"This project focuses on enhancing safety and rescue operations in the maritime domain using object detection techniques. The application identifies critical objects and areas in the maritime environment.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Nethzz/MarineObjectDetection.git",
		},

		{
			title: "Hand Gesture-Based Image Controller",
			description:
				"This project is a hand gesture-controlled image viewer that allows users to navigate through images, zoom in and out, and detect specific gestures using OpenCV and MediaPipe. It also uploads zoomed images to Firebase Firestore for easy storage and retrieval.",
			features: [
				"Hand Gesture Detection: Uses MediaPipe to track hand landmarks.",
				"Swipe Detection: Navigate through images by swiping left or right.",
				"Zoom Control: Adjust zoom level with a pinch gesture.",
				"Circle Gesture Recognition: Detect circular hand movements.",
				"Firestore Integration: Uploads zoomed images to Firebase Firestore.",
			],
			technologies: [
				"Python",
				"OpenCV",
				"MediaPipe",
				"NumPy",
				"Firebase Firestore",
			],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Nethzz/Vision.git",
		},


		{
			title: "3D Living Room with Image Gallery (Unity, Google Cardboard SDK)",
			description:
				"Developed a 3D interactive living room environment and integrated an image gallery displayed on the walls using Unity and Google Cardboard SDK for an immersive VR experience. This project allows users to navigate through a virtual living room and view an image gallery on the walls, enhancing the VR experience with Google Cardboard.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
			linkText: "View Project",
			link: "https://github.com/Nethzz/3DLivingRoomInGoogleCardboard.git",
		},


		{
			title: "FashionWave - Clothing E-Commerce Website",
			description:
				"FashionWave is a full-stack web application for clothing e-commerce built using ASP.NET. It features product browsing, user authentication, and payment systems.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
			linkText: "View Project",
			link: "https://github.com/Nethzz/FashionWave.git",
		},

		{
			title: "React Native Camera-Based Image Uploader",
			description:
				"This project is a React Native application that captures images using the device's camera at periodic intervals, compresses them, converts them to Base64, and uploads them to Firebase Firestore.",
			features: [
				"Automatic Image Capture: Takes photos every 5 seconds.",
				"Image Compression: Reduces image size before uploading.",
				"Base64 Conversion: Converts images to Base64 format.",
				"Firestore Integration: Uploads images to Firebase Firestore.",
				"Start & Stop Uploading: Allows users to control the process.",
			],
			technologies: [
				"React Native",
				"react-native-vision-camera (For capturing images)",
				"@react-native-firebase/firestore (For Firebase integration)",
				"react-native-compressor (For image compression)",
			],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/Nethzz/CaptureX.git",
		},
		{
			title: "Facial Image Classification",
			description:
				"Facial image classification is a growing area of interest in machine learning. In this project, we explore machine learning techniques to classify facial images based on three attributes:\n\n1. **Head Position**: Straight, Left, Right, Up\n2. **Facial Expression**: Neutral, Happy, Sad, Angry\n3. **Eye State**: Sunglasses, Open\n\nBy implementing various machine learning classifiers, we aim to achieve accurate predictions for these attributes.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Nethzz/FaceClassification.git",
		},
		// {
		// 	title: "Tic Tac Toe Game",
		// 	description:
		// 		"This project features a simple implementation of the classic Tic Tac Toe game using Python.\n\nIt allows two players to take turns marking spaces in a 3x3 grid with their symbols (X and O). The game checks for win conditions or draws after each move, ensuring an engaging experience.\n\n**Key Features**:\n- **Player vs Player Mode**: Two players compete against each other.\n- **Input Validation**: Ensures only valid moves are accepted.\n- **Win Condition Checks**: Determines the winner after each turn.\n- **Restart Option**: Allows players to start a new game easily.",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png", // Python logo since it's built using Python
		// 	linkText: "View Project",
		// 	link: "https://github.com/Nethzz/TicTacToeGame.git", // Replace with the correct GitHub link or project page if applicable
		// }



	],
};

export default INFO;
