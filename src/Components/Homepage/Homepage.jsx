import React from 'react';

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    return (
      <div>
        <div className='flex min-h-screen bg-zinc-900'>
          {/* Left Sidebar */}
          <div className="flex-1 mt-5 sticky top-0">
            <LeftSidebar />
          </div>

          {/* Vertical Line Divider and Main Post Section */}
          <div className='m-5 flex-[1.9] border-x-2 border-gray-300 px-4'>
            <Post />
          </div>

          {/* Right Sidebar */}
          <div className="flex-1 mt-5 sticky top-0">
            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to PlayCode</h1>
        <p className="text-lg text-gray-300">
          Discover, collaborate, and enhance your coding skills with our vast collection of interactive code snippets.
        </p>
      </header>

      <main className="text-center">
        <div className="space-y-6 max-w-3xl">
          {/* Feature Highlights */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-cyan-400">Interactive Code Examples</h2>
            <p>Explore functional code snippets for HTML, CSS, and JavaScript to kickstart your web development projects.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-cyan-400">Collaborate with Developers</h2>
            <p>Connect with like-minded individuals and work together on exciting coding challenges and projects.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-cyan-400">Request Custom Code</h2>
            <p>Can't find what you're looking for? Request specific code snippets and let the community help you out.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
