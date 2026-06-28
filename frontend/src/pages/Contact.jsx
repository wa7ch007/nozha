export default function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="mt-4 space-y-4 max-w-md">
        <input className="w-full p-2 border rounded" placeholder="Your Name" />
        <input className="w-full p-2 border rounded" placeholder="Your Email" />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Message"
        ></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
