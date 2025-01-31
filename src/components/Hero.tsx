export const Hero = () => {
  return (
    <>
      <main className="text-center flex flex-col items-center justify-center min-h-[60vh]">
        <div className="flex items-center py-2 px-[14px] rounded-xl border border-blue-700 max-w-fit max-h-fit gap-2 text-sm text-blue-700">
          <div className="w-2 h-2 animate-pulse bg-blue-700 rounded-full"></div>
          <p>Available for work</p>
        </div>
        <div className="mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-black to-blue-800 bg-clip-text text-transparent drop-shadow-lg">
            Aspiring Web Developer
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-700 opacity-90 shadow-sm">
            Constantly Learning, Building, and Growing in Tech
          </p>
          <div>
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>
        </div>
      </main>
    </>
  );
};
