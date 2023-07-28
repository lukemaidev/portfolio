import useInput from "@/ultil/useInput";

export default function ContactPage() {

    const name = useInput("");
    const email = useInput("");
    const message = useInput("");
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting me, I will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <div className="h-full w-full">
      <form
        className="flex flex-col justify-center items-center h-full w-full"
        onSubmit={handleSubmit}
      >
        <label className="">Name</label>
        <input className="text-slate-950" type="text" name="name" value={name.value} onChange={name.onChange}/>
        <label className="">Email</label>
        <input className="text-slate-950" type="text" name="email" value={email.value} onChange={email.onChange} />
        <label className="">Message</label>
        <textarea className="h-full text-slate-950" type="text" name="message" value={message.value} onChange={message.onChange}/>
        <button className="glass background-color" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
