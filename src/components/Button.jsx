function Button({ loading, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        class="text-white w-[100px] mx-auto bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </>
  );
}

export default Button;
