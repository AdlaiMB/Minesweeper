export default function Form({ playername, setPlayername, onSubmit }) {
  return (
    <form
      className="flex flex-col  gap-4 font-[family-name:var(--font-geist-mono)]"
      onSubmit={onSubmit}
    >
      <label htmlFor="name" className="text-lg font-semibold">
        New High score!
      </label>
      <input
        id="name"
        type="text"
        value={playername}
        onChange={(e) => setPlayername(e.target.value)}
        placeholder="Enter your name"
        className="px-4 py-2 border border-grid rounded-md"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-btn text-white rounded-md hover:bg-btn-active w-fit"
      >
        Record Score
      </button>
    </form>
  );
}
