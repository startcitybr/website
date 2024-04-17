export default function Button({ type = 'button', styleType = 'small', colorType = 'primary', text, onClick }) {
    const styles = {
      full: `flex justify-center items-center w-full cursor-pointer rounded-lg transition-colors duration-500 font-medium text-center px-5 py-2`,
      transparent: `flex mr-2 cursor-pointer rounded-full sm:inline-flex justify-center items-center bg-transparent  font-semibold text-center outline-none transition duration-100 px-5 py-2 border-2 border-slate-100`,
      small: `mt-8 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-2.5 text-base font-medium focus:outline-none sm:w-auto sm:text-md`,
      xs: `inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 text-base font-medium focus:outline-none sm:w-auto sm:text-sm`,
      color2: `flex mr-2 cursor-pointer rounded-full sm:inline-flex justify-center items-center  font-semibold text-center outline-none transition-colors duration-500 px-5 py-2`,
    };

    const colors = {
      primary: `bg-maincolor text-darkcolor transition-colors duration-500 hover:bg-maincolor`,
      secundary: `text-darkcolor3 hover:text-textlight bg-gradient-to-tr from-cyan-500 to-teal-400 hover:from-cyan-700 hover:to-teal-700 active:from-teal-700 active:to-700-600 focus-visible:ring ring-teal-300 `,
      transparent: `text-slate-100 hover:text-darkcolor3 border-slate-100 border-2 bg-transparent hover:bg-gradient-to-tr  hover:from-maincolor hover:to-teal-400 hover:border-teal-400 active:from-teal-700 active:to-teal-700 focus-visible:ring ring-teal-300 `,
      darkcolor: `text-textlight hover:text-darkcolor bg-darkcolor hover:bg-maincolor`,
      graycolor:  `text-darkcolor3 hover:text-graycolor bg-gray-200 hover:bg-maincolor`,
      alert: `text-textlight bg-red-700 hover:bg-red-800 border-2 border-red-700`,
    }
  
    return (
      <button type={type} onClick={onClick} className={`${styles[styleType]} ${colors[colorType]} mr-1.5`}>
        {text}
      </button>
      
    );
  }