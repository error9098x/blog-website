export const metadata = {
  title: 'Contact',
  description: 'This is contact page.',
};

export default function ContactPage() {
  return (
    <div className="mt-12">
  <h1 className="text-center text-3xl font-bold">Contact</h1>
  <div className="mt-6 space-y-6">
    <div className="flex flex-col items-center justify-center space-y-2">
      <span className="text-lg font-medium">Aviral Kaintura 👨‍💻</span>
      <a href="https://linkedin.com/in/codeavi" className="text-blue-500 hover:text-blue-700 focus:outline-none focus:underline border-2 border-green-500 rounded-md px-4 py-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        https://linkedin.com/in/codeavi
      </a>
      <p className="text-sm my-10 mx-14 text-gray-500">
        Get in touch with Aviral for questions about web development, competitive programming, or collaborating on new projects! When he's not coding, you can catch him taking electronic devices apart to see how they work.
      </p>
    </div>
    <div className="flex flex-col items-center justify-center space-y-2">
      <span className="text-lg font-medium">Shiv Awasthi 👨‍💻</span>
      <a href="https://linkedin.com/in/shiv-awasthi" className="text-blue-500 hover:text-blue-700 focus:outline-none focus:underline border-2 border-green-500 rounded-md px-4 py-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        https://linkedin.com/in/shiv-awasthi
      </a>
      <p className="text-sm my-10 mx-14 text-gray-500">
        Reach out to Shiv to chat about security vulnerabilities, CTF competition tips, or the latest hacking tools. She brings sharp focus and out-of-the-box thinking to deciphering cybersecurity challenges. She's always ready to dig into debugging the latest code or hardware.
      </p>
      <p className="text-xl mt-10 mx-14 text-yellow-500 font-bold">
        Reach Us at ↓
      </p>
      <a href="https://linkedin.com/in/shiv-awasthi" className="text-red-500 hover:text-blue-700 focus:outline-none focus:underline border-2 border-green-500 rounded-md px-4 py-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      📧 L33team.official@gamil.com
      </a>
      
    </div>
  </div>
</div>


  );
}
