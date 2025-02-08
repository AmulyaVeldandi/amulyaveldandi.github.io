export default function Home() {
    return (
      <div id="home">
        <section className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">Amulya Veldandi</h1>
          <p className="text-xl text-gray-400 max-w-xl">
            Physician Turned Data Scientist | Neuroimaging & AI Enthusiast
          </p>
          <a
            href="#about"
            className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            Learn More About Me
          </a>
        </section>
  
        <section id="about" className="max-w-3xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-400 leading-7">
            Experienced healthcare professional turned data scientist with a strong foundation in AI, machine learning, and neuroimaging. Currently pursuing an MS in Health Informatics at Indiana University, blending clinical knowledge with data analytics to enhance radiological diagnostics.
          </p>
          <p className="mt-4">
            Focused on developing AI models for brain MRI segmentation, radiology report summarization, and multimodal data integration to support precision medicine.
          </p>
        </section>
  
        <section id="projects" className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <ul className="space-y-6">
            <li className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">Perivascular Spaces Delineation</h2>
              <p className="text-gray-400">Developing deep learning pipelines for brain MRI segmentation, leveraging multimodal imaging techniques for improved accuracy.</p>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">Radiology Report Summarization</h2>
              <p className="text-gray-400">Implementing NLP models to automate radiology report summaries, enhancing efficiency in clinical workflows.</p>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">Multimodal Data Integration</h2>
              <p className="text-gray-400">Fusing diverse medical data sources to support comprehensive diagnostic models for neurodegenerative diseases.</p>
            </li>
          </ul>
        </section>
  
        <section id="experience" className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Experience</h1>
          <ul className="space-y-6">
            <li className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">Research Data Science Intern – Wu Lab, IUSM</h2>
              <p className="text-gray-400">Focused on brain MRI preprocessing, deep learning model development, and neuroimaging data analysis.</p>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">Clinical Data Analyst – PLHI Lab, IUI</h2>
              <p className="text-gray-400">Conducted data analysis, statistical modeling, and healthcare data visualization for research studies.</p>
            </li>
          </ul>
        </section>
  
        <section id="skills" className="max-w-3xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Skills</h1>
          <ul className="grid grid-cols-2 gap-4 text-gray-300">
            <li>Python, R, SQL</li>
            <li>Machine Learning & Deep Learning</li>
            <li>Neuroimaging (MRI, CT Analysis)</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Healthcare Data Analysis</li>
            <li>Data Visualization & Analytics</li>
          </ul>
        </section>
  
        <section id="contact" className="max-w-3xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400">Feel free to reach out for collaborations or professional inquiries.</p>
          <p>Email: <a href="mailto:veldandiamulya@gmail.com" className="text-cyan-400">veldandiamulya@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/amulya-veldandi-104242261/" className="text-cyan-400" target="_blank">Connect Here</a></p>
        </section>
      </div>
    );
  }
  