import { testimonialBg } from "@/public/assets";

export function Testimonial() {
   return (
      <section className="bg-cover bg-center" style={{ backgroundImage: `url(${testimonialBg})` }}>
         <h1>testimonial</h1>
      </section>
   )
}