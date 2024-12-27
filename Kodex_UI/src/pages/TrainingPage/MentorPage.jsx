const MentorPage = () => {
  return (
    <div className="flex flex-col items-center my-24">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-mono mb-16">Mentors</h1>

      {/* Mentor Images Section */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-4 w-full">
        <div className="w-28 h-28 rounded-full bg-color-mentor"></div>
        <div className="w-28 h-28 rounded-full bg-color-mentor"></div>
        <div className="w-28 h-28 rounded-full bg-color-mentor"></div>
        <div className="w-28 h-28 rounded-full bg-color-mentor"></div>
      </div>

      {/* Divider Line */}
      <div className="w-full px-8 mt-16">
        <hr className="bg-gray-400 w-full h-[0.1px]" />
      </div>
    </div>
  );
};

export default MentorPage;
