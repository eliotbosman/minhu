document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("project-list");
    const archiveList = document.getElementById("archive-list");
    const projectDetails = document.getElementById("project-details");
    const projectImages = document.getElementById("project-images");    
    const projects = [
    
    {
        title: "Gerrit Rietveld Academie Fashion Show 2023",
        description: "(Campaign identity, 2023)<br>collaborated with Jeanne Gironde<br><a href='https://rietveldacademie.nl/en/page/497/fashion-show'>Gerrit Rietveld Academie's article on the campaign.</a><br><br>The concept for the Fashion show campaign was inspired by the dressing-up games we used to play when we were young. Our aim was to capture the essence of that playful experience by blending 2D and 3D elements. To bring this vision to life, we collaborated with Fashion students participating in a fashion show, who generously contributed their own daily life garments. We then photographed these clothes and transformed them into real-size paper garments using A3 paper. We assembled all the A3 papers, ensuring that the white margins created by the printer remained visible. These margins not only served as a grid for our typesetting but also added a distinctive graphic element to the overall design. This exploration allowed us to examine the interplay between the flat surfaces of printed clothing and the dynamic human form in four dimensions. Our intention was to merge our backgrounds in graphic design with the world of fashion campaigns.",
        images: ["Khinkali_img_1.jpg", "Khinkali_img_2.jpg", "Khinkali_img_4.jpg", "Khinkali_img_1.jpg", "Khinkali_img_2.jpg", "Khinkali_img_4.jpg", "Khinkali_img_1.jpg", "Khinkali_img_2.jpg", "Khinkali_img_4.jpg"]
    },
    
    {
        title: "OFF COURSE",
        description: "(Logo Animation, 2021)<br>Animated logo design for Off course publishing imprint.<br><br>If you follow the pupil of each eye, you will recognize that the pupils form letters. Eight eyes come together to spell out “OFF COURSE”.",
        images: ["Khinkali_img_1.jpg"]
    },
    
    {
        title: "Off the Track",
        description: "(Installation and publication, 2023)<br><a href=https://www.metropolism.com/nl/reviews/50212_graduation_shows_2023_gerrit_rietveld_academie>Featured in Metropolis M Magazine</a><br><br>My graduation project “Off the Track’ invites you to contemplate the shape of time. It raises questions about whether the time is truly linear and can be calculated as you follow a 12-meter-long strip of paper filled with a personal story that intertwines with academic images related to time. Through the experience of reading a 12-meter-long paper, audiences naturally engage with the work at their own unique reading pace. This reflects the notion that we all live our lives in different rhythms and paces, and should be without rules or judgments.",
        images: ["Khinkali_img_1.jpg"]
    },

    {
        title: "Khinkali Box",
        description: "(Paper box, 2023)<br><br>The Khinkali Box is an embodiment of my 6 weeks residency workshop in Georgia, showcased during an exhibition by the Gerrit Rietveld Academie Graphic Design department. Inspired by Georgia's signature dish, Khinkali, this paper box serves as a charming keepsake. Resembling the beloved Khinkali shape, it offers a space to hold leftover bread from the exhibition opening or personal memories - a tactile reminder of our shared journey. The Khinkali Box stands as a testament to the lasting impact of our residency, encapsulating the essence of our experiences in a unique and memorable form.",
        images: ["Khinkali_img_1.jpg"]
    },

    {
        title: "Glass is always a moment of transition",
        description: "(Publication, 2023)<br>A4 booklet<br><br>2023 yearbook of the Large Glass department in Gerrit Rietveld Academie. The shapes of the images are inspired by broken glass. I randomly divided the A3 format into 3 pieces like broken glasses, and put the images in there.",
        images: ["Khinkali_img_1.jpg"]
    },

    {
        title: "AURORA",
        description: "(Type design, 2021)<br><br>Aurora is a creative display typeface that takes inspiration from the stunning colors and graceful movements of the northern lights. This typeface lets you mix thin and bold versions to create different looks with various colors and thickness. It's designed specifically for digital art using RGB colors. The thin and bold styles are developed from a basic line version. At first, I created the line version to capture the natural and flowing shapes of the Aurora. This version became the frame for the thin and bold styles. Using this frame, I made the lines thicker and made them in bitmap. This makes sure that the thin and bold styles blend well with different colors, creating a seamless and attractive appearance.",
        images: ["Khinkali_img_1.jpg"]
    },

    {
        title: "You done yet?",
        description: "Luca’s thesis revolves around his experiences with pressure and depression. To visualize this, I illustrated a cloud that gets bigger at the beginning of each chapter, like how his stress grew. At the end of each chapter, I added ‘Yet?’ to create a sense of pressure for readers to read faster.",
        images: ["Khinkali_img_1.jpg"]
    },

    {
        title: "READ THE ROOM",
        description: "(Publication, 2022)<br><br>READ THE ROOM is Seungji Jo's graduation work from Design LAB, Gerrit Rietveld Academie in 2022. This project takes the form of an escape room, inviting participants to unravel the hidden layers of indirect communication in our daily lives. In a collaborative effort, I translated Seungji Jo's installation and sound work into graphic designs as printed material and video. Central to the graduation work is the symbolic use of a blue curtain, representing the subtleties of an indirect way of speaking. Actual curtains used in the installation were transformed through cyanotype printing to create backgrounds. To deliver audio, I created a VR video that merges audio with curtain graphics. This video enables viewers to navigate the curtain maze while immersing themselves in the audio narrative. A cyanotype card is included with the publication, featuring a QR code that provides access to the VR video.<br><br><a href=https://youtube.com/playlist?list=PLt6axHK3joGsijsMJEZqnvjECkhoOovXO>VR video for Audio </a>",
        images: ["Khinkali_img_1.jpg"]
    },    

];

    const archiveProjects = [
        {
            title: "Eckmann-Schrift",
            description: "(Publication, 2022)<br><br>Eckmann-Schrift, which was made in the early 1900s by Otto Eckmann, never gets old. Originally inspired by the Japanese woodblock painting Ukiyo-e, this typeface was used in Psychedelic art in the 1960s. Even in contemporary society, Eckmann-Schrift found a revival as a psychedelic version in 2018 by James Edmondson. I researched this circulation of Eckmann-Schrift and made image posters with the Woodblock printing technic. By adopting this traditional printing method, the posters exude a nostalgic essence that connects the past and present. Also, to blend the digital and analog realms, I integrated a QR code into the woodblock prints. This QR code grants access to the complete research text in PDF format, offering a seamless convergence of traditional print and modern technology.",
            images: ["Khinkali_img_1.jpg"]
        },    
        
        {
            title: "Zuidas Residence",
            description: "(Publication, 2020)<br><a href=https://studentexperience.com/news/16/amsterdam-zuidas-through-the-eyes-of-an-art-student>Feature Article in Student Experience</a><br><br>Zuidas is the student housing complex I call home. Its distinctive façade, covered in hundreds of circular holes, exudes an industrial yet geometric feel. However, upon closer inspection, you can find clues that people are living there. I aimed to capture the dynamics of this building and its lively elements. I took photographs of the building's exterior, and for the interior, I asked neighbors to send pictures of their rooms. The book's unique split design encourages readers to combine pages, creating new visuals that mirror the building's intriguing blend of industrial and residential elements.",
            images: ["Khinkali_img_1.jpg"]
        },    

        {
            title: "I have no thoughts and this is one of them",
            description: "(Publication, 2022)<br>Redesigned book of the theatre text from Tine Van Aerschot",
            images: ["Khinkali_img_1.jpg"]
        },    

        {
            title: "Human typeface",
            description: "(Poster, 2021)<br>B is fat or B is pregnant. M are holding their hands. Z is ready for diving.. How would it be if the Alphabet becomes human?",
            images: ["Khinkali_img_1.jpg"]
        },    

        {
            title: "Maturity",
            description: "(Publication, 2022)<br><br>What is maturity? We all know about this concept but it’s somehow hard to explain when we try to explain it. I’ve been questioning about this for a long time, as I have the pressure of aging. The phrase “Act your age” makes us to stick certain expectations of each age. I asked 5 friends who are in their 20s, what maturity is. They all have different backgrounds, so of course the answers were all very different. Someone said maturity is following the social expectation of age, someone said they refused this social expectation and want to break it and redefine what is maturity by themselves. Each fruit represents each interviewee, and hundreds of collections of fruit images played as a background and show its maturity process.",
            images: ["Khinkali_img_1.jpg"]
        },  

        {
            title: "Paprika",
            description: "(Image booklet, 2022)<br>A4 Size<br><br>This booklet reimagined the movie “Paprika”. Just like dreams which weave together fragments of thoughts, daily life, and the subconscious, by breaking ceramic and gathering its pieces, I captured the essence of this fragmented dream world. Throughout the booklet, phrases from 'Paprika' are scattered in words. Once the paper is folded, the complete sentences reveal themselves, like our dream.",
            images: ["Khinkali_img_1.jpg"]
        },  
        

        {
            title: "Punk Never Dies",
            description: "(Image research booklet, 2022)<br>collaborated with Susu Lee<br>A4 Size, 6 booklets<br><br>The punk culture was initiated as a protest against society, a protest against fashion, and became fashion itself. Not only for the punks but from Versace’s dress to Japanese street fashion, punk fashion has spread all over the world and even became part of our daily lives. This publication shows images that we studied and researched about Punk culture. Each category within the booklet is a product of distinct printing methods and papers, adding depth and character to our exploration; <br><br>A. Black<br>Melo 60g<br>Gel printing<br><br>Black is heavy and static, but it is a color with excellent attention. Black is reminiscent of negative things such as death, sadness, darkness, and emptiness, and symbolizes evil or misfortune. Black has a strong power suitable for use as an expression of the oppressed ego. Punk releases vain, anarchic, and rebellious emotions through this black. Anarchism is a concept that has been theoretically established around Europe since the 19th century. It is defined as a negative state of nothing and the meaning of denial of uniformity and certainty that cannot be found in any political system or ideology. Frustration and resistance toward social class, racism, and economic depression led the punk people to flee to nihilism and anarchism. A state of emptiness with no possibility and no hope for the future is shown in punk as a black color.<br><br>B. Grotesque<br>Circle offset 70g<br>Silkscreen on top of inkjet printing<br><br>Grotesque is comically or repulsively ugly or distorted. The emotional response to the grotesque is laughter and fear. The laughter inherent in the grotesque is freedom from fear and oppression and represents the desire for liberation from social order or norms. The punks express destructive images by using various accessories beyond stereotypes. They pierced their ears and lips to pursue a vicious and violent image and mainly used metal jewelry to emphasize their rebellious and aggressive attitudes.As for accessories, locks, steel threads, and dog necklaces, which mean social restraint, are used, and various pendants such as safety pins, razor blades, and Nazi patterns are hung on clothes. Through grotesque appearances, the punks expressed emotions such as dissatisfaction, anguish, and boredom with the world, and they felt a kind of liberation with these aggressive expressions. The moment you realize the contradictions and tensions in the grotesque, you can feel a kind of catharsis. <br><br>(Safety pins)<br>Safety pins are almost synonymous with punk. In the 1970s, it was common for counter-culture to present themselves to the public in the most unique ways possible. The safety pin symbolized many things from rebellion to finding new ways to live. <br><br>C. UK punk Politics<br>Biotop 80g<br>Discharge printing<br>Heat press printing on tartan fabric and scanned<br>Inkjet printing<br><br>After World War II, UK economic depression reached its worst state around 1975 and the reality was even worse for young people who were poorly educated or belonged to the lower classes of London. In the UK, where class discrimination was evident, there seemed to be no hope, especially for young people from the working class. Also, the racism problem faced by immigrants children was serious. Young people were angry with society and the government for this class discrimination and racism and tried to resist it through punk culture. McLaren and Vivian Westwood led the British punk culture and fashion through the punk rock band Sex Pistols. In fact, it is in the United States that punk rock music began, but through this background, the actual punk we think started in the UK.<br><br>(Tartan)<br>Royal Stewart Tartan was a popular pattern for the fashionable upper crust of British society in Victorian and Edwardian times. Its subsequent association with the aristocracy meant the pattern denoted civility and authority. Punks reappropriated the tartan, and wore the pattern in torn-up strips, as bondage wear, and other unconventional means. This was yet another way to give the middle finger to the established rulers of British society and showcase punk's dissatisfaction with the way things were.<br><br>D. Androgynous& Sex<br>Courant 49g<br>Inkjet printing<br><br>The androgynous look created a fashion culture based on free individuality by combining and expressing gender images in a single style by wearing pancake makeup, queerness clothes, and plastic stilettos. The androgynous look in punk culture denied any clues to their appearance related to the values that distinguish gender from hierarchy in a much more visible and radical way than in many previous subcultures.<br><br>E. Bricolage<br>Chromolux 700wit 80g<br> Bricolage and scanned<br>Inkjet printing<br><br>During the deep economic recession, the UK government distributed bright green and pink garbage bags to beautify the garbage, and young punks tore and dressed those garbage bags. They performed a bricolage act of decorating themselves with trash and items that were not necessarily the material of clothes, such as toilet chains, safety pins, razors, tampons, tableware, bottle caps, and wrappers. This also connects to the punk spirit of D.I.Y.<br><br>F. Graffiti<br>Trophee 80g<br> Letterpress on top of inkjet printing<br><br>Punk adopted Graffiti and Agitprop in the 70s as another way to expose resistance and defiance. In addition to expressing one's identity, Graffiti becomes a direct medium that conveys important political and social issues in specific words. This can most effectively and directly deliver the message by allowing the clothes to speak by themselves. The punks offended people by marking letters or symbols everywhere that symbolize punk to show their sense of belonging. Roughly scribbled or sprayed letters create unknown phrases rather than have accurate forms, and have a strong impulsive feeling.",
            images: ["Khinkali_img_1.jpg"]
        },  

        {
            title: "Texture on texture",
            description: "(Fabric Poster, 2021)",
            images: ["Khinkali_img_1.jpg"]
        },  

        {
            title: "Trash tile",
            description: "(Collage Image, 2020)<br><br>Strolling along Amsterdam's streets, I gathered images of trash found on the pavement. These images were then reassembled, following the pattern of the pavement tiles.",
            images: ["Khinkali_img_1.jpg"]
        },  

        {
            title: "What’s your colour?",
            description: "(Publication, 2021)<br>Silkscreen on A2 paper<br>Research booklet about colour terminology. Why do we divide race as colours? And how does it influence people’s stereotypes?",
            images: ["Khinkali_img_1.jpg"]
        },  
        
    
];

