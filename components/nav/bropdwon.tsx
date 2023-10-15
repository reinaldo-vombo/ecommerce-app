import { siteConfig } from "@/config/site";
import Link from "next/link";

export function DropDwonMenu() {
   return (
      <>
         <div className="absolute left-0 top-[44px] w-[35rem] p-4 rounded-md border-primary border-t-4 dark:bg-white">
            <div className="flex items-center justify-between">
               {siteConfig.megaNav.map((item, index) => (
                  <div className="flex flex-col items-center gap-4" key={index}>
                     <h3 className="w-full text-primary">
                        <b>{item.name}</b>
                     </h3>
                     <ul className="grid gap-4">
                        {item.link.map((link, index) => (
                           <li className="text-black transition-colors hover:text-primary" key={index}>
                              <Link href={link.items}>{link.title}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}

            </div>
         </div>
      </>
   )
}