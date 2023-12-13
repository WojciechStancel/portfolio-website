const CategoryButton = ({active, name, onClick}) => {

    const activeButton = active ? "border-blue-400" : " border-[#c3e2f3bd]"

  return (
   <button className={`rounded-full border-2 ${activeButton} hover:border-white transition-colors duration-300 px-3 py-1 md:px-6 md:py-2 md:text-xl`} onClick={() => onClick(name)}>{name}</button>
  )
}
export default CategoryButton