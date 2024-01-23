export const metadata = {
  title: 'Projects',
  description: 'This is projects page.',
};

export default function ProjectsPage() {
  return (
  <div className="mt-12">
  <h1 className="text-center text-3xl font-bold">Projects</h1>
  <div className="mt-6 space-y-6">
    <div className="flex flex-col items-center justify-center space-y-2">
      <span className="text-lg font-medium">Aviral Kaintura 👨‍💻</span>
      <a href="https://github.com/error9098x" className="text-blue-500 hover:text-blue-700 focus:outline-none focus:underline border-2 border-green-500 rounded-md px-4 py-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      https://github.com/error9098x
      </a>
      <p className="text-sm my-10 mx-14 text-gray-500">
      Follow Aviral for Exciting projects
      </p>
    </div>
    <div className="flex flex-col items-center justify-center space-y-2">
      <span className="text-lg font-medium">Shiv Awasthi 👨‍💻</span>
      <a href="https://github.com/shivatmax" className="text-blue-500 hover:text-blue-700 focus:outline-none focus:underline border-2 border-green-500 rounded-md px-4 py-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      https://github.com/shivatmax
      </a>
      <p className="text-sm my-10 mx-14 text-gray-500">
        Follow SHIV for Exciting projects
      </p>
    </div>
  </div>
</div>
  );
}
