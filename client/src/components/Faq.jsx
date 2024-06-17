import faqs from "../../public/data/faq"
import FaqCard from "./FaqCard"
const Faq = () => {
  return (
    <div className="my-[14vw] md:my-[8vw] px-[8vw] md:px-[7vw] flex flex-col font-manrope text-white">
        <h1>FAQ&#8217;s</h1>
        <h1 className="text-[3vw] text-[#D9F203] font-bold">Frequently asked question</h1>
        <div className="flex flex-col gap-[2vw] mt-[3vw]">
            {
                faqs?.map((faq,index)=>{
                    return (<FaqCard ques={faq.ques} ans={faq.ans} key={index}/>)
                })
            }
        </div>
    </div>
  )
}

export default Faq