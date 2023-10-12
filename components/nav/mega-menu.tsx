import { siteConfig } from "@/config/site";
import Link from "next/link";

export function MegaMenu() {
   return (
      <>
         <div className="absolute p-4 dark:bg-white">
            {siteConfig.megaNav.map((item, index) => (
               <div className="flex items-center" key={index}>
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