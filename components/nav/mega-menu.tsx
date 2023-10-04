import { siteConfig } from "@/config/site";
import Link from "next/link";

export function MegaMenu() {
   return (
      <>
         <div className="dark:bg-white p-4 absolute">
            {siteConfig.megaNav.map((item, index) => (
               <div className="flex items-center">
                  <h3>{item.name}</h3>
                  <ul>
                     {item.link.map((link, index) => (
                        <li key={index}>
                           <Link href={link.items}>{link.title}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </>
   )
}