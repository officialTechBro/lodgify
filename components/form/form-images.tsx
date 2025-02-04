import Image from "next/image"

const FormImage = ({img}: {img: string}) => {
  return (
    <div className="hidden md:flex">
        <Image 
            src={img}
            alt="login"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center"
        />
    </div>
  )
}
export default FormImage