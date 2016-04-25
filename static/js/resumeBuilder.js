
var bio = {
  "name": "Nick Daniel",
  "role": "Web Developer",
  "contacts": {
        "mobile": "123-4568",
        "email": "nick,daniel@gmail.com",
        "github": "NDaniel1096",
        "twitter": "@notNickDaniel",
        "location": "Ardmore, Al"
  },
  "welcomeMessage": "Welcome to my Resume",
  "skills": [
    "Python", "Django", "Angular", "HTML/CSS"],
  "bioPic": "static/images/fry.jpg"
};

function bioDisplay() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedMobile);
    $("#header").append(formattedEmail);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedGithub);
    $("#header").append(formattedTwitter);
    

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
  }
}

bioDisplay();

var education = {
  "schools" : [
    {
      "name": "Columbia Southern University",
      "degree": "n/a",
      "date": 2010,
      "location": "Orange Beach",
      "major": "Criminal Justice"
    }
  ],
    "onlineClasses" : [
        {
            "name": "Udacity",
        }
    ]
};

function displayEd () {
  for (var schoolNum in education.schools) {
    $("#education").append(HTMLschoolStart);
 
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schoolNum].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolNum].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolNum].date);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolNum].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolNum].major);

    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolMajor);
                
  }
};

displayEd();

var work = {
  "jobs" : [
    {
      "title": "Product Specialist",
      "employer": "ImageHawk Inc.",
      "years": 2,
      "dates": "2014 to present",
      "location": "Madison, Al",
      "description": "Product Management, Front-end dev, user experience"
    },
    {
      "title": "Deputy | Special Response Team",
      "employer": "Limestone County Sheriff's Office",
      "years": 7,
      "dates": "2007 to 2014",
      "location": "Limestone County, Al",
      "description": "Patrol"
    }
  ]
};

function displayWork() { 
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

var projects = {
  "projects" : [
    {
      "title": "fireHub",
      "dates": "2016",
      "description": "Phase 1 developing, AngularJS + Django + Django Rest",
      "images": ["static/images/fireHub.png"]
    },
    {
      "title": "LegalTec",
      "dates": "BETA Release",
      "description": "Case Management cloud-based solution for the Office of the District Attorney",
      "images": ["static/images/legaltec.png"]
    }
  ]
};

projects.display = function() {
    for (var project in projects.projects) {
     $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
     $(".project-entry:last").append(formattedTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedProjectDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);
      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display();



function inName() {
    var array = bio.name.split(" "); 
    array[1] = array[1].toUpperCase(); 
    array[0] = array[0].slice(0,1).toUpperCase() + array[0].slice(1).toLowerCase();
    var internationalName = array.join(" ");

    return internationalName;
}

$('#header').append(internationalizeButton);


$('#mapDiv').append(googleMap);