function updateProjectDetails(selectedProject, imagesContainer) {
    projectDetails.innerHTML = `
        <h2>${selectedProject.title}</h2>
        <p>${selectedProject.description}</p>
    `;

    imagesContainer.innerHTML = ""; // Clear previous images

    // Create a container for the images
    const imagesContainerDiv = document.createElement("div");
    imagesContainerDiv.id = "project-images-container";

    selectedProject.images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = "Project Image";
        imagesContainerDiv.appendChild(imgElement);
    });

    // Append new images container
    imagesContainer.appendChild(imagesContainerDiv);
}

function populateList(listElement, projectArray) {
    listElement.innerHTML = ""; // Clear the list
    projectArray.map((project, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = project.title;
        listItem.dataset.index = index; // Set the data-index attribute
        listElement.appendChild(listItem);
    });
}

populateList(projectList, projects);
populateList(archiveList, archiveProjects);

projectList.addEventListener("click", (event) => {
    handleListClick(event, projects, projectImages);
});

archiveList.addEventListener("click", (event) => {
    handleListClick(event, archiveProjects, projectImages);
});

function handleListClick(event, projectArray, imagesContainer) {
    if (event.target.tagName === "LI") {
        const selectedProjectIndex = parseInt(event.target.dataset.index);
        const selectedProject = projectArray[selectedProjectIndex];

        updateProjectDetails(selectedProject, imagesContainer);
    }
}

updateProjectDetails(projects[0], projectImages);
});