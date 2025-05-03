export default function Home() {
  return (
    <main className="bg-gradient-to-br from-indigo-100 to-white min-h-screen font-sans">
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-indigo-700">Hi, I'm Unaiza Tanveer</h1>
        <p className="text-xl mt-4 text-gray-700">Aspiring Software Developer | Frontend Enthusiast | AI-ML Intern</p>
        <a href="mailto:tanveerunaiza@gmail.com" className="mt-6 inline-block bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition">Get in Touch</a>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-6">About Me</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          I'm currently pursuing my Bachelors in Computer Applications from Vaagdevi Degree and PG College (CGPA: 8.9). With a strong background in C, C++, and cloud computing, I love creating frontend projects and exploring modern technologies.
        </p>
      </section>

      <section className="bg-indigo-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {['C', 'C++', 'Python', 'Frontend Development', 'Cloud Computing', 'Microsoft Office', 'Problem-solving', 'Communication'].map(skill => (
            <div key={skill} className="bg-white p-4 rounded-lg shadow hover:shadow-md">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Projects</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-indigo-700">Cloud Computing Project</h3>
          <p className="mt-2 text-gray-700">
            Developed a secure cloud storage system by combining data owner and cloud-side access control, ensuring protection against unauthorized attacks.
          </p>
        </div>
      </section>

      <section className="bg-indigo-100 py-12 px-6">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-6 text-center">Certifications</h2>
        <ul className="max-w-3xl mx-auto text-lg text-gray-800 list-disc list-inside">
          <li>AI-ML Virtual Internship</li>
          <li>Programming in Modern C++ (NPTEL)</li>
          <li>Google Analytics for Beginners</li>
          <li>Python Zero To Hero (GUVI)</li>
        </ul>
      </section>

      <section className="text-center py-12 px-6">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Let's Connect</h2>
        <p className="text-gray-700">tanveerunaiza@gmail.com | +91 9398974719</p>
        <a href="https://www.linkedin.com/in/unaizatanveer3" className="inline-block mt-4 text-indigo-700 hover:underline">LinkedIn Profile</a>
      </section>
    </main>
  );
}
