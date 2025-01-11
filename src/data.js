const contactInfo = {
  name: 'First Last',
  phone: 'XXX-XXX-XXXX', 
  email: 'firstlast@email.com', 
  linkedin: 'www.linkedin.com/in/firstlast', 
  github: 'www.github.com/firstlast'
};

const educationInfo = [
  {
    id: 'uni-0',
    name: 'University Name', 
    date: 'Month Year', 
    title: 'Bachelors of Arts in Computer Science (GPA 4.00/4.00)',
    cityAndState: 'City, State', 
    highlights: [
      {
        id: 'uni-0-hi-0',
        point: 'Data Structures and Algorithms (C++), Prob and Stat in CS (Python), Intro to CS II (C++), Linear Algebra w/Computational Applications (Python)'
      }
    ]
  },
];

const experienceInfo = [
  {
    id: 'exp-0', 
    name: 'Company Name', 
    date: 'Month Year - Month Year', 
    title: 'Job Title', 
    cityAndState: 'City, State', 
    highlights: [
      {
        id: 'exp-0-hi-0', 
        point: 'Implemented microservices architecture using Node.js and Express, improving API response time by 25% and reducing server load by 30%.', 
      },
      {
        id: 'exp-0-hi-1', 
        point: 'Led a cross-functional team in implementing a new feature using React and Redux, resulting in a 20% increase in user engagement within the first month.', 
      }, 
      {
        id: 'exp-0-hi-2', 
        point: 'Optimized MySQL database queries, reducing page load times by 15% and enhancing overall application performance.',
      }
    ]
  }, 
  {
    id: 'exp-1', 
    name: 'Company Name', 
    date: 'Month Year - Month Year', 
    title: 'Job Title', 
    cityAndState: 'City, State', 
    highlights: [
      {
        id: 'exp-1-hi-0', 
        point: 'Designed and implemented responsive user interfaces with Angular, leading to a 15% improvement in user satisfaction scores.', 
      },
      {
        id: 'exp-1-hi-1', 
        point: 'Introduced automated testing processes with Jest and Enzyme, increasing test coverage by 30% and reducing post-release defects by 25%.', 
      }, 
      {
        id: 'exp-1-hi-2', 
        point: 'Contributed to the adoption of agile methodologies, utilizing Jira and Confluence, improving team productivity by 15% through iterative development cycles.',
      }
    ]
  }, 
];

const projectsInfo = [
  {
    id: 'proj-0', 
    name: 'Project Name', 
    title: 'React.js, Angular, Vue.js, Django, Flask, Ruby on Rails', 
    highlights: [
      {
        id: 'proj-0-hi-0', 
        point: 'Led the development of a microservices-based e-commerce platform using Node.js, resulting in a 40% increase in daily transactions within the first quarter.'
      }, 
      {
        id: 'proj-0-hi-1', 
        point: 'Designed and deployed a scalable RESTful API using Django and Django REST Framework, achieving a 30% improvement in data retrieval speed.'
      }, 
      {
        id: 'proj-0-hi-2', 
        point: 'Implemented a real-time chat feature using WebSocket and Socket.io, enhancing user engagement and reducing response time by 20%.'
      }
    ]
  }, 
  {
    id: 'proj-1', 
    name: 'Project Name', 
    title: 'Spring Boot, Express.js, TensorFlow, PyTorch, jQuery, Bootstrap', 
    highlights: [
      {
        id: 'proj-1-hi-0', 
        point: 'Developed a data visualization dashboard using D3.js, providing stakeholders with real-time insights and improving decision-making processes.'
      }, 
      {
        id: 'proj-1-hi-1', 
        point: 'Built a CI/CD pipeline using Jenkins and Docker, reducing deployment time by 40% and ensuring consistent and reliable releases.'
      }
    ]
  }, 
  {
    id: 'proj-2', 
    name: 'Project Name', 
    title: 'Python, Flask, Jinja2, Firebase, Bootstrap', 
    highlights: [
      {
        id: 'proj-2-hi-0', 
        point: 'Contributed to an open-source project on GitHub, collaborating with a global community and achieving 500+ stars and 50 forks.'
      }, 
      {
        id: 'proj-2-hi-2', 
        point: 'Implemented automated testing for a critical module using Selenium, reducing regression bugs by 30% and ensuring a more stable release cycle.'
      }
    ]
  }
];

const technicalSkillsInfo = {
  languages: 'Rust, Kotlin, Swift, Go, Scala, TypeScript, R, Perl, Haskell, Groovy, Julia, Dart', 
  technologies: 'React.js, Angular, Vue.js, Django, Flask, Ruby on Rails, Spring Boot, Express.js, TensorFlow, PyTorch, jQuery, Bootstrap, Laravel, Flask, ASP.NET, Node.js, Electron, Android SDK, iOS SDK, Symfony', 
};

const eduDefault = {
  id: '',
  name: 'University Name', 
  date: 'Month Year', 
  title: 'Bachelors of Arts in Computer Science (GPA 4.00/4.00)',
  cityAndState: 'City, State', 
  highlights: [
    {
      id: 'uni-0-hi-0',
      point: 'Notable coursework'
    }
  ]
}

const expDefault = {
  id: '', 
  name: 'Company Name', 
  date: 'Month Year - Month Year', 
  title: 'Job Title', 
  cityAndState: 'City, State', 
  highlights: [
    {
      id: '', 
      point: 'Job highlight', 
    }
  ]
}

const projDefault = {
  id: '', 
  name: 'Project Name', 
  title: 'Languages used', 
  highlights: [
    {
      id: '', 
      point: 'proj highlight'
    },
  ]
}

const fonts = {
  '1': "'Georgia', serif", 
  '2': "'Tahoma', sans-serif",
  '3': "'Arial', sans-serif",
  '4': "'Helvetica', sans-serif",
  '5': 'Calibri, sans-serif',
  '6': 'Cambria, serif', 
  '7': '"Times New Roman", Times, serif'
}


export {
  contactInfo, 
  educationInfo, 
  experienceInfo, 
  projectsInfo,
  technicalSkillsInfo,
  eduDefault, 
  projDefault, 
  expDefault,
  fonts
};