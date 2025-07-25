export default function Skills() {
  return (
    <section className="flex justify-start items-start py-2">
      <div className="w-full px-88">
        <div className="text-base font-semibold text-pink-400 mb-2">Tech Skill</div>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1 rounded-full bg-yellow-400 text-gray-900 font-bold shadow">JS</span>
          <span className="px-4 py-1 rounded-full bg-blue-500 text-white font-bold shadow">React</span>
          <span className="px-4 py-1 rounded-full bg-cyan-400 text-gray-900 font-bold shadow">Tailwindcss</span>
          <span className="px-4 py-1 rounded-full bg-pink-400 text-white font-bold shadow">Prettier</span>
        </div>
      </div>
    </section>
  );
}
