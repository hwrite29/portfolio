export default function Contact() {
  return (
    <section className="h-screen flex items-center bg-gray-100">
      <div className="text-center w-full">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg text-gray-700">
          이메일: <a href="mailto:your.email@example.com" className="text-blue-500 underline">your.email@example.com</a>
        </p>
        <p className="text-lg text-gray-700 mt-2">
          GitHub: <a href="https://github.com/your-github" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">github.com/your-github</a>
        </p>
      </div>
    </section>
  );
}
