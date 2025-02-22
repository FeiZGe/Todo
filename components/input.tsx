import { inputProps } from "@/types"

const Input = ({name, type, placeholder, value}: inputProps) => {
  return (
    <div>
      <input 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        value={value}
        className="block w-full p-4 mx-2 border rounded-lg text-base bg-slate-200 border-slate-200 placeholder-slate-400 text-black"
      />
    </div>
  )
}

export default Input
