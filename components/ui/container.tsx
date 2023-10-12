interface IContainer {
   className?: string
   children?: React.ReactNode
}
export function Container({ className, children }: IContainer) {
   return (
      <div className={`mx-auto max-w-[1200px] ${className}`}>
         {children}
      </div>

   )
}