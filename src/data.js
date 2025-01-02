const experienceData1 = [
  [
    { id: 'name', type: 'div', value: 'Company Name', styles: { fontSize: '1rem', fontWeight: 'bold', marginLeft: '0.3rem' } },
    { id: 'date', type: 'div', value: 'Month Year - Month Year', styles: { fontSize: '1rem', width: '11ch' } },
  ],
  [
    { id: 'title', type: 'div', value: 'Job Title', styles: { fontSize: '0.8rem', marginLeft: '0.3rem', fontStyle: 'italic' } },
    { id: 'state-city', type: 'div', value: 'City, State', styles: { fontSize: '0.8rem', fontStyle: 'italic' } },
  ],
  [
    { id: 'desc1', type: 'list', value: 'Implemented microservices architecture using Node.js and Express, improving API response time by 25% and reducing server load by 30%.', styles: { fontSize: '0.8rem' } },
    { id: 'desc2', type: 'list', value: 'Led a cross-functional team in implementing a new feature using React and Redux, resulting in a 20% increase in user engagement within the first month.', styles: { fontSize: '0.8rem' } },
    { id: 'desc3', type: 'list', value: 'Optimized MySQL database queries, reducing page load times by 15% and enhancing overall application performance.', styles: { fontSize: '0.8rem' } },
  ],
];

const experienceData2 = [
  [
    { id: 'name', type: 'div', value: 'Company Name', styles: { fontSize: '1rem', fontWeight: 'bold', marginLeft: '0.3rem' } },
    { id: 'date', type: 'div', value: 'Month Year - Month Year', styles: { fontSize: '1rem', width: '11ch' } },
  ],
  [
    { id: 'title', type: 'div', value: 'Job Title', styles: { fontSize: '0.8rem', marginLeft: '0.3rem', fontStyle: 'italic' } },
    { id: 'state-city', type: 'div', value: 'City, State', styles: { fontSize: '0.8rem', fontStyle: 'italic' } },
  ],
  [
    { id: 'desc1', type: 'list', value: 'Designed and implemented responsive user interfaces with Angular, leading to a 15% improvement in user satisfaction scores', styles: { fontSize: '0.8rem' } },
    { id: 'desc2', type: 'list', value: 'Introduced automated testing processes with Jest and Enzyme, increasing test coverage by 30% and reducing post-release defects by 25%.', styles: { fontSize: '0.8rem' } },
    { id: 'desc3', type: 'list', value: 'Contributed to the adoption of agile methodologies, utilizing Jira and Confluence, improving team productivity by 15% through iterative development cycles.', styles: { fontSize: '0.8rem' } },
  ],
]

const educationData1 = [
  // University Name and Date
  [
    {
      id: 'uni-name',
      type: 'div',
      value: 'University Name',
      styles: { fontSize: '1rem', fontWeight: 'bold', marginLeft: '0.3rem' },
    },
    {
      id: 'uni-date',
      type: 'div',
      value: 'Month Year',
      styles: { fontSize: '1rem', width: '11ch' },
    },
  ],
  // Degree and City/State
  [
    {
      id: 'uni-degree',
      type: 'div',
      value: 'Bachelor of Arts in Computer Science (GPA: 4.00/4.00)',
      styles: { fontSize: '0.8rem', marginLeft: '0.3rem', fontStyle: 'italic' },
    },
    {
      id: 'uni-state',
      type: 'div',
      value: 'City, State',
      styles: { fontSize: '0.8rem', fontStyle: 'italic' },
    },
  ],
  // Courses List
  [
    {
      id: 'uni-courses',
      type: 'list',
      value:
        'Data Structures and Algorithms (C++), Probability and Statistics for Computer Science (Python), Introduction to Computer Science (C++), Linear Algebra with Computational Applications (Python)',
      styles: { fontSize: '0.8rem' },
    },
  ],
];

const personalData = {
  name: 'First Last',
  phone: 'XXX-XXX-XXXX', 
  email: 'firstlast@email.com', 
  linkedin: 'www.linkedin.com/in/firstlast', 
  github: 'www.github.com/firstlast'
}

export {
  educationData1, 
  experienceData1,
  experienceData2, 
  personalData
};