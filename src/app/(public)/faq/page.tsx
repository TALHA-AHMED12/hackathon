export default function Faq() {
  return (
    <div className="flex flex-col justify-around items-center gap-16 my-12 md:my-24 px-4">
      <div className="flex flex-col justify-around items-center text-center md:text-left">
        <h1 className="font-[Helvetica] font-bold text-3xl md:text-5xl text-[#333333]">
          Questions Looks Here
        </h1>
        <p className="text-base font-normal text-[#4F4F4F] font-[Inter] mt-4 md:mt-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[1320px]">
        {[
          "What types of chairs do you offer?",
          "How can we get in touch with you?",
          "Do your chairs come with a warranty?",
          "What will be delivered? And When?",
          "Can I try a chair before purchasing?",
          "How do I clean and maintain my Comforty chair?"
        ].map((question, index) => (
          <div key={index} className="bg-[#F7F7F7] flex justify-center items-center rounded-lg p-5">
            <div className="flex flex-col justify-between w-full">
              <div className="flex justify-between items-center">
                <h2 className="font-[Inter] font-bold text-lg text-[#333333]">
                  {question}
                </h2>
                <i className="bi bi-plus-lg"></i>
              </div>
              <p className="font-[Inter] font-normal text-base text-[#4F4F4F] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}