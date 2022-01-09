$(function() {
    const model = {
        bio : {
            name : "Maria S.",
            role : "software engineer",
            contacts : {
                mobile: "+38095*****15",
                email: "maria****@gmail.com",
                github: "https://github.com/mas-on",                
                location: "Ukraine, Kyiv"
            },
            welcomeMessage: "Here is my resume",
        skills: [".NET/C#", "Javascript", "SQL", "Python", "Azure", "REST" ],
        biopic: "images/userpic.png"        
        },
        education : {
            schools: [
                {
                    name: "Vologda State Technical University",
                    location: "Russia, Vologda",
                    degree: "engineer",
                    majors: ["Management and computer science in technical systems"],
                    dates: "2001-2006",
                    url: "https://en.vogu35.ru/"
                },
                {
                    name: "Vladimir State University",
                    location: "Russia, Vladimir",
                    degree: "PhD",
                    majors: ["System analysis, management and information processing (industry)"],
                    dates: "2010",
                    url: "http://www.vlsu.ru/index.php?id=183"
                }
            ],
            onlineCourses: [
                {
                    title: "JavaScript Design Patterns",
                    school: "Udacity",
                    dates: "2022",
                    url: "https://classroom.udacity.com/courses/ud989"
                },
                {
                    title: "ES6",
                    school: "Udacity",
                    dates: "2020",
                    url: "https://classroom.udacity.com/courses/ud356"
                },
                {
                    title: "Object-Oriented JavaScript",
                    school: "Udacity",
                    dates: "2020",
                    url: "https://classroom.udacity.com/courses/ud015"
                },
                {
                    title: "Authentication & Authorization: OAuth",
                    school: "Udacity",
                    dates: "2019",
                    url: "https://classroom.udacity.com/courses/ud330"
                },
                {
                    title: "Building High Conversion Web Forms",
                    school: "Udacity",
                    dates: "2018",
                    url: "https://classroom.udacity.com/courses/ud890"
                },
                {
                    title: "Full Stack Foundations",
                    school: "Udacity",
                    dates: "2018",
                    url: "https://classroom.udacity.com/courses/ud088"
                },
                {
                    title: "Data Structures & Algorithms in Python",
                    school: "Udacity",
                    dates: "2017",
                    url: "https://classroom.udacity.com/courses/ud513"
                },
                {
                    title: "Data Wrangling with MongoDB",
                    school: "Udacity",
                    dates: "2016",
                    url: "https://classroom.udacity.com/courses/ud032"
                },                
            ]
        },
        work : {
            jobs: [
                {
                    employer: "Vologdaenergo Branch of the IDGC of the North-West, JSC",
                    title: "sofware engineer",
                    location: "Russia, Vologda",
                    dates: "2006-2016",
                    description: "Responsibilities: requirements analysis, application design, development, documenting, troubleshooting, bugs fixing and user support"
                },
                {
                    employer: "Lime Systems, LLC",
                    title: "ASP.NET/C# developer, Tech Lead (since 2019)",
                    location: "Ukraine, Kyiv",
                    dates: "2016-in progress",
                    description: "Responsibilities: project architecture revising, business requirements analysis and evaluation, new features design, development, documenting, troubleshooting, bugs fixing, 3rd line support"                        
                }
            ]
        },
        projects : {
            projects: [/*{
                title: "string",
                dates: "string (works with a hyphen between them)",
                description: "string",
                images: ["array with string urls"]
            }*/]
          
        }
    }

    const controller = {
        getBio: function() {
            return model.bio;
        },

        getEducation: function() {
            return model.education;
        },

        getWork: function() {
            return model.work;
        },
        
        init: function(){
            viewBio.render();
            viewEducation.render();
            viewWork.render();
        }
    }

    /* views */
    const viewBio = {
        render: function() {
            const bio = controller.getBio();

            const header = $("#header");
            header.append(HTMLheaderRole.replace("%data%", bio.role));
            header.append(HTMLheaderName.replace("%data%", bio.name));
            header.append(HTMLbioPic.replace("%data%", bio.biopic));
            header.append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
            
            const contacts = $("#topContacts,#footerContacts");
            contacts.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
            contacts.append(HTMLemail.replace("%data%", bio.contacts.email));
            contacts.append(HTMLgithub.replace("%data%", bio.contacts.github));
            contacts.append(HTMLlocation.replace("%data%", bio.contacts.location));
            
            if (bio.skills.length > 0) {
                header.append(HTMLskillsStart);
                for (skill in bio.skills) {
                        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
                }
            }
        }
    }

    const viewEducation = {
        render: function() {
            const model = controller.getEducation();
            const education = $("#education");
            
            model.schools.forEach(school => {
                const entry = $(HTMLschoolStart);
                entry.append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));                                
                entry.append(HTMLschoolDates.replace("%data%", school.dates));
                entry.append(HTMLschoolLocation.replace("%data%", school.location));
                school.majors.forEach(major => entry.append(HTMLschoolMajor.replace("%data%", major)));                
                education.append(entry);
            });

            if (model.onlineCourses.length > 0)
                education.append(HTMLonlineClasses);
            model.onlineCourses.forEach(course => {
                const entry = $(HTMLschoolStart);
                entry.append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
                entry.append(HTMLonlineDates.replace("%data%", course.dates));
                entry.append(HTMLonlineURL.replace("%data%", course.url));
                education.append(entry);
            });
        }
    }

    const viewWork = {
        render: function() {
            const model = controller.getWork();
            const work = $("#workExperience");

            model.jobs.forEach(job => {
                const entry = $(HTMLworkStart);
                entry.append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
                entry.append(HTMLworkDates.replace("%data%", job.dates));
                entry.append(HTMLworkLocation.replace("%data%", job.location));
                entry.append(HTMLworkDescription.replace("%data%", job.description));
                work.append(entry);
            });
        }
    }

    controller.init();

}());