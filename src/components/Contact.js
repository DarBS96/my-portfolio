const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Submit the form below</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6] rounded-md"
        />
        <textarea
          name="message"
          rows="5"
          className="bg-[#ccd6f6] p-2 rounded-md"
          placeholder="Message"
        />
        <button
          type="submit"
          className="bg-blue-400 w-20 rounded-lg py-2 my-2 m-auto text-white hover:bg-blue-600 duration-150 border-2 border-solid border-blue-200 hover:border-blue-400 hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
