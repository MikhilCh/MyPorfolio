// Update this file with your public name and contact details before publishing.
export const profile = {
  name: 'Mikhil Kuppattil',
  role: 'Senior Python developer · APIs & data systems',
  email: 'mikhil.amk@gmail.com',
  github: '',
  linkedin: 'https://www.linkedin.com/in/mikhil-k-972518189/',
};

export const projects = [
  {
    id: 'metriport', number: '01', category: 'Data integration',
    title: 'Clinical data, connected.',
    summary: 'Patient data synchronization across Metriport APIs and application workflows.',
    tags: ['Python', 'Metriport', 'Celery', 'Celery Beat', 'Snowflake'],
    challenge: 'Patient data took time to become available through the existing Snowflake integration. The application needed another way to synchronize that data.',
    approach: 'Investigated Metriport API coverage and designed a background processing system using Celery workers and Celery Beat. Integrated clinical resources including care teams, appointments, observations, vitals, immunizations, allergies, and conditions.',
    outcome: 'Implemented an API-based synchronization path and promptly addressed issues reported in beta and production. The work also strengthened my understanding of clinical data relationships and application structure.',
    diagram: true,
  },
  {
    id: 'dosespot', number: '02', category: 'E-prescribing',
    title: 'A smoother prescription workflow.',
    summary: 'DoseSpot integration to bring e-prescription capabilities into the application.',
    tags: ['API integration', 'DoseSpot', 'Healthcare'],
    challenge: 'Connect the application’s prescribing workflow with a third-party e-prescription service while meeting stakeholder requirements.',
    approach: 'Worked on the DoseSpot integration, clarifying requirements with testers, management, and the integration team and following through on feedback.',
    outcome: 'The implementation received positive client feedback and client approval.',
    diagram: false,
  },
  {
    id: 'optum', number: '03', category: 'Eligibility & authorization',
    title: 'Connecting coverage checks.',
    summary: 'Optum integration for patient eligibility and preauthorization checks.',
    tags: ['Optum', 'API integration', 'Business workflows'],
    challenge: 'Support healthcare coverage workflows through external eligibility and preauthorization services.',
    approach: 'Worked on the Optum integration and clarified expected behavior with relevant teams to align technical implementation with business requirements.',
    outcome: 'Contributed to the integration of patient eligibility and preauthorization checks into application workflows.',
    diagram: false,
  },
  {
    id: 'aspyre', number: '04', category: 'Product engineering',
    title: 'Making insurance logic fit.',
    summary: 'Extended an existing insurance system with deductible, coinsurance, and copay concepts.',
    tags: ['Aspyre', 'Insurance logic', 'Workflow improvements'],
    challenge: 'Add insurance concepts to an existing system while understanding and correcting issues in its current workflow.',
    approach: 'Implemented support for deductibles, coinsurance, and copays, investigated existing behavior, and fixed workflow issues discovered along the way.',
    outcome: 'Extended the system’s insurance functionality and corrected identified workflow problems.',
    diagram: false,
  },
];

// Career history supplied in the February 2026 resume; dates are preserved as stated.
export const experience = [
  {
    company: 'Equipo Health Inc', role: 'Senior Python Developer',
    dates: 'Aug 2024 – Present', location: 'Trivandrum, Kerala',
    summary: 'Build healthcare billing and reporting workflows, including insurance calculations, payment reconciliation, patient reports stored in AWS S3, and interactive reporting with AWS QuickSight.',
    tags: ['Healthcare', 'Python', 'AWS S3', 'QuickSight'],
  },
  {
    company: 'Ramz Al Oula', role: 'Senior Python Developer',
    dates: 'Dec 2021 – Apr 2024', location: 'Riyadh, Saudi Arabia',
    summary: 'Led a team of three building e-commerce microservices with GraphQL and REST APIs. Worked on recommendations, data pipelines, WebSocket order tracking, role-based access, search, and Redis messaging and caching.',
    tags: ['Microservices', 'GraphQL', 'WebSockets', 'Redis'],
  },
  {
    company: 'Actionfi Technologies Pvt. Ltd.', role: 'Junior Python Developer',
    dates: 'Dec 2018 – Nov 2021', location: 'UL CyberPark, Kerala',
    summary: 'Built financial ETL workflows for SAP, Oracle, and S4HANA data using Pandas and NumPy. Developed client interfaces, encrypted data workflows, Celery and RabbitMQ task queues, and custom process automation.',
    tags: ['ETL', 'Pandas', 'Celery', 'RabbitMQ'],
  },
];
