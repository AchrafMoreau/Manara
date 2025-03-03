import Contact from "@/components/contact";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function ContactUs(){
    return (
        <>
        
            <div className="flex text-white flex-col contactUs h-[90vh] justify-center items-center rounded-b-[2vw]"
            
            >
                <TextAnimate className="mx-auto w-full text-center text-7xl text-wrap leading-none" animation="blurInUp" by="word" once as="h2">
                    Feel Free To Contact Us
                </TextAnimate>
            </div>
            <Contact />

        </>
    )
}