import Link from "next/link";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Edit, ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart"
import { ThemeToggle } from "./theme-toggle";

export function NavItem() {
   const { cartCount } = useShoppingCart()
   return (
      <div className="flex items-center justify-center">
         <Link href='#'>
            <Icons.user className="h-7 w-7" />
         </Link>
         <Button variant="ghost" size="sm">
            <Icons.globe className="h-7 w-7" />
         </Button>
         <Link href="/cart">
            <Button size="sm" variant="ghost">
               <ShoppingBag className="h-5 w-5" />
               <span className="ml-2 text-sm font-bold">{cartCount}</span>
               <span className="sr-only">Cart</span>
            </Button>
         </Link>
         <ThemeToggle />
         {process.env.NODE_ENV === 'development' && (
            <Link href='/studio' target="_blank">
               <Button size='sm' variant='ghost'>
                  <Edit className='h-5 w-5' />
               </Button>
            </Link>
         )}
      </div>
   )
}